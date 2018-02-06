import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() bill;
  @Input() currency;

  dollar: number;
  euro: number;

  constructor() {
  }

  ngOnInit() {
    this.dollar = this.bill.value * this.currency.rates['USD'];
    this.euro = this.bill.value * this.currency.rates['EUR'];
  }

}
