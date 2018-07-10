import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewDaylightComponent } from './daylight/view-daylight/view-daylight.component';
import { CreateDaylightComponent } from './daylight/create-daylight/create-daylight.component';
import { CreateRoomComponent } from './room/create-room/create-room.component';
import { ViewRoomComponent } from './room/view-room/view-room.component';
import { ViewClockComponent } from './clock/view-clock/view-clock.component';
import { ViewTimeingComponent } from './timeing/view-timeing/view-timeing.component';
import { CreateTimeingComponent } from './timeing/create-timeing/create-timeing.component';
import { CreateClockComponent } from './clock/create-clock/create-clock.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewDaylightComponent,
    CreateDaylightComponent,
    CreateRoomComponent,
    ViewRoomComponent,
    ViewClockComponent,
    ViewTimeingComponent,
    CreateTimeingComponent,
    CreateClockComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
