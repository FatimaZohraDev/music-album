import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Platform } from '@ionic/angular';
import {Song} from "../models/song";

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SongComponent {
  private platform = inject(Platform);
  @Input() song?: Song;
  isIos() {
    return this.platform.is('ios')
  }
}
