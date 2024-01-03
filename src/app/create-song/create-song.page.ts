import {Component, inject, OnInit} from '@angular/core';
import {Song} from "../models/song";
import {FirestoreService} from "../services/firestore.service";
import {LoadingController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.page.html',
  styleUrls: ['./create-song.page.scss'],
})
export class CreateSongPage implements OnInit {
  private data = inject(FirestoreService);

  song: Song= {
    name: '',
    albumName: '',
    artistName: '',
    description: ''
  }
  constructor(  private loadingController: LoadingController,private router: Router
  ) { }

  ngOnInit() {
  }

  async createSong(){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();

    await this.data.addSong({...this.song})

    this.song={
      name: '',
      albumName: '',
      artistName: '',
      description: ''
    }
    this.router.navigateByUrl('/');

    await loading.dismiss();



  }

}
