# Igilte491

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Comandos


ng g module template --routing
ng g c template/control-sidebar --skip-tests
ng g c template/footer --skip-tests
ng g c template/main-sidebar --skip-tests
ng g c template/navbar --skip-tests

ng g component dashboard --skip-tests

ng g component layout --skip-tests
ng g component login --skip-tests
ng g component logout --skip-tests

ng g service utils/data-service --skip-tests
ng g service utils/data-utils --skip-tests
ng g service utils/token-utils --skip-tests

ng g service auth --skip-tests
ng g service auth-interceptor --skip-tests
ng g guard auth --skip-tests    -> CanActivate

ng g interface interfaces/i-login
ng g interface interfaces/i-token
ng g interface interfaces/i-access-token

ng g module security --routing
ng g service security/security --skip-tests
ng g c security/users --skip-tests
ng g c security/usergroup --skip-tests
ng g c security/usersform --skip-tests
ng g c security/usergroupform --skip-tests
ng g c security/userprofile --skip-tests
ng g c security/change-password --skip-tests

ng g module people --routing
ng g c people/person --skip-tests
ng g c people/person-from --skip-tests

