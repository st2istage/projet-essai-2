import { Component } from '@angular/core';
import { services } from '../services.service'; 
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare let window: any;

@Component({
  selector: 'app-msg',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css'] 
})
export class MsgComponent {


  dataToEncrypt: string = '';
  constructor(private service: services, private router: Router) {}


  onSubmit() {

  }
  crypterDonnees() {
    const dataToEncrypt = this.service.encrypt(this.dataToEncrypt);
    console.log('Encrypted data:', dataToEncrypt);
    }
updateFileInput() {
throw new Error('Method not implemented.');
}

  ngOnInit() {
    this.encryptUrl();
  }

  encryptUrl() {
    const encodedUrl = encodeURIComponent(window.location.href);
    window.history.replaceState({}, '', encodedUrl);
  }

  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.encryptUrl();
      }
    });
  }


  gotomsg() {
  }
}
