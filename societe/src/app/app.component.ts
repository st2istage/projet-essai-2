import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SigninComponent } from "./signin/signin.component";
import { FormsModule } from '@angular/forms'; 
import { NgModule } from '@angular/core';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, SigninComponent,  FormsModule ]
})
export class AppComponent {
  title = 'societe';
}