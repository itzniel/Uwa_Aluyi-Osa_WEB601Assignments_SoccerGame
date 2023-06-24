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

addNewContent(): Promise<any>
{
  return new Promise((resolve, reject) => {
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

    if(this.id && this.title && this.description &&this.imgURL && this.creator && this.type) {
    // Simulate an asynchronous operation to send the new content item
    this.requiredFieldMessage = '';
    setTimeout(() => {
      // After successful addition of content
      if (contentAdded) {
        console.log('Content added successfully:', contentAdded.title);
        this.errorMessage = '';
        this.successMessage = 'Content added successfully!';
        this.newContent.emit(contentAdded);
        resolve(contentAdded);
        this.clearField();
      } else {
        this.errorMessage = 'Failed to add content. Please try again.';
        this.successMessage = ''
        reject('Failed to add content.'); // Reject promise if content addition fails
      }
    }, 1000); // Simulating a delay for asynchronous operation
  } else {
    this.errorMessage = '';
    this.successMessage = '';
    this.requiredFieldMessage = 'All field is required please add at least 1 character in each input';
  }
});
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
  
