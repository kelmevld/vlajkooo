import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namep'
})
export class NamepPipe implements PipeTransform {

  transform(value: any, secVal:any, args?: any): any {
    console.log(value);
    let array = [];
    if(secVal == "") {
      return value;
    } else {
      value.forEach(element => {
        if(element.ime == secVal) {
          array.push(element);
        }
      });
      return array;
    }
  }

}
