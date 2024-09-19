import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SigninComponent } from "./signin/signin.component";
import { FormsModule } from '@angular/forms'; 
import { FormsComponent } from './forms/forms.component';
import { Router } from '@angular/router';
import { services } from './services.service';
import { CommonModule } from '@angular/common';
import { MsgComponent } from './msg/msg.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ForgotComponent } from './forgot/forgot.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl:'./app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, SigninComponent,  FormsModule , FormsComponent,CommonModule,MsgComponent,OurTeamComponent,ForgotComponent]
})
export class AppComponent {
  title = 'societe';
  constructor(private router: Router ,private service: services) {}

  navigateWithEncryptedParams() {
    const param = 'app-msg';
    const encryptedParam = this.service.encrypt(param);
    console.log('Paramètre chiffré:', encryptedParam);
    this.router.navigate(['/app-msg'], { queryParams: { encryptedData: encryptedParam } });
  }
}