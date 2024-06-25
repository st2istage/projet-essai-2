import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { services } from '../services.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
gotomsg() {
throw new Error('Method not implemented.');
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

