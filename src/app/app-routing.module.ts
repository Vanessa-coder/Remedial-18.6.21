import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamercreationComponent } from './gamercreation/gamercreation.component';
import { GamerdetailsComponent } from './gamerdetails/gamerdetails.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:LoginComponent, pathMatch:'full'},
  {path:'home', component:HomeComponent, pathMatch:'full'},
  {path:'gamesdetails', component:GamerdetailsComponent, pathMatch:'full'},
  {path:'gamercreation', component:GamercreationComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
