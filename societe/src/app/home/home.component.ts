import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { services } from '../services.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
gotosec() {
  this.router.navigate(["/app-sec"]);
}
gotoaide() {
  this.router.navigate(["/app-aide"]);
}
gotoprofil() {
  this.router.navigate(["/app-profil"]);
}
gotosecurity() {
  this.router.navigate(["/app-security"]);

}


  services: any;


  gotosignin() {
    this.router.navigate(["/app-signin"]);
  }
  gotosignup() {
    this.router.navigate(["/app-signup"]);
  }

  logout() {
    console.log('deconnexion');
  }
  gotomsgs() {
    this.router.navigate(["/app-msg"]);
  
  }
  gotocontacts() {
    this.router.navigate(["/app-contacts"]);
  
  }
  gotoacceuil() {
    this.router.navigate(["/app-acceuil"]);
  
  }
 
  constructor(private router: Router) {}


}

