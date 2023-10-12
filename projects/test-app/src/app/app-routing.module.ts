import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IhComponent } from './ih/ih.component';

const routes: Routes = [
  {path:"test",component:IhComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
