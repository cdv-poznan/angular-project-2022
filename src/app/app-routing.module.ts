import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ListOfResultsComponent } from './list-of-results/list-of-results.component';

const routes: Routes = [
{
  path: '',
  component: ListOfResultsComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
