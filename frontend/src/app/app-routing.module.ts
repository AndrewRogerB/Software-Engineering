import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {RecoveryComponent} from "./recovery/recovery.component";
import {CreateRoomComponent} from "./create-room/create-room.component";

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'recovery', component:RecoveryComponent},
  {path: 'create', component:CreateRoomComponent},
  {path: '**', redirectTo: ""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
