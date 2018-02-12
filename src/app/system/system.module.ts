import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BillPageComponent} from './bill-page/bill-page.component';
import {HistoryPageComponent} from './history-page/history-page.component';
import {PlanningPageComponent} from './planning-page/planning-page.component';
import {RecordsPageComponent} from './records-page/records-page.component';
import {SystemRoutingModule} from './system-routing.module';
import {SystemComponent} from './system.component';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {OpenDirective} from './shared/directives/open.directive';
import {BillCardComponent} from './bill-page/bill-card/bill-card.component';
import {CurrencyCardComponent} from './bill-page/currency-card/currency-card.component';
import {BillService} from './shared/services/bill.service';
import {DateMomentPipe} from './shared/pipes/date-moment.pipe';
import { AddCategoryComponent } from './records-page/add-category/add-category.component';
import { AddEventComponent } from './records-page/add-event/add-event.component';
import { EditCategoryComponent } from './records-page/edit-category/edit-category.component';
import {FormsModule} from '@angular/forms';
import {CategoriesService} from './shared/services/categories.service';
import {EventsService} from './shared/services/events.service';
import { HistoryChartComponent } from './history-page/history-chart/history-chart.component';
import { HistoryDetailComponent } from './history-page/history-detail/history-detail.component';
import { HistoryEventsComponent } from './history-page/history-events/history-events.component';
import { HistoryFilterComponent } from './history-page/history-filter/history-filter.component';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    FormsModule
  ],
  declarations: [
    SystemComponent,
    BillPageComponent,
    HistoryPageComponent,
    PlanningPageComponent,
    RecordsPageComponent,
    NavbarComponent,
    HeaderComponent,
    OpenDirective,
    BillCardComponent,
    CurrencyCardComponent,
    DateMomentPipe,
    AddCategoryComponent,
    AddEventComponent,
    EditCategoryComponent,
    HistoryChartComponent,
    HistoryDetailComponent,
    HistoryEventsComponent,
    HistoryFilterComponent
  ],
  providers: [
    BillService,
    CategoriesService,
    EventsService
  ]
})
export class SystemModule {
}
