import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListOfResultsComponent } from './list-of-results/list-of-results.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent,
},
{
  path: 'list-of-results',
  component: ListOfResultsComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
