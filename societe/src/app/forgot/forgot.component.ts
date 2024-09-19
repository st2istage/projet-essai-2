import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { services } from '../services.service';

@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [],
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.css'
})
export class ForgotComponent {
  constructor(private service: services, private router: Router) {}
  gotoforgot() {
    this.router.navigate(["/app-forgot"]);
  }
}
