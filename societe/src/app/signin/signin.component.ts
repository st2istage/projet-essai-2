import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [NgIf  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
gotosignin() {
throw new Error('Method not implemented.');
}
  
  name: string = '';
  email: string = '';

  onSubmit() {
    console.log('Name:', this.name);
    console.log('Email:', this.email);
  } 
  


}