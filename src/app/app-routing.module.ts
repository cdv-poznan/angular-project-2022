import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { HomeComponent } from './component/home/home.component';
import { MoreinfosComponent } from './component/moreinfos/moreinfos.component';
import { NotesComponent } from './component/notes/notes.component';
import { UsersfileComponent } from './component/usersfile/usersfile.component';

const routes: Routes = [
  {path: 'users', component: UsersfileComponent},
  {path: 'MoreInfo/:uuid', component: MoreinfosComponent},
  {path: '**', redirectTo: 'app-about-us'},
  {path: 'app-home', component: HomeComponent},
  {path: 'app-about-us', component: AboutUsComponent},
  {path: 'app-notes', component: NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
