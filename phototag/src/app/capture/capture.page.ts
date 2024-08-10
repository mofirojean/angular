import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton, 
  IonButtons,
  IonMenuButton,
  IonFabButton,
  IonFab,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { camera } from 'ionicons/icons';
import { PhotoService } from '../services/photo/photo.service';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.page.html',
  styleUrls: ['./capture.page.scss'],
  standalone: true,
  imports: [IonButtons, 
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonFabButton,
    IonFab,
    IonIcon,
    IonMenuButton,
    CommonModule,
    FormsModule,
  ]
})
export class CapturePage implements OnInit {
  constructor(
    private photoSevice: PhotoService
  ) {
    addIcons({camera})
  }

  ngOnInit() {}

  openCamera() {
    this.photoSevice.takePhoto();
  }
}
