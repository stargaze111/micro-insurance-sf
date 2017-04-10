import { Component } from '@angular/core';
import {InsuranceQouteService} from './insurance/insurance-get-qoute.service';
import {QouteService} from './services/qoute.service';
import {AuthenticationService} from './account/account.service';
import {GAuthenticationService} from './account/gaccount.service';

@Component({
    selector: 'pm-app',
    moduleId: module.id,
    templateUrl: './app.component.html',
    providers: [  InsuranceQouteService,QouteService,AuthenticationService,GAuthenticationService  ]

})
export class AppComponent {
    pageTitle: string = 'SMS Insurance';
    login:boolean=false;
    homeSelected = true;
    simulatorSelected = false;
    dashboardSelected = false;
    
    
    
    public isCollapsed: boolean = true;
    
    markHomeSelected(){
    this.homeSelected = true;
    this.simulatorSelected = false;
    this.dashboardSelected = false;
    }
    
    markSimulatorSelected(){
    this.homeSelected = false;
    this.simulatorSelected = true;
    this.dashboardSelected = false;
    }    
    
    markDashboardSelected(){
    this.homeSelected = false;
    this.simulatorSelected = false;
    this.dashboardSelected = true;
    }      
    
    constructor(private authService: AuthenticationService,private gauthService: GAuthenticationService){
        console.log("constructor!");
        this.login = this.authService.isAuthenticated||this.gauthService.isAuthenticated;
    }

    submitLogout(){
        if(this.authService.isAuthenticated){
        this.authService.logout('/welcome');
        }
        if(this.gauthService.isAuthenticated){
          this.gauthService.logout('/welcome');
        }
        
        this.login = false;
    }
    isLoggedIn(){
        return this.authService.isAuthenticated||this.gauthService.isAuthenticated;
    }
}
