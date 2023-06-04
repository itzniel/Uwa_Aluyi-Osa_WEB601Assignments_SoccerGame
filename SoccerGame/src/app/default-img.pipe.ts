import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImg'
})
export class DefaultImgPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
