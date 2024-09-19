import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { services } from '../services.service';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [  NgFor , NgIf],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {


  
  gotoprofil() {
    throw new Error('Function not implemented.');
  }


  
  showLanguage: boolean = false;
 
  selectedLanguage: string = 'Français'; // Langue par défaut
  
  languages: string[] = ['Français', 'Anglais', 'Espagnol', 'Allemand']; // Liste des langues
  
  showLanguageNotification() {
    this.showLanguage = !this.showLanguage;
  }
  closeLanguageNotification() {
    this.showLanguage = false;
  }
  showDataSent: boolean = false;
  dataSentTime: Date | null = null; // Date d'envoi des données
  
  showDataSentNotification() {
    // Simuler l'envoi de données avec la date actuelle
    this.dataSentTime = new Date();
    this.showDataSent = true;
  }

  closeDataSentNotification() {
    this.showDataSent = false;
  }
  

}
