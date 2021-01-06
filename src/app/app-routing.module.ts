import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './components/pages/page-home/page-home.component';
import { PageCreateClientComponent } from './components/pages/page-create-client/page-create-client.component';
import { PageListClientComponent } from './components/pages/page-list-client/page-list-client.component';
import { PageAnalystClientComponent } from './components/pages/page-analyst-client/page-analyst-client.component';

const routes: Routes = [
  {
    path: '',
    component: PageHomeComponent,
  }, {
    path: 'create-client',
    component: PageCreateClientComponent
  }, {
    path: 'list-client',
    component: PageListClientComponent
  }, {
    path: 'analyst-client',
    component: PageAnalystClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
