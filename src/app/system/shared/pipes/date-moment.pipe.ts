import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateMoment'
})
export class DateMomentPipe implements PipeTransform {

  transform(value: any): any {
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
