import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessGroupRoutingModule } from './business-group-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    BusinessGroupRoutingModule,
  ]
})
export class BusinessGroupModule { }
