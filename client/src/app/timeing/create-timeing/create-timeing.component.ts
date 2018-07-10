import { Component, OnInit } from '@angular/core';
import { Clock } from '../../model/clock.model';
import { Room } from '../../model/room.model';
import { Daylight } from '../../model/daylight.model';
import { ClockService } from '../../service/clock.service';
import { RoomService } from '../../service/room.service';
import { DaylightService } from '../../service/daylight.service';
import { NgForm } from '@angular/forms';
import { Timeing } from '../../model/timeing.model';

@Component({
  selector: 'app-create-timeing',
  templateUrl: './create-timeing.component.html',
  styleUrls: ['./create-timeing.component.css']
})
export class CreateTimeingComponent implements OnInit {
  clocks: Clock[] = [];
  rooms: Room[] = [];
  daylights: Daylight[] = [];
  timeings: Timeing[] = [];

  constructor(private clockService: ClockService,
    private roomService: RoomService, private daylightService: DaylightService) { }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.clockService.getAllTime().subscribe(data => {
      this.clocks = data as Clock[];
    }, err =>{});
    this.roomService.getAllRoom().subscribe(data => {
      this.rooms = data as Room[];
    }, err =>{});
    this.daylightService.getAllDaylight().subscribe(data => {
      this.daylights = data as Daylight[];
    }, err =>{});
  }
  selectTimeSlot(form: NgForm){
    const clock_name = this.clocks[form.value.clock].name;
    const room_name = this.rooms[form.value.room].name;
    const daylight_name = this.daylights[form.value.daylight].name;

    const clock_id = this.clocks[form.value.clock]._id;
    const room_id = this.rooms[form.value.room]._id;
    const daylight_id = this.daylights[form.value.daylight]._id;

    this.timeings.push({clock_id: clock_id, clock_name: clock_name, room_id: room_id, room_name: room_name,
      daylight_id: daylight_id, daylight_name: daylight_name});

  }


}
