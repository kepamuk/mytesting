import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../shared/models/category.model';
import {WFMEvent} from '../../shared/models/event.model';
import * as moment from 'moment';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  @Input() categories: Category;
  type = [
    {type: 'income', label: 'Доход'},
    {type: 'outcome', label: 'Расход'}
  ];

  constructor() {
    
  }

  ngOnInit() {

  }

  onSubmit(form) {
    const {type, amount, category, description} = form.form.value;

    const event = new WFMEvent(
      type,
      amount,
      category,
      moment().format('DD.MM.YYYY HH:MM:SS'),
      description
    );
    
    console.log(event);
  }

}
