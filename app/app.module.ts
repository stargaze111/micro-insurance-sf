import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { AboutComponent } from './home/about.component';

import { InsuranceModule } from './insurance/insurance.module';

import { SimulatorModule } from './simulator/simulator.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AccountModule } from './account/account.module';
// import {AnalyticsModule} from './analytics/analytics.module';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AnalyticsComponent } from './analytics/analytics.component';

import { JsonpModule } from '@angular/http';
import { Ng2GoogleChartModule } from 'ng2-googlechart';
import { DatepickerModule } from 'angular2-material-datepicker';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import { SearchInsuranceTransactionsService } from './services/transactions.service';
import { AuthenticationService } from './account/account.service';
import { GAuthenticationService } from './account/gaccount.service';

@NgModule({
  imports:
  [
    BrowserModule,
    FormsModule,
    HttpModule,
    InsuranceModule,
    SimulatorModule,
    DashboardModule,
    AccountModule,
    JsonpModule,
    DatepickerModule,
    Ng2GoogleChartModule,
    Ng2DatetimePickerModule,
    RouterModule.forRoot(
      [
        { path: 'welcome', component: WelcomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'analytics', component: AnalyticsComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      ]
    )
  ],
  declarations:
  [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    AnalyticsComponent

  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, AuthenticationService,GAuthenticationService,SearchInsuranceTransactionsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
