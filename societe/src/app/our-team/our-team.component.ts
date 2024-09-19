import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css'
})
export class OurTeamComponent {
router: any;
constructor(private route:Router){

}
gotoourteam() {
  this.router.navigate(["/app-our-team"]);
}
teamMembers = [
  {
    name: 'Al Malik',
    title: 'Executive Officer',
    image: 'assets/al-malik.jpg',
  },
  {
    name: 'Al Karim',
    title: 'Chief Executive Officer',
    image: 'assets/al-karim.jpg',
  },
  {
    name: 'Al Raqib',
    title: 'Chief Executive Officer',
    image: 'assets/al-raqib.jpg',
  },
  {
    name: 'Al Bari',
    title: 'Chief Executive Officer',
    image: 'assets/al-bari.jpg',
  },
];
}
