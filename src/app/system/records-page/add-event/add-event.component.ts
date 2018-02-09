import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import * as moment from 'moment';
import 'rxjs/add/operator/mergeMap';

import {BillService} from '../../shared/services/bill.service';
import {EventsService} from '../../shared/services/events.service';

import {Category} from '../../shared/models/category.model';
import {WFMEvent} from '../../shared/models/event.model';
import {Bill} from '../../shared/models/bill.model';
import {Message} from '../../../shared/model/message.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit, OnDestroy {

  sub1: Subscription;
  sub2: Subscription;

  @Input() categories: Category;
  type = [
    {type: 'income', label: 'Доход'},
    {type: 'outcome', label: 'Расход'}
  ];
  message: Message;

  constructor(private billService: BillService,
              private eventsService: EventsService) {

  }

  ngOnInit() {
    this.message = new Message('danger', '');
  }

  onSubmit(form) {
    const {type, amount, category, description} = form.form.value;
    const event = new WFMEvent(
      type,
      amount,
      +category,
      moment().format('DD.MM.YYYY HH:MM:SS'),
      description
    );

    this.sub1 = this.billService.getBill()
      .subscribe((bill: Bill) => {
        let value;
        if (type === 'outcome') {
          if (bill.value < amount) {
            this.message = new Message('danger', `Not enough ${amount - bill.value}`);
            window.setTimeout(() => {
              this.message = new Message('danger', '');
            }, 2000);
            return;
          } else {
            value = bill.value - amount;
          }
        } else if (type === 'income') {
          value = bill.value + amount;
        }

        const billEv = new Bill(value);

        this.sub2 = this.billService.updateBill(billEv)
          .mergeMap(() => {
            return this.eventsService.addEvent(event);
          })
          .subscribe(() => {
            form.form.patchValue({
              amount: 1,
              description: ''
            });
          });
      });
  }

  ngOnDestroy() {
    if (this.sub1) { this.sub1.unsubscribe(); }
    if (this.sub2) { this.sub2.unsubscribe(); }
  }

}
