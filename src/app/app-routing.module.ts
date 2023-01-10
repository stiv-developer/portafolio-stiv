import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagueComponent } from './components/pague/pague.component';
const routes: Routes = [
  {
    path: '',
    component: PagueComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
