import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  {path :"app-signin" , component: SigninComponent},
  {path :"app-signup" , component : SignupComponent}
  

];
