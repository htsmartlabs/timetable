import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clock } from '../model/clock.model';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  readonly URL = 'http://127.0.0.1:3000/clock';
  constructor(private http: HttpClient) { }

  getAllTime() {
    return this.http.get(this.URL);
  }

  addTime(clock: Clock) {
    return this.http.post(this.URL, clock);
  }

  updateTime(clock: Clock) {
    return this.http.put(this.URL + '/' + clock._id, clock);
  }

  deleteTime(id: string){
    return this.http.delete(this.URL + '/' + id);
  }

}
