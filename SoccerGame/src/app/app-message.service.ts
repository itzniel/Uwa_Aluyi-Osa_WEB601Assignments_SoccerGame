import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
 private message:string
  showMessage(message : string) {
    this.message = message;
  }
  
  getMessage():string{
    return this.message;
  }
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}