import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../shared/shared.module';
import {UsersService} from '../shared/services/users.service';
import {HttpClientModule} from '@angular/common/http';
import {LoginService} from '../shared/services/login.service';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent
  ],
  providers: [
    UsersService,
    LoginService,
    HttpClientModule
  ]
})
export class AuthModule {
}
