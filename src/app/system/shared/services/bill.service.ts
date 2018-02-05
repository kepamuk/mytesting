import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {Bill} from '../models/bill.model';

@Injectable()
export class BillService {

  constructor(private http: HttpClient) {
  }

  getBill(): Observable<Bill> {
    return this.http.get('http://localhost:3000/bill')
      .map((response: Bill) => {
        return response;
      });
  }

  getCurrency(base: string = 'RUB'): Observable<any> {
    return this.http.get(`https://api.fixer.io/latest?base=${base}`)
      .map((response: any) => {
        return response;
      });
  }

}
