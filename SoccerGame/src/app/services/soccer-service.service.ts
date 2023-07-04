import { Injectable } from '@angular/core';
import { contentList } from '../helper-files/contentDb';
import { Observable, of } from 'rxjs';
import { MessageService } from '../app-message.service';

@Injectable({
  providedIn: 'root'
})
export class SoccerServiceService {

  
  constructor(private messageService: MessageService) { }
  getContent() : Observable<any[]>{
    const contentlist = of(contentList);
    this.messageService.add('Content array loaded!')
    return contentlist;


  }
  getContentById(id : number) : Observable<any>{
    const singleContent = contentList.find((item)=> item.id === id);
    return of(singleContent);
  }
  
}
