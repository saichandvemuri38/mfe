import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'projects/test-app/src/app/app.component';



const routes: Routes = [
  {
    path:"test-app",redirectTo:'AppComponent',pathMatch:"full"
  },
  // {
  //   path: '',
  //   loadChildren: () =>  loadRemoteModule({remoteName:'products',remoteEntry:'http://localhost:4300/remoteEntry.js' ,exposedModule:'./Component'}).then((m:any) => m.AppModule),
  // },
  // { path: 'products', loadChildren: () => import('products/Module').then(m => m.ProductsModule) },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
