import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BillPageComponent} from './bill-page/bill-page.component';
import {HistoryPageComponent} from './history-page/history-page.component';
import {PlanningPageComponent} from './planning-page/planning-page.component';
import {RecordsPageComponent} from './records-page/records-page.component';
import {SystemRoutingModule} from './system-routing.module';
import {SystemComponent} from './system.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { OpenDirective } from './shared/directives/open.directive';

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
    NavbarComponent,
    HeaderComponent,
    OpenDirective
  ]
})
export class SystemModule {
}
