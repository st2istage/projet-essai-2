import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SigninComponent } from "./signin/signin.component";
import { FormsModule, NgModel } from '@angular/forms';  // Import FormsModule
import { MessagesComponent } from './messages/messages.component';
import { FormsComponent } from './forms/forms.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, SigninComponent,  FormsModule , MessagesComponent,FormsComponent ]
})
export class AppComponent {
  title = 'societe';
}