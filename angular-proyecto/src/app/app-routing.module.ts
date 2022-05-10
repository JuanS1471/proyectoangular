
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { INTERNAL_PATHS } from './data/constants/routes';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { Page404Component } from './modules/server/page404/page404.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m)=> m.AuthModule)
  },
  {
    path: INTERNAL_PATHS.SERVER_E_404,
    component: Page404Component
  },
  {
    path: 'panel',
    component: SkeletonComponent,
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('./modules/user/user.module').then( (m) => m.UserModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
