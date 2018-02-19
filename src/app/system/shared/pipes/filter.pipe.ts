import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: any, ...args): any {
    const value = args[0];
    const type = args[1];

    if (arr.length === 0 || value === '' || value === undefined) {
      return arr;
    }

    return arr.filter((e) => {
      if (type === 'amount') {
        return String(e.amount).indexOf(value) !== -1;
      }

      if (type === 'date') {
        return this.mementHelp(e.date).indexOf(value) !== -1;
      }

      if (type === 'catName') {
        return e.catName.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      }

      if (type === 'type') {

        if ('Доход'.toLowerCase().indexOf(value.toLowerCase()) !== -1 && 'Расход'.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
          return value;
        } else if ('Доход'.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
          return e.type === 'income';
        } else if ('Расход'.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
          return e.type === 'outcome';
        }
      }

    });
  }

  mementHelp(value) {
    return moment(value, [
      'YYYYMMDD',
      'DD-MM-YYYY',
      'YYYY-MM-DD',
      'MM/DD/YYYY',
      'YYYY/MM/DD',
      'DD MMM YYYY',
      'DD MMMM YYYY',
      'YYYYMMDDhhmm',
      'YYYYMMDD hhmm',
      'DD-MM-YYYY hh:mm',
      'YYYY-MM-DD hh:mm',
      'MM/DD/YYYY hh:mm',
      'YYYY/MM/DD hh:mm',
      'DD MMM YYYY hh:mm',
      'DD MMMM YYYY hh:mm',
      'YYYYMMDDhhmmss',
      'YYYYMMDD hhmmss',
      'DD-MM-YYYY hh:mm:ss',
      'YYYY-MM-DD hh:mm:ss',
      'MM/DD/YYYY hh:mm:ss',
      'YYYY/MM/DD hh:mm:ss',
      'DD MMM YYYY hh:mm:ss',
      'DD MMMM YYYY hh:mm:ss'
    ]).format('DD.MM.YYYY');
  }

}
