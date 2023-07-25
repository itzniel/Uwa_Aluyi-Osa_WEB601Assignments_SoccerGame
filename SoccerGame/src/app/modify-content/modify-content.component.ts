import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  @Output() addContentEvent = new EventEmitter<Content>();

<<<<<<< HEAD
	title: string | null = null;
	description: string | null = null;
	creator: string | null = null;
	imgURL: string | null = null;
	type: string | null = null;
	tags: string | null = null;

  clearForm() {
		this.title = null;
		this.description = null;
		this.creator = null;
		this.imgURL = null;
		this.type = null;
		this.tags = null;
	}

  submitContent() {
=======
	title: string;
	description: string;
	creator: string
	imgURL: string
	type: string
	tags: string;

  clearForm() {
		this.title = '';
		this.description = '';
		this.creator = '';
		this.imgURL = '';
		this.type = '';
		this.tags = '';
	}

  submitContent() {
    console.log(this.description)
>>>>>>> assignment8
		const newContent: any = {
			title: this.title,
			description: this.description,
			creator: this.creator,
			imgURL: this.imgURL,
			type: this.type,
			tags: this.tags ? this.tags.split(',') : [],
		};
    console.log(newContent);
		this.addContentEvent.emit(newContent);
		this.clearForm();
	}
}
