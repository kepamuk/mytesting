import {Injectable} from '@angular/core';
import {BaseApi} from '../../../shared/core/base-api';
import {Observable} from 'rxjs/Observable';
import {WFMEvent} from '../models/event.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EventsService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  addEvent(event): Observable<WFMEvent> {
    return this.post('events', event);
  }

  getEvent(): Observable<any> {
    return this.get('events');
  }

}
