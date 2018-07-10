import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Timeing } from '../model/timeing.model';

@Injectable({
  providedIn: 'root'
})
export class TimeingService {

  readonly URL = 'http://127.0.0.1:3000/timeing';
  constructor(private http: HttpClient) { }

  getAllTimeing() {
    return this.http.get(this.URL);
  }

  addTimeing(timeing: Timeing) {
    return this.http.post(this.URL, timeing);
  }

  updateTimeing(timeing: Timeing) {
    return this.http.put(this.URL + '/' + timeing._id, timeing);
  }

  deleteTimeing(id: string){
    return this.http.delete(this.URL + '/' + id);
  }

}
