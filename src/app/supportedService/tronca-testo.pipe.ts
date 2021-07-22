import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'troncaTesto'
})
export class TroncaTestoPipe implements PipeTransform {

  transform(value: string, args: number = 50): unknown {
    let result = value;

    if(value.length > args){
      result = value.substring(0, args) + "...";
    }
    else{
      result = value;
    }
    return result;
  }


}
