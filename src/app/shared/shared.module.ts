import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
  exports: [
    ReactiveFormsModule,
    FormsModule,
    NgxChartsModule
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgxChartsModule
  ]
})
export class SharedModule {
}