import { Content } from './content-interface';

class ContentList {
  private contentArray: Content[];

  constructor() {
    this.contentArray = [];
  }

  get content(): Content[] {
    return this.contentArray;
  }

  addContent(content: Content): void {
    this.contentArray.push(content);
  }

  getContentCount(): number {
    return this.contentArray.length;
  }

  getHtmlContent(index: number): string {
    const content = this.contentArray[index];
    if (index < 0 || index >= this.contentArray.length) {
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

export { ContentList };
