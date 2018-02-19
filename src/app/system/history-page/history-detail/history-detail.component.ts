import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {EventsService} from '../../shared/services/events.service';
import {CategoriesService} from '../../shared/services/categories.service';
import {WFMEvent} from '../../shared/models/event.model';
import {Category} from '../../shared/models/category.model';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent implements OnInit {

  category: Category;
  event: WFMEvent;

  isLoaded = false;

  constructor(private route: ActivatedRoute,
              private eventsService: EventsService,
              private categoryService: CategoriesService) {
  }

  ngOnInit() {
    this.route.params
      .mergeMap((params: Params) => {
        return this.eventsService.getEventById(params.id);
      })
      .mergeMap((event: WFMEvent) => {
        this.event = event;
        return this.categoryService.getCategoryById(event.category);
      })
      .subscribe((category: Category) => {
        this.category = category;
        this.isLoaded = true;
      });
  }

}
