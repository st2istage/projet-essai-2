import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(private router: Router) {
    // Constructor body
  }

  gotosignin() {
    this.router.navigate(["/app-signin"]);
  }
  gotosignup() {
    this.router.navigate(["/app-signup"]);
  }

  logout() {
    console.log('deconnexion');
  }
  gotomessages() {
    this.router.navigate(["/app-messages"]);
  
  }
  gotocontacts() {
    this.router.navigate(["/app-contacts"]);
  
  }
}

