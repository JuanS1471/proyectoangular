import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { Page404Component } from '../server/page404/page404.component';
import { INTERNAL_PATHS } from 'src/app/data/constants/routes';


const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detail/:id',
    component: UserDetailComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }