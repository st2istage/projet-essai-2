import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { services } from '../services.service'; 
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

declare let window: any;

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule, RouterModule],
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  nom: string = '';
  email: string = '';
  password: string = '';
  Address2: string = '';
  city: string = '';
  _text: string | undefined;

  constructor(private service: services, private router: Router) {}

  onSubmit() {
    const encryptedNom = this.service.encrypt(this.nom);
    const encryptedEmail = this.service.encrypt(this.email);
    const encryptedPassword = this.service.encrypt(this.password);
    const encryptedAddress2 = this.service.encrypt(this.Address2);
    const encryptedCity = this.service.encrypt(this.city);
    console.log(encryptedNom);
    console.log( encryptedEmail);
    console.log( encryptedPassword);
    console.log( encryptedAddress2);
    console.log( encryptedCity);
  }

  ngOnInit() {
    this.encryptUrl();
    console.log('url :' + this._text);
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

  gotosignup() {
    this.router.navigate(["/app-signup"]);
  }
  showPassword: boolean = false; // Initially, the password is hidden
  
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword; // Toggle between showing and hiding password
  }

}
