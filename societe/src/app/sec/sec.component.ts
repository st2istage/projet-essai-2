import { Component } from '@angular/core';
import { NavigationEnd ,Router, RouterModule} from '@angular/router';

declare let window: any;
@Component({
  selector: 'app-sec',
  standalone: true,
  imports: [],
  templateUrl: './sec.component.html',
  styleUrl: './sec.component.css'

})
export class SecComponent {

  constructor(private router : Router){}
gotoourteam() {
  this.router.navigate(["/app-our-team"]);
}
  _text: string | undefined;
  

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
gotosec(){  this.router.navigate(["/app-sec"]);}

}
