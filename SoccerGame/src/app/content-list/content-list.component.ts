import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { SoccerServiceService } from '../services/soccer-service.service';



@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  
 
contentList: any[];
item :  Content;

constructor(private soccerService: SoccerServiceService){

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
  acceptNewContent(contentAdded : Content) {
         // Add the new content item to the content list
         console.log("newContent",contentAdded);
         const cloned = {...contentAdded}
         this.contentList.push(cloned);
         // cloning so the pipe can function on the new added item
         this.contentList = [...this.contentList];
         console.log('contentListArray',this.contentList);

}
ngOnInit(){
  this.soccerService.getContent().subscribe((contentlist: any[]) =>
  {
  this.contentList = contentlist;
  })

  const id = 3; //choose an ID
  this.soccerService.getContentById(id).subscribe((singleContent: Content)=>
  {
    this.item = singleContent;
    console.log(this.item)
})
}
}