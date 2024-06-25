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
  constructor(private service: services, private router: Router) {}

  onSubmit() {
    const encryptedEmail = this.service.encrypt(this.email);
    const encryptedPassword = this.service.encrypt(this.password);
    console.log('Encrypted Email:', encryptedEmail);
    console.log('Encrypted Password:', encryptedPassword);
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
gotosignin() {
  throw new Error('Function not implemented.');
}
}
