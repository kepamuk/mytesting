import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {BillService} from '../shared/services/bill.service';
import {CategoriesService} from '../shared/services/categories.service';
import {EventsService} from '../shared/services/events.service';

import {Category} from '../shared/models/category.model';
import {WFMEvent} from '../shared/models/event.model';
import {Bill} from '../shared/models/bill.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-planning-page',
  templateUrl: './planning-page.component.html',
  styleUrls: ['./planning-page.component.scss']
})
export class PlanningPageComponent implements OnInit, OnDestroy {

  bill: Bill;
  category: Category[] = [];
  event: WFMEvent[] = [];

  isLoading = false;

  sub1: Subscription;

  constructor(private billService: BillService,
              private categoriesService: CategoriesService,
              private eventsService: EventsService) {
  }

  ngOnInit() {
    this.sub1 = Observable.combineLatest(
      this.billService.getBill(),
      this.categoriesService.getCategories(),
      this.eventsService.getEvent()
    ).subscribe((data: [Bill, Category[], WFMEvent[]]) => {
      this.bill = data[0];
      this.category = data[1];
      this.event = data[2];

      this.isLoading = true;
    });
  }

  getOutcome(catId) {
    let events;
    events = this.event.filter((e) => {
      if (e.category === catId && e.type === 'outcome') {
        return true;
      }
    });

    return events.reduce((total, e) => {
      total += e.amount;
      return total;
    }, 0);
  }

  getPercent(outcome, all) {
    return outcome / all * 100 + '%';
  }

  getMessage(outcome, all) {
    return outcome / all * 100 < 60 ? 'success' : outcome / all * 100 > 100 ? 'danger' : 'warning';
  }

  ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }

}
