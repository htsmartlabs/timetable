import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Daylight } from '../model/daylight.model';

@Injectable({
  providedIn: 'root'
})
export class DaylightService {

  readonly URL = 'http://127.0.0.1:3000/daylight';
  constructor(private http: HttpClient) { }

  getAllDaylight() {
    return this.http.get(this.URL);
  }

  addDaylight(daylight: Daylight) {
    return this.http.post(this.URL, daylight);
  }

  updateDaylight(daylight: Daylight) {
    return this.http.put(this.URL + '/' + daylight._id, daylight);
  }

  deleteDaylight(id: string){
    return this.http.delete(this.URL + '/' + id);
  }

}
