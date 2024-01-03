import { CommonModule } from '@angular/common';
import {Component, inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IonicModule, LoadingController, Platform} from '@ionic/angular';
import {Song} from "../models/song";
import {FirestoreService} from "../services/firestore.service";

@Component({
  selector: 'app-detail-song',
  templateUrl: './detail-song.page.html',
  styleUrls: ['./detail-song.page.scss'],
})
export class DetailSongPage implements OnInit {
  @Input()
  public song!: Song;
  private data = inject(FirestoreService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);
  isDeleting:boolean=false
  isLoading:boolean=true
  constructor(private loadingController: LoadingController,private router: Router) {}

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.data.getSongById(id).subscribe(res => {
      this.song = res;
      this.isLoading=false

    });
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Songs' : '';
  }

  async onDelete(){
    this.isDeleting=true
    await this.data.deleteSong(this.song)
    this.router.navigateByUrl('/');

  }
}
