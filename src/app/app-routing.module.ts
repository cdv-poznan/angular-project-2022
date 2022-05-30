import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { resourceLimits } from 'worker_threads';
import { ListOfResultsComponent } from './list-of-results/list-of-results.component';

const routes: Routes = [
{
  path: '',
  component: list-of-ListOfResultsComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
