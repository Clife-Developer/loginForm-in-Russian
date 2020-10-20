import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPComponent } from './new-p/new-p.component';


const routes: Routes = [
  {path:'',component:NewPComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
