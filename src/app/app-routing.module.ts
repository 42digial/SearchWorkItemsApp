import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkitemGetComponent } from './workitem-get/workitem-get.component';



const routes: Routes = [
  {
    path: '',
    component: WorkitemGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
