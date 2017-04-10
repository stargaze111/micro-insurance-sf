

import {NgModule} from '@angular/core'
import {RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';

import {SimulatorComponent} from './simulator.component';
import {SimulatorListComponent} from './simulator-list.component';
import {SimulatorRandomQuoteComponent} from './simulator-random-quote.component';
import {SharedModule} from '../shared/shared.module';

@NgModule(
  {
      declarations:[
        SimulatorComponent,
        SimulatorListComponent,
        SimulatorRandomQuoteComponent,
      ],
      imports:[
        RouterModule.forChild(
            [
                {path: 'simulator', component: SimulatorComponent},
                {path: 'lnsurancelist', component: SimulatorListComponent}
            ]
        ),
        SharedModule
      ],
  }  
)
export class SimulatorModule{

}