import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  exports: [
    ReactiveFormsModule,
    FormsModule
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule {
}