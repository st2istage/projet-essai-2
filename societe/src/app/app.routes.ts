import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsComponent } from './forms/forms.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MsgComponent } from './msg/msg.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { SecComponent } from './sec/sec.component';
import { ProfilComponent } from './profil/profil.component';
import { SecurityComponent } from './security/security.component';
import { AideComponent } from './aide/aide.component';
export const routes: Routes = [
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' },
  {path :"app-signin" , component: SigninComponent},
  {path :"app-signup" , component : SignupComponent},
  {path :"app-forms",component :FormsComponent},
  {path :"app-acceuil",component :AcceuilComponent},
  {path: "app-msg",component : MsgComponent},
  {path: "app-sec",component : SecComponent},
  {path: "app-profil",component : ProfilComponent},
  {path: "app-security",component : SecurityComponent},
  {path: "app-aide",component : AideComponent}

  
];
@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

