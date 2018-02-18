import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {CategoriesService} from '../shared/services/categories.service';
import {EventsService} from '../shared/services/events.service';

import {Category} from '../shared/models/category.model';
import {WFMEvent} from '../shared/models/event.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit, OnDestroy {

  category: Category[] = [];
  event: WFMEvent[] = [];

  isLoading = false;
  outcomeAll: any[] = [];

  sub: Subscription;

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

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
