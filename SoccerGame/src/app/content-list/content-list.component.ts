import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  
   contentList  = [
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
 }]

  getHtmlContent(index: number): string {
    const content = this.contentList[index];
    if (index < 0 || index >= this.contentList.length) {
      return `<div><p>Index is Invalid ${index}. Enter a valid index.</p></div>`;
    }
    const htmlContent = `
      <div>
        <h2>${content.title}</h2>
        <p>${content.description}</p>
        <p>Creator: ${content.creator}</p>
        ${content.imgURL ? `<img src="${content.imgURL}" alt="${content.title}" />` : ""}
       <p> ${content.type ? `Type: ${content.type}</p>` : ""}
      </div>
    `;
    return htmlContent;
  }
}

