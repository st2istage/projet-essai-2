import { NgFor, NgIf } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsComponent } from "../forms/forms.component";
import { NgModel, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { services } from '../services.service';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router,RouterModule } from '@angular/router';
declare let window: any;

@Component({
    selector: 'app-acceuil',
    templateUrl: './acceuil.component.html',
    styleUrl: './acceuil.component.css',
    imports: [NgIf, FormsComponent ,NgFor, FormsModule,ReactiveFormsModule],
    standalone: true,
})
export class AcceuilComponent {
  contacts = [
    { name: 'narimen' },
    { name: 'maryem' },
    { name: 'sarra' }
  ];
  filteredContacts = [...this.contacts];
  searchQuery = '';  
  showForm = false;
  router: any;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  filterContacts() {
    this.filteredContacts = this.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  addContact(newContact: { name: string }) {
    this.contacts.push(newContact);
    this.filterContacts();
  }
  monthNames: any;
  gotoacceuil() {
    throw new Error('Method not implemented.');

}
 
  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();


  nextMonth(): void {
    this.currentMonth = (this.currentMonth + 1) % 12;
    if (this.currentMonth === 0) {
      this.currentYear += 1;
    }
  }

  prevMonth(): void {
    this.currentMonth = (this.currentMonth - 1 + 12) % 12;
    if (this.currentMonth === 11) {
      this.currentYear -= 1;
    }
  }

  ngOnInit() {
    this.encryptUrl();
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
}
