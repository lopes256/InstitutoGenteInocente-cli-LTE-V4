import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import * as moment from "moment";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginUsuario!: string;
  password!: string;
  remember: boolean = false;
  todayNumber: number = Date.now();
  todayDate: Date = new Date();
  tokenExp!: Date;

  constructor(
    private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
      return;
    }

    const storageLogin = localStorage.getItem('loginUsuario');
    const storageRemember = localStorage.getItem('remember');

    if (storageRemember && storageRemember == 'true') {
      this.loginUsuario = storageLogin ? storageLogin : '';
      this.remember = storageRemember == 'true' ? true : false;

      if (!this.remember) {
        this.loginUsuario = '';
      }
    } else {
      this.loginUsuario = '';
      this.remember = false;
    }
  }

  ngAfterViewInit(): void {
    
  }

  onSubmit() {
    localStorage.removeItem('access_token');

    this.auth
      .doLoginUser(this.loginUsuario, this.password)
      .subscribe({
        next: (response) => {
          const decodedToken = jwtDecode<JwtPayload>(response.accessToken);
          const expiresAt = moment.unix(decodedToken.exp!);

          localStorage.setItem('access_token', response.accessToken);
          localStorage.setItem('loginUsuario', this.loginUsuario);
          localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
          localStorage.setItem('refreshDashboard', 'true');

          if (this.remember && this.remember == true) {
            localStorage.setItem('remember', 'true');
          } else {
            localStorage.removeItem('remember');
          }

          this.router.navigate(['/dashboard']);
        },
        error: (errorResponse) => {
          console.clear();
          console.log(errorResponse);

          this.password = '';

          if (errorResponse.error) {
            // this.sweetalert.showErrorFix(this.retornoMensagemBR(errorResponse.error.errors.message), 'Atenção, Login Falhou!');
          } else if (errorResponse.status == 0) {
            console.log(errorResponse.statusText);

            let mesg: string;
            mesg = `<p>Não foi possível estabelecer uma conexão com o servidor. Por favor, tente novamente mais tarde.</p>
                <p><strong>Possíveis causas:</strong></p>
                <ul style="text-align: left;">
                    <li>O servidor está temporariamente indisponível.</li>
                    <li>Problemas na sua conexão de internet.</li>
                    <li>Manutenção no servidor.</li>
                </ul>
                <p>Se o problema persistir, por favor, entre em contato com o suporte técnico.</p>`;

            // this.sweetalert.showErrorFix(mesg, 'Erro de Conexão');
          } else {
            // this.sweetalert.showErrorFix('Usuário e/ou senha incorreto(s).', 'Atenção, Login Falhou!');
          }
        }
      });
  }
}
