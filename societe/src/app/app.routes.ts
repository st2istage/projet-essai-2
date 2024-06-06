import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { MessagesComponent } from './messages/messages.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsComponent } from './forms/forms.component';

export const routes: Routes = [
  {path :"app-signin" , component: SigninComponent},
  {path :"app-signup" , component : SignupComponent},
  {path :"app-messages", component :MessagesComponent},
  {path :"app-contacts",component :ContactsComponent},
  {path :"app-forms",component :FormsComponent}

];

