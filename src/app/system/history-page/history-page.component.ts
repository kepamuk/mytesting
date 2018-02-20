import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import * as moment from 'moment';

import {CategoriesService} from '../shared/services/categories.service';
import {EventsService} from '../shared/services/events.service';

import {Category} from '../shared/models/category.model';
import {WFMEvent} from '../shared/models/event.model';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit, OnDestroy {

  category: Category[] = [];
  event: WFMEvent[] = [];
  eventOld: WFMEvent[] = [];

  isLoading = false;
  outcomeAll: any[] = [];

  sub: Subscription;

  openModal = false;

  constructor(private categoriesService: CategoriesService,
              private eventsService: EventsService) {

  }

  ngOnInit() {
    Observable.combineLatest(
      this.categoriesService.getCategories(),
      this.eventsService.getEvent()
    ).subscribe((data: [Category[], WFMEvent[]]) => {
      this.category = data[0];
      this.event = data[1];
      this.eventOld = data[1];

      this.getOutCome();

      this.isLoading = true;
    });
  }

  getOutCome() {
    this.category.forEach((cat) => {

      const catEvent = this.event.filter((e) => {
        return e.category === cat.id && e.type === 'outcome';
      });

      this.outcomeAll.push({
        name: cat.name,
        value: catEvent.reduce((total, e) => {
          total += e.amount;
          return total;
        }, 0)
      });

    });
  }

  onModal() {
    this.openModal = true;
    this.event = this.eventOld;
  }

  onCloseModal() {
    this.openModal = false;
    this.event = this.eventOld;
  }

  getArrays(arr) {

    const startPeriod = moment().startOf(arr.period);
    const endPeriod = moment().endOf(arr.period);

    const filterPopup = this.event.filter((e) => {
      return arr.types.indexOf(e.type) !== -1;
    }).filter((e) => {
      return arr.categories.indexOf(String(e.category)) !== -1;
    }).filter((e) => {
      return moment(e.date, 'DD.MM.YYYY HH:mm:ss').isBetween(startPeriod, endPeriod);
    });

    console.log(filterPopup);
    this.event = filterPopup;

    this.openModal = false;
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
