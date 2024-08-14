import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonButtons,
  IonIcon,
} from '@ionic/angular/standalone';
import { Viewer } from 'cesium';
import { CesiumService } from '../services/photo/cesium.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonMenuButton,
    IonButtons,
    IonIcon,
    CommonModule,
    FormsModule,
  ],
})
export class ViewPage implements OnInit, AfterViewInit {
  @ViewChild('mapContainer') content: ElementRef | undefined;

  constructor(private cesiumService: CesiumService) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    const viewer = new Viewer(this.content?.nativeElement);
    this.cesiumService.register(viewer);
    this.cesiumService.addPhotos();
  }
}
