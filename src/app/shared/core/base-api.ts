import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BaseApi {

  private url = 'http://localhost:3000/';

  constructor(public http: HttpClient) {
  }

  concatUrl(link: string) {
    return this.url + link;
  }

  get(link): Observable<any> {
    return this.http.get(this.concatUrl(link))
      .map((response: any) => response);
  }

  post(link, data): Observable<any> {
    return this.http.post(this.concatUrl(link), data)
      .map((response: any) => response);
  }

  put(link, data): Observable<any> {
    return this.http.post(this.concatUrl(link), data)
      .map((response: any) => response);
  }

}
