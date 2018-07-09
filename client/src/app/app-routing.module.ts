import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewClockComponent } from './clock/view-clock/view-clock.component';
import { ViewRoomComponent } from './room/view-room/view-room.component';
import { ViewDaylightComponent } from './daylight/view-daylight/view-daylight.component';
import { ViewTimeingComponent } from './timeing/view-timeing/view-timeing.component';
import { CreateTimeingComponent } from './timeing/create-timeing/create-timeing.component';

const routes: Routes = [
  {path: '', component: CreateTimeingComponent},
  {path: 'clock', component: ViewClockComponent},
  {path: 'room', component: ViewRoomComponent},
  {path: 'daylight', component: ViewDaylightComponent},
  {path: 'timeing', component: ViewTimeingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
