import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  params: any;
  tituloPag!: string;
  personTypeCode!: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsActiv => {
      this.params = paramsActiv;
      this.getCodigoTipoPessoa();
      this.getTituloPage();
    });
  }

  getCodigoTipoPessoa() {
    if (this.params && this.params.tipoPessoa) {
      this.personTypeCode = Number(this.params.tipoPessoa);
    }
  }

  getTituloPage() {
    switch (this.personTypeCode) {
      case 1:
        this.tituloPag = 'Fornecedores';
        break;
      case 2:
        this.tituloPag = 'Colaboradores';
        break;
      case 3:
        this.tituloPag = 'Filiais';
        break;
      case 4:
        this.tituloPag = 'Responsáveis';
        break;
      case 5:
        this.tituloPag = 'Famílias';
        break;
      case 6:
        this.tituloPag = 'Beneficiários';
        break;
      default:
        this.tituloPag = 'Pessoas';
        break;
    }
  }

}
