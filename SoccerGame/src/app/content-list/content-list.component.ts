import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  
  
 contentList:Content[]  = [
    {
   id: 1,
   title: 'Manchester United',
   description: 'An English professional football club based in Manchester, England.',
   creator:' Newton Heath LYR Football Club',
   imgURL: 'assets/imgs/Man.png',
   type: 'Club',
   tags: ['Premier League, Champions League, Cristiano Ronaldo',]
 },
 
   {
   id: 2,
   title: 'FC Barcelona',
   description: 'A Spanish professional football club based in Barcelona, Catalonia, Spain.',
   creator: 'Joan Gamper',
   imgURL: 'assets/imgs/barca.png',
   type: 'Club',
   tags: ['La Liga, Champions League, Lionel Messi']
 },
 
 {
   id: 3,
   title: 'Brazil National Football Team',
   description: "The men's national football team of Brazil representing the country in international men's football.",
   creator: 'Brazil Football Confederation',
   imgURL: 'assets/imgs/Brazil.png',
   type: 'National Team',
   tags: ['FIFA World Cup, Copa America, Neymar Jr.']
 },
 {
  id: 4,
  title: 'Liverpool',
  description: 'An English professional football club based in Liverpool, England.',
  creator: 'Unknown',
  imgURL: 'assets/imgs/liverpool.png',
  type: 'Club',
  tags: ['Football', 'Premier League', 'England']
},
{
  id: 5,
  title: 'Bayern Munich',
  description: 'A German professional football club based in Munich, Germany.',
  creator: 'Unknown',
  imgURL: 'assets/imgs/bayern.jpg',
  type: 'Club',
  tags: ['Football', 'Bundesliga', 'Germany']
},
{
  id: 6,
  title: 'Juventus',
  description: 'An Italian professional football club based in Turin, Italy.',
  creator: 'Unknown',
  imgURL: 'assets/imgs/juventus.png',
  type: 'Club',
  tags: ['Football', 'Serie A', 'Italy']
},
{
  id: 7,
  title: 'Paris Saint-Germain',
  description: 'A French professional football club based in Paris, France.',
  creator: 'Unknown',
  imgURL: 'assets/imgs/psg.png',
  type: 'Club',
  tags: ['Football', 'Ligue 1', 'France']
},

]

ngOnInit(){
  
}

}

