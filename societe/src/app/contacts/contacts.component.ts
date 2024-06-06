// contacts.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from "../forms/forms.component";
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css'],
    standalone: true,
    imports: [FormsModule, FormsComponent, NgFor]
})
export class ContactsComponent {
  contacts = [
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Charlie' }
  ];
  filteredContacts = [...this.contacts];
  searchQuery = '';  // Declare searchQuery property
  showForm = false;

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
}
