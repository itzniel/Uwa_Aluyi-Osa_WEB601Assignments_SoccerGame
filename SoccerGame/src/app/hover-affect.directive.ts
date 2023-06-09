import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
@Input() affectType: string;
@Input() tag: Content['tags'];
@Input() first: boolean;


  constructor (private elm: ElementRef)  {
    }

@HostListener('mouseenter')
onMouseEnter() {
 this.addStyle();
}

@HostListener('mouseleave')
onMouseLeave() {
this.removeStyle();
}

addStyle (){if (this.affectType === 'underline') {
  this.elm.nativeElement.style.textDecoration = 'underline';
} else if (this.affectType === 'bold') {
  this.elm.nativeElement.style.fontWeight = 'bold';
}
else if(this.affectType ==='border'){
  this.elm.nativeElement.style.border =  '3px solid black';
}
}

removeStyle(){  if (this.affectType === 'underline') {
  this.elm.nativeElement.style.textDecoration = 'none';
} else if (this.affectType === 'bold') {
  this.elm.nativeElement.style.fontWeight = 'normal';
}
else if(this.affectType ==='border'){
  this.elm.nativeElement.style.border =  '';
}}
}
