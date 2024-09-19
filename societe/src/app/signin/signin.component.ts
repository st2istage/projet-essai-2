import { Component } from '@angular/core';
import {services } from '../services.service'; 
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
declare let window: any;
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  imports: [FormsModule, CommonModule, RouterModule],
  standalone: true,
})
export class SigninComponent {

  email: string = '';
  password: string = '';
  _text: string | undefined;
name: any;
  constructor(private service: services, private router: Router) {}

  onSubmit() {
    const encryptedEmail = this.service.encrypt(this.email);
    const encryptedPassword = this.service.encrypt(this.password);
    console.log(encryptedEmail);
    console.log(encryptedPassword);
  }
  ngOnInit() {
    this.encryptUrl();
    console.log( this._text);
  }

  encryptUrl() {
    const encodedUrl = encodeURIComponent(window.location.href);
    window.history.replaceState({}, '', encodedUrl);
  }

  ngAfterViewInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.encryptUrl();
      }
    });


}
gotosignin() {
  this.router.navigate(["/app-signin"]);
}
gotosignup() {
  this.router.navigate(["/app-signup"]);
}
gotoforgot() {
  this.router.navigate(["/app-forgot"]);
}
showPassword: boolean = false; // Initially hide password


// Toggle password visibility
togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
}


// Prevent default behavior for links within the form
preventDefault(event: Event): void {
  event.preventDefault();
}


}
