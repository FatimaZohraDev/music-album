import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailSongPage } from './detail-song.page';

import { IonicModule } from '@ionic/angular';

import { DetailSongPageRoutingModule } from './detail-song-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSongPageRoutingModule
  ],
  declarations: [DetailSongPage]
})
export class DetailSongPageModule {}
