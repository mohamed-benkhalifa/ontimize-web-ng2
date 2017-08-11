import { NgModule } from '@angular/core';

import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  ColumnsFilterPipe,
  OrderByPipe,
  OIntegerPipe,
  ORealPipe,
  OTranslateModule
} from '../pipes';

import { ONTIMIZE_DIRECTIVES } from '../config/o-directives';
import { OCustomMaterialModule } from './custom.material.module';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    FlexLayoutModule
  ],
  declarations: [
    ColumnsFilterPipe,
    OrderByPipe,
    OIntegerPipe,
    ORealPipe,
    ONTIMIZE_DIRECTIVES
  ],
  exports: [
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    OTranslateModule,
    ColumnsFilterPipe,
    OrderByPipe,
    OIntegerPipe,
    ORealPipe,
    ONTIMIZE_DIRECTIVES,
    OCustomMaterialModule
  ]
})
export class OSharedModule {
}