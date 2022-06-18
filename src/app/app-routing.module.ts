import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoreinfosComponent } from './component/moreinfos/moreinfos.component';
import { UsersfileComponent } from './component/usersfile/usersfile.component';

const routes: Routes = [
  {path: 'users', component: UsersfileComponent},
  {path: 'MoreInfo/:uuid', component: MoreinfosComponent},
  {path: '**', redirectTo: 'users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
