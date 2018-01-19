import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './app.component';

@Pipe({
  name: "priceness",
  pure: false
})

export class PricePipe implements PipeTransform {
  transform(input: Keg[], filterProperty) {
    let output: Keg[] = [];

    if (filterProperty === "cheapness"){
      input.sort(function(a, b) {
        return a.price - b.price;
      });
      output = input;
      // for (let i = 0; i < input.length; i++) {
        // if (input[i].price < 6) {
          // output.push(input[i]);
        // }
      // }
    } else if (filterProperty === "expensiveness"){
      input.sort(function(a, b) {
        return b.price - a.price;
      });
    }
    return output;
  }
}
