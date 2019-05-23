import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingRequestRoutingModule } from './pending-request-routing.module';
import { PendingRequestHomeComponent } from './container/pending-request-home.component';

@NgModule({
  declarations: [PendingRequestHomeComponent],
  imports: [
    CommonModule,
    PendingRequestRoutingModule
  ]
})
export class PendingRequestModule { }
