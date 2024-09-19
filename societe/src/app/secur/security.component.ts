import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { window } from 'rxjs';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [],
  templateUrl: './security.component.html',
  styleUrl: './security.component.css'
})
export class SecurityComponent {
  router: any;
  ngOnInit() {
    this.encryptUrl();
  }
  encryptUrl() {
    throw new Error('Method not implemented.');
  }

  
  ngAfterViewInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.encryptUrl();
      }
    });
  }}
