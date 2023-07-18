import { Injectable } from '@angular/core';
import { contentList } from '../helper-files/contentDb';
import { Observable, of } from 'rxjs';
import { MessageService } from '../app-message.service';
import { HttpClient, HttpHeaders } from'@angular/common/http';
import { Content } from '../helper-files/content-interface';

@Injectable({
  providedIn: 'root'
})
export class SoccerServiceService {

  
  constructor(private messageService: MessageService,
             private http:HttpClient) { }

   private httpOptions = {
              headers: new HttpHeaders({ 'Content-type':
              'application/json' })
              };
              
  getContent() : Observable<Content[]>{
   const httpContent = this.http.get<Content[]>("api/content");
    this.messageService.add('Content array loaded!')
    
    return httpContent


  }
  getContentById(id : number) : Observable<any>{
    const singleContent = of(contentList.find((item)=> item.id === id));
    this.messageService.add('Content Item at id: ' +id)
    return singleContent;
  }
  


    addContent(newContentItem: Content):
Observable<Content>{
return this.http.post<Content>("api/content"
,
newContentItem, this.httpOptions);
}
}
