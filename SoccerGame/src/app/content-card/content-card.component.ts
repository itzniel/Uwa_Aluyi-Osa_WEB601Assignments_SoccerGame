import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {

 contents: ContentList;
 
 constructor(){

  this.contents = new ContentList();
 
 const content1 = {
  id: 1,
  title: 'Manchester United',
  description: 'An English professional football club based in Manchester, England.',
  creator:' Newton Heath LYR Football Club',
  imgURL: 'assets/imgs/Man.jpg',
  type: 'Club',
  tags: ['Premier League, Champions League, Cristiano Ronaldo',]
};

const content2 = {
  id: 2,
  title: 'FC Barcelona',
  description: 'A Spanish professional football club based in Barcelona, Catalonia, Spain.',
  creator: 'Joan Gamper',
  imgURL: 'assets/imgs/barca.jpg',
  type: 'Club',
  tags: ['La Liga, Champions League, Lionel Messi']
};

const content3 = {
  id: 3,
  title: 'Brazil National Football Team',
  description: "The men's national football team of Brazil representing the country in international men's football.",
  creator: 'Brazil Football Confederation',
  imgURL: 'assets/imgs/Brazil.jpg',
  type: 'National Team',
  tags: ['FIFA World Cup, Copa America, Neymar Jr.']
};
  
this.contents.addContent(content1);
this.contents.addContent(content2);
this.contents.addContent(content3);
}
}