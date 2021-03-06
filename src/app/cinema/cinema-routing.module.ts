import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NowPlayingComponent } from './pages/now-playing/now-playing.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { PremieresComponent } from './pages/premieres/premieres.component';
import { CartComponent } from './pages/cart/cart.component';
import { CentralPageComponent } from './pages/central-page/central-page.component';
import { MovieComponent } from './pages/movie/movie.component';
import { ShowComponent } from './pages/show/show.component';
import { ValidateTokenGuard } from './guards/validate-token.guard';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('../cinema/admin/admin.module').then( m => m.AdminModule )
  },
  {
    path: '',
    component: CentralPageComponent,
    children: [
      { path: 'home',         component: HomeComponent },
      { path: 'now-playing',  component: NowPlayingComponent },
      { path: 'coming-soon',  component: ComingSoonComponent },
      { path: 'premieres',    component: PremieresComponent },
      { path: 'movie/:id',    component: MovieComponent },

      { path: 'buy-show/:id', component: ShowComponent,
      canActivate: [ValidateTokenGuard],
      canLoad: [ValidateTokenGuard]
      },

      { path: 'cart',         component: CartComponent },
      { 
        path: 'auth',
        loadChildren: () => import('../cinema/auth/auth.module').then( m => m.AuthModule )
      },

      { path: '**',          redirectTo: 'home'}
      
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CinemaRoutingModule { }
