import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { SoccerServiceService } from '../services/soccer-service.service';
import { MessageService } from '../app-message.service';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  
inputId: string;
contentList: Content[];
item :  any;
  

constructor(private soccerService: SoccerServiceService, 
            public messageService : MessageService ){

} 
 
findTitle : string ='';
filterResult: boolean = false;
message :string =''

findContent() {
  this.filterResult = this.contentList.some(content => content.title.toLowerCase() === this.findTitle.toLowerCase());

  if (this.filterResult) {
    this.message = 'title exists.';
  } else {
    this.message = ' title does not exist.';
  }
}
/*  acceptNewContent(contentAdded : Content) {
         // Add the new content item to the content list
         console.log("newContentItem",contentAdded);
         const cloned = {...contentAdded}
         this.contentList.push(cloned);
         // cloning so the pipe can function on the new added item
         this.contentList = [...this.contentList];
         console.log('contentListArray',this.contentList);

}
*/
fetchContentCard(): void {
  const id = parseInt(this.inputId);
  this.messageService.showMessage('');
  if (isNaN(id)) {
    this.messageService.showMessage('Invalid ID. Please enter a number.');
    return;
  }

  const arrayLength = this.contentList.length;
console.log(arrayLength);
  if (id < 0 || id > arrayLength) {
      this.messageService.showMessage('ID is out of range');
    return;
  }
  this.soccerService.getContentById(id).subscribe((singleContent: Content)=>{
    this.item = singleContent;
  console.log(this.item)
})

}


clearContent() {
  this.item = [];}

 
 

ngOnInit(){
  this.soccerService.getContent().subscribe((contentlist) =>
  {
  return (this.contentList = [...contentlist]);
  })
}


  addContentToList(newContentItem: Content){
		this.soccerService.addContent(newContentItem).subscribe((newContentFromServer) => {
      this.contentList = [...this.contentList, newContentFromServer];
      console.log(this.contentList);
    }
    );
		}
	}
  

