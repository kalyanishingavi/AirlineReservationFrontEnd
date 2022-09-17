import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booking'
})
export class BookingPipe implements PipeTransform {

  transform(value: any, cName: string): any {
    if(cName===""){
      return value;
    }
    const bookingArray:any[]=[];
    for(let i=0;i<=value.length;i++){
      let className:string=value[i].clist;
      if(className.startsWith(cName)){
        bookingArray.push(value[i])
      }
    }
    return bookingArray;
  }

}
