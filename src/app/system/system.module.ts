import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BillPageComponent} from './bill-page/bill-page.component';
import {HistoryPageComponent} from './history-page/history-page.component';
import {PlanningPageComponent} from './planning-page/planning-page.component';
import {RecordsPageComponent} from './records-page/records-page.component';
import {SystemRoutingModule} from './system-routing.module';
import {SystemComponent} from './system.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule
  ],
  declarations: [
    SystemComponent,
    BillPageComponent,
    HistoryPageComponent,
    PlanningPageComponent,
    RecordsPageComponent,
    NavbarComponent
  ]
})
export class SystemModule {
}
