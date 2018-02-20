import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoriesService} from '../../shared/services/categories.service';
import {EventsService} from '../../shared/services/events.service';

@Component({
  selector: 'app-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.scss']
})
export class HistoryFilterComponent implements OnInit {

  @Output() closeModal = new EventEmitter();
  @Output() resArrays = new EventEmitter();

  period = [
    {type: 'd', label: 'День'},
    {type: 'w', label: 'Неделя'},
    {type: 'M', label: 'Месяц'}
  ];
  periodValue = 'd';

  typesCheck = [];
  types = [];

  categoriesCheck = [];
  categories = [];

  constructor(private categoriesService: CategoriesService,
              private eventsService: EventsService) {
    this.eventsService.getEvent()
      .subscribe((events) => {
        events.forEach((e) => {
          if (this.typesCheck.indexOf(e.type) === -1) {
            this.typesCheck.push(e.type);
          }
        });
      });

    this.categoriesService.getCategories()
      .subscribe((categories) => {
        this.categoriesCheck = categories;
      });
  }

  ngOnInit() {

  }

  createArr(event, arr) {
    if (this[arr].indexOf(event.target.value) === -1) {
      this[arr].push(event.target.value);
    } else {
      this[arr].splice(this[arr].indexOf(event.target.value), 1);
    }
  }

  onChangeType(event) {
    this.createArr(event, 'types');
  }

  onChangeCategory(event) {
    this.createArr(event, 'categories');
  }

  onCloseModal() {
    this.closeModal.emit();
  }

  onEnter() {
    const arr = {
      period: this.periodValue,
      types: this.types,
      categories: this.categories
    };

    this.resArrays.emit(arr);
  }

}
