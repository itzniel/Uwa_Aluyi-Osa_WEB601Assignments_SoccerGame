import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit{
  ngOnInit(){
  }

  @Output() newContent: EventEmitter<any> = new EventEmitter
    
  id: any;
  title: any;
  description: any;
  imgURL : any;
  creator: any;
  type: any;
  tags:[];
  requiredFieldMessage: string;
  errorMessage: string;
  successMessage: string;

addNewContent(){
    // Retrieve values from input fields and create the new content item
    const contentAdded = {
      id:this.id,
      title: this.title,
      description: this.description,
      creator: this.creator,
      imgURL :this.imgURL,
      type: this.type,
      // Add other necessary fields
    
    };
        this.newContent.emit(contentAdded);
        this.clearField();
  }
clearField(){
  // Clear input field value
  this.id = ''; 
  this.title = '';
  this.description = '';
  this.imgURL = '';
  this.creator = '';
  this.type = '';
}
}
  
