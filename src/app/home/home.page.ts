import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import {Song} from "../models/song";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data = inject(FirestoreService);
  songs:Song[]=[]
  constructor() {
    this.data.getSongs().subscribe(res => {
      this.songs = res;
    });
  }


  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }


}
