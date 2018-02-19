import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.scss']
})
export class HistoryEventsComponent implements OnInit {

  @Input() category;
  @Input() event;

  searchValue: string;
  searchType = 'amount';
  placeholderFilter = 'Сумма';

  constructor() {
  }

  ngOnInit() {
    this.event.forEach((e) => {
      e.catName = this.category.find((c) => c.id === e.category).name;
    });
  }

  getTypeClass(type) {
    return [
      'label',
      (type === 'outcome') ? 'label-danger' : 'label-success'
    ];
  }

  onChangeFilter(event, type) {
    this.searchType = type;
    this.placeholderFilter = event.target.innerHTML;
  }
}
