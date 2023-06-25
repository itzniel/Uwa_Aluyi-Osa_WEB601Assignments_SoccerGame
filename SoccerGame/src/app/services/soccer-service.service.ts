import { Injectable } from '@angular/core';
import { contentList } from '../helper-files/contentDb';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoccerServiceService {

  constructor() { }
  getContent() : Observable<any[]>{
    return of(contentList);
  }
}
