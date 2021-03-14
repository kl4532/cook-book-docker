import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime'
})
export class ConvertTimePipe implements PipeTransform {

  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = Math.floor(value % 60);
    return `${hours ? hours + ' h ' : ''}${minutes ? minutes + ' min ' : ''}`;
  }
}
