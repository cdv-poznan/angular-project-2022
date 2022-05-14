import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ColorsComponent} from './colors/colors.component';
import {HomeComponent} from './home/home.component';
import {RemindersComponent} from './reminders/reminders.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'colors',
    component: ColorsComponent,
  },
  {
    path: 'reminders',
    component: RemindersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
