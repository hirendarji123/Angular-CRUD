import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [ 
  {
    path: '', redirectTo: 'adduser', pathMatch: 'full' 
  },
  {
    path:'adduser' , component:AdduserComponent
  },
  {
    path:'showuser',component:ShowuserComponent
  },
  {
    path:'update' ,component:UpdateComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
