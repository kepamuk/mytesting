import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import {Subscription} from 'rxjs/Subscription';

import {BillService} from '../shared/services/bill.service';
import {Bill} from '../shared/models/bill.model';

@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {

  sub: Subscription;
  sub1: Subscription;

  bill: Bill;
  currency: any;

  isLoaded = false;

  constructor(private billService: BillService) {
  }

  ngOnInit() {
    this.sub = Observable.combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
    ).subscribe((data: [Bill, any]) => {
      this.isLoaded = true;
      this.bill = data[0];
      this.currency = data[1];
    });
  }

  onRefresh() {
    this.isLoaded = false;
    this.sub1 = this.billService.getCurrency()
      .subscribe((data: any) => {
        this.isLoaded = true;
        this.currency = data;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
  }

}
