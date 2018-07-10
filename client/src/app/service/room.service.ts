import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../model/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  readonly URL = 'http://127.0.0.1:3000/room';
  constructor(private http: HttpClient) { }

  getAllRoom() {
    return this.http.get(this.URL);
  }

  addRoom(room: Room) {
    return this.http.post(this.URL, room);
  }

  updateRoom(room: Room) {
    return this.http.put(this.URL + '/' + room._id, room);
  }

  deleteRoom(id: string){
    return this.http.delete(this.URL + '/' + id);
  }

}
