import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';
@Pipe({
  name: 'customSort'
})
export class CustomSortPipe implements PipeTransform {

  transform(value: any[], order = '', column: string = ''): any[] {
    // if (!value || order === '' || !order) { return value; } // no array
    let orderElemBy = "";
    if (column.substring(0, 1) == '-') {
      column = column.substring(1, column.length);
      orderElemBy = 'desc'
    } else {
      orderElemBy = 'asc'
    }
    if (value.length <= 1) { return value; } // array with only one item
    if (!column || column === '') {
      if (orderElemBy === 'asc') { return value.sort() }
      else { return value.sort().reverse(); }
    } // sort 1d array
    return orderBy(value, [column], [orderElemBy]);
  }

}
