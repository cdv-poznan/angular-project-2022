import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DrawComponent } from './draw/draw.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: DrawComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
