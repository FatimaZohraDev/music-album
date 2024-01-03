import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'create-song',
    loadChildren: () => import('./create-song/create-song.module').then( m => m.CreateSongPageModule)
  },
  {
    path: 'song/:id',
    loadChildren: () => import('./detail-song/detail-song.module').then(m => m.DetailSongPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create-song',
    loadChildren: () => import('./create-song/create-song.module').then( m => m.CreateSongPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
