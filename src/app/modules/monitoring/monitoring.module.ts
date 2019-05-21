import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitoringRoutingModule } from './monitoring-routing.module';
import { LambModalModule, LambInputIconModule, LambShowErrorModule } from 'lamb-web-lib';
import { NbButtonModule, NbProgressBarModule, NbRadioModule, NbCardModule } from '@nebular/theme';
import { MonitoringComponent } from './monitoring.component';


const COMPONENTS: any[] = [];

const SERVICES: any[] = [];

const LAMB_MODULES: any[] = [
  LambModalModule,
  LambInputIconModule,
  LambShowErrorModule,
];

const NGB_MODULES: any[] = [];

const NB_MODULES: any[] = [
  NbButtonModule,
  NbProgressBarModule,
  NbRadioModule,
  NbCardModule,
];

@NgModule({
  declarations: [
    MonitoringComponent,
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    MonitoringRoutingModule,
    ...LAMB_MODULES,
    ...NGB_MODULES,
    ...NB_MODULES,
  ],
  providers: [
    ...SERVICES,
  ],
  entryComponents: [
  ],
})
export class MonitoringModule { }
