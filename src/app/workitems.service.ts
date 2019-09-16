import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkitemsService {

  uri = 'http://localhost:4000/workitems';

  constructor(private http: HttpClient) { }

  getWorkItems() {
    return this
           .http
           .get(`${this.uri}`);
  }

}