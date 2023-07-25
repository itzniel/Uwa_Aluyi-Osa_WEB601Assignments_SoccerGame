import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';



@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit{
  clickEvent(){
      console.log(this.content.id, this.content.title)
  }
 @Input() content : Content;
 @Input() isFirstOrLast: boolean;
 @Input() item :Content[];

 defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVrBmcs45zapZtbXk8B1uwJF_qVO90pZ41IP7ruemHglOz5MM-BhF4M_AVCOSzhfDoPUU&usqp=CAU';
 ngOnInit(){ 
 
 }
 
}