import { Input, Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentFilter'
})
export class ContentFilterPipe implements PipeTransform {

  transform(contentList: Content[], type?: string): Content[] {
    if (type == null) {
      return contentList.filter((c)=> c.type == null);
    }
    return  contentList.filter((c) => c.type == type ) ;
  }
  
  }
