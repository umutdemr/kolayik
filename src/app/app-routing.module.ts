import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CvComponent} from "./cv/cv.component";
import {UsersComponent} from "./users/users.component";
import {ChatComponent} from "./chat/chat.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {SettingsComponent} from "./settings/settings.component";

const routes: Routes = [
  {path:'',redirectTo:"dashboard",pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'cv',component:CvComponent},
  {path:'users',component:UsersComponent},
  {path:'chat',component:ChatComponent},
  {path:'calendar',component:CalendarComponent},
  {path:'settings',component:SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
