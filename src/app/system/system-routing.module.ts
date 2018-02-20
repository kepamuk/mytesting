import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SystemComponent} from './system.component';
import {BillPageComponent} from './bill-page/bill-page.component';
import {HistoryPageComponent} from './history-page/history-page.component';
import {PlanningPageComponent} from './planning-page/planning-page.component';
import {RecordsPageComponent} from './records-page/records-page.component';
import {HistoryDetailComponent} from './history-page/history-detail/history-detail.component';

const routes = [
  {
    path: '', component: SystemComponent,
    children: [
      {path: 'bill', component: BillPageComponent},
      {path: 'history', component: HistoryPageComponent},
      {path: 'planning', component: PlanningPageComponent},
      {path: 'records', component: RecordsPageComponent},
      {path: 'history/:id', component: HistoryDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {
}