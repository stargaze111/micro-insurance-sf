"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* * * ./app/comments/components/index.ts * * */
// Imports
var core_1 = require('@angular/core');
require('rxjs/add/operator/take');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var transactions_service_1 = require('../services/transactions.service');
var Observable_1 = require('rxjs/Observable');
var googlechart_component_1 = require('./googlechart.component');
var _ = require('underscore');
var AnalyticsComponent = (function () {
    function AnalyticsComponent(searchInsuranceTransactionsService, route, location) {
        this.searchInsuranceTransactionsService = searchInsuranceTransactionsService;
        this.route = route;
        this.location = location;
        this.refreshFrequency = 5000;
        this.grandTotalConversion = "0%";
        this.totalConversion = "0%";
        this.dateSearch = false;
        this.grandTotalRevenue = 0;
        this.grandTotalQuotes = 0;
        this.grandTotalPolicies = 0;
        this.lastRefreshMilliseconds = (new Date()).getTime();
        this.lastRefreshed = "1 second";
        this.totalPolicyAmount = 0;
        this.totalQuotes = 0;
        this.totalPolicies = 0;
        this.selectedOptionId = 0;
        this.selectedCompanyId = 0;
        this.selectedInsuranceId = 0;
        this.selectedChartId = 0;
        this.isLoaded = false;
        this.searchSubscription = null;
        this.timerSubscription = null;
        this.toggoleShowHide = "visible";
        this.live = false;
        this.exe_id = "";
        this.search_options = Array();
        this.insurance_types = Array();
        this.company_types = Array();
        this.chart_types = Array();
        this.dashboard_googlechart1 = new DashboardGoogleChartComponent();
        this.fromMilliseconds = "";
        this.toMilliseconds = "";
        this.selectedFromTime = null;
        this.selectedToTime = null;
        this.filteredPieChartData = this.dashboard_googlechart1.createDataTable([
            []
        ]);
        this.summaryPieChartData = this.dashboard_googlechart1.createDataTable([
            []
        ]);
        this.insTypeSummaryPieChartData = this.dashboard_googlechart1.createDataTable([
            []
        ]);
        this.insRevSummaryPieChartData = this.dashboard_googlechart1.createDataTable([
            []
        ]);
        this.companySummaryPieChartData = this.dashboard_googlechart1.createDataTable([
            []
        ]);
        this.companyRevSummaryPieChartData = this.dashboard_googlechart1.createDataTable([
            []
        ]);
        this.filteredInsTypeSummaryPieChartData = this.dashboard_googlechart1.createDataTable([
            []
        ]);
        this.filteredInsRevSummaryPieChartData = this.dashboard_googlechart1.createDataTable([
            []
        ]);
        this.filteredCompanySummaryPieChartData = this.dashboard_googlechart1.createDataTable([
            []
        ]);
        this.filteredCompanyRevSummaryPieChartData = this.dashboard_googlechart1.createDataTable([
            []
        ]);
        this.filteredLineChartData = this.dashboard_googlechart1.createDataTable([
            []
        ]);
        this.pieChartOptions = {
            width: '98%',
            height: '98%',
            pieSliceText: 'percentage',
            pieSliceTextStyle: { alignment: 'center' },
            chartArea: {
                height: '100%',
                width: '100%'
            },
            is3D: true,
            titleTextStyle: { textStyle: { fontName: 'Roboto', fontSize: 11, bold: false, italic: false } },
            tooltip: { textStyle: { fontName: 'Roboto', fontSize: 11, bold: false } },
            legend: { textStyle: { fontName: 'Roboto', fontSize: 11, bold: false } }
        };
        this.lineChartOptions = {
            backgroundColor: '#F8F8F8',
            titleTextStyle: { textStyle: { fontName: 'Roboto', fontSize: 11, bold: false, italic: false } },
            tooltip: { textStyle: { fontName: 'Roboto', fontSize: 11, bold: false } },
            legend: { textStyle: { fontName: 'Roboto', fontSize: 11, bold: false } },
            chartArea: { bottom: 80, to: 50 },
            hAxis: {
                titleTextStyle: { textStyle: { fontName: 'Roboto', fontSize: 11, bold: false, italic: false } },
                textStyle: { fontName: 'Roboto', fontSize: 10, bold: false, italic: false },
                legend: { textStyle: { fontName: 'Roboto', fontSize: 11, bold: false } }
            },
            vAxis: {
                titleTextStyle: { textStyle: { fontName: 'Roboto', fontSize: 11, bold: false, italic: false } },
                textStyle: { fontName: 'Roboto', fontSize: 10, bold: false, italic: false },
                legend: { textStyle: { fontName: 'Roboto', fontSize: 11, bold: false } }
            }
        };
    }
    AnalyticsComponent.prototype.toggleDashboardMenu = function (value) {
        var element = document.getElementById("dashboard_menu");
        var style = element.style;
        if (style.display == null || style.display == 'none' || style.display == '' || style.display == ' ' || style.display == undefined) {
            style.display = 'block';
            document.getElementById("dashboard_menu_a").classList.add('toggled');
        }
        else {
            style.display = 'none';
            //element.className="menu-toggle waves-effect waves-block";
            document.getElementById("dashboard_menu_a").classList.remove('toggled');
        }
    };
    AnalyticsComponent.prototype.toggleSearchMenu = function (value) {
        var element = document.getElementById("search_menu");
        var style = element.style;
        if (style.display == null || style.display == 'none' || style.display == '' || style.display == ' ' || style.display == undefined) {
            style.display = 'block';
            //element.className="menu-toggle waves-effect waves-block toggled";
            document.getElementById("search_menu_a").classList.add('toggled');
        }
        else {
            style.display = 'none';
            document.getElementById("search_menu_a").classList.remove('toggled');
        }
    };
    AnalyticsComponent.prototype.toggleHistoryMenu = function (value) {
        var element = document.getElementById("history_menu");
        var style = element.style;
        if (style.display == null || style.display == 'none' || style.display == '' || style.display == ' ' || style.display == undefined) {
            style.display = 'block';
            document.getElementById("history_menu_a").classList.add('toggled');
        }
        else {
            style.display = 'none';
            document.getElementById("history_menu_a").classList.remove('toggled');
        }
    };
    AnalyticsComponent.prototype.toggleInsuranceMenu = function (value) {
        var element = document.getElementById("insurance_menu");
        var style = element.style;
        if (style.display == null || style.display == 'none' || style.display == '' || style.display == ' ' || style.display == undefined) {
            style.display = 'block';
            document.getElementById("insurance_menu_a").classList.add('toggled');
        }
        else {
            style.display = 'none';
            document.getElementById("insurance_menu_a").classList.remove('toggled');
        }
    };
    AnalyticsComponent.prototype.toggleCompanyMenu = function (value) {
        var element = document.getElementById("company_menu");
        var style = element.style;
        if (style.display == null || style.display == 'none' || style.display == '' || style.display == ' ' || style.display == undefined) {
            style.display = 'block';
            document.getElementById("company_menu_a").classList.add('toggled');
        }
        else {
            style.display = 'none';
            document.getElementById("company_menu_a").classList.remove('toggled');
        }
    };
    AnalyticsComponent.prototype.drawFilteredGraph = function () {
        this.dashboard_googlechart1.chart = this.dashboard_googlechart1.createLineChart(document.getElementById('line_chart'));
        this.dashboard_googlechart1.chart.draw(this.filteredLineChartData, this.lineChartOptions);
        // this.dashboard_googlechart1.chart = this.dashboard_googlechart1.createPieChart(document.getElementById('filtered_pie_chart'));
        // this.dashboard_googlechart1.chart.draw(this.filteredPieChartData, this.pieChartOptions);
        this.dashboard_googlechart1.chart = this.dashboard_googlechart1.createPieChart(document.getElementById('filtered_ins_pie_chart'));
        this.dashboard_googlechart1.chart.draw(this.filteredInsTypeSummaryPieChartData, this.pieChartOptions);
        this.dashboard_googlechart1.chart = this.dashboard_googlechart1.createPieChart(document.getElementById('filtered_ins_rev_pie_chart'));
        this.dashboard_googlechart1.chart.draw(this.filteredInsRevSummaryPieChartData, this.pieChartOptions);
        this.dashboard_googlechart1.chart = this.dashboard_googlechart1.createPieChart(document.getElementById('filtered_company_pie_chart'));
        this.dashboard_googlechart1.chart.draw(this.filteredCompanySummaryPieChartData, this.pieChartOptions);
        this.dashboard_googlechart1.chart = this.dashboard_googlechart1.createPieChart(document.getElementById('filtered_company_rev_pie_chart'));
        this.dashboard_googlechart1.chart.draw(this.filteredCompanyRevSummaryPieChartData, this.pieChartOptions);
    };
    AnalyticsComponent.prototype.drawSummaryGraph = function () {
        //this.dashboard_googlechart1.chart = this.dashboard_googlechart1.createPieChart(document.getElementById('summary_pie_chart'));
        // this.dashboard_googlechart1.chart.draw(this.summaryPieChartData, this.pieChartOptions);
        this.dashboard_googlechart1.chart = this.dashboard_googlechart1.createPieChart(document.getElementById('ins_pie_chart'));
        this.dashboard_googlechart1.chart.draw(this.insTypeSummaryPieChartData, this.pieChartOptions);
        this.dashboard_googlechart1.chart = this.dashboard_googlechart1.createPieChart(document.getElementById('ins_rev_pie_chart'));
        this.dashboard_googlechart1.chart.draw(this.insRevSummaryPieChartData, this.pieChartOptions);
        this.dashboard_googlechart1.chart = this.dashboard_googlechart1.createPieChart(document.getElementById('company_pie_chart'));
        this.dashboard_googlechart1.chart.draw(this.companySummaryPieChartData, this.pieChartOptions);
        this.dashboard_googlechart1.chart = this.dashboard_googlechart1.createPieChart(document.getElementById('company_rev_pie_chart'));
        this.dashboard_googlechart1.chart.draw(this.companyRevSummaryPieChartData, this.pieChartOptions);
    };
    AnalyticsComponent.prototype.timeSince = function (lastRefreshMilliseconds) {
        var currentTime = (new Date()).getTime();
        if (lastRefreshMilliseconds == 0) {
            lastRefreshMilliseconds = currentTime - 1000;
        }
        var seconds = Math.floor((currentTime - lastRefreshMilliseconds) / 1000);
        var interval = Math.floor(seconds / 31536000);
        var tmpLastRefreshed = " ";
        if (interval > 1) {
            tmpLastRefreshed = tmpLastRefreshed + interval + " years";
        }
        else if (interval == 1) {
            tmpLastRefreshed = tmpLastRefreshed + interval + " year";
        }
        var monthInterval = Math.floor(seconds / 2592000);
        if (monthInterval > 1 && monthInterval < 12) {
            tmpLastRefreshed = tmpLastRefreshed + " " + monthInterval + " months";
        }
        else if (monthInterval == 1) {
            tmpLastRefreshed = tmpLastRefreshed + " " + monthInterval + " month";
        }
        var dayInterval = Math.floor(seconds / 86400);
        if (dayInterval > 1 && dayInterval < 31) {
            tmpLastRefreshed = tmpLastRefreshed + " " + dayInterval + " days";
        }
        else if (dayInterval == 1) {
            tmpLastRefreshed = tmpLastRefreshed + " " + dayInterval + " day";
        }
        var hourInterval = Math.floor(seconds / 3600);
        if (hourInterval > 1 && hourInterval < 24) {
            tmpLastRefreshed = tmpLastRefreshed + " " + hourInterval + " hours";
        }
        else if (hourInterval == 1) {
            tmpLastRefreshed = tmpLastRefreshed + " " + hourInterval + " hour";
        }
        var minInterval = Math.floor(seconds / 60);
        if (minInterval > 1 && minInterval < 60) {
            tmpLastRefreshed = tmpLastRefreshed + " " + minInterval + " minutes";
        }
        else if (minInterval == 1) {
            tmpLastRefreshed = tmpLastRefreshed + " " + minInterval + " minute";
        }
        var secInterval = Math.floor(seconds);
        secInterval = secInterval % 60;
        if (secInterval > 1 && secInterval < 60) {
            tmpLastRefreshed = tmpLastRefreshed + " " + secInterval + " seconds";
        }
        else if (secInterval == 1) {
            tmpLastRefreshed = tmpLastRefreshed + " " + secInterval + " second";
        }
        else {
            tmpLastRefreshed = tmpLastRefreshed + " " + 1 + " second";
        }
        document.getElementById("refreshTime").innerHTML = "<i>REFRESHED " + tmpLastRefreshed.toUpperCase() + " AGO</i>";
        this.subscribeToTimer();
    };
    AnalyticsComponent.prototype.subscribeToTimer = function () {
        var _this = this;
        this.timerSubscription = Observable_1.Observable.timer(1000).first().subscribe(function () { return _this.timeSince(_this.lastRefreshMilliseconds); });
    };
    AnalyticsComponent.prototype.ngOnInit = function () {
        console.log("inside ngOnInit");
        //initialize dropdowns
        this.initializeDropdowns();
        this.subscribeToTimer();
        this.reset_clicked();
    };
    AnalyticsComponent.prototype.initializeDropdowns = function () {
        this.search_options = Array();
        this.search_options.push(new InsuranceDashboardSearchOption(0, 'Last 5 minutes'));
        this.search_options.push(new InsuranceDashboardSearchOption(1, 'Last 10 minutes'));
        this.search_options.push(new InsuranceDashboardSearchOption(2, 'Last 30 minutes'));
        this.search_options.push(new InsuranceDashboardSearchOption(3, 'Last 1 hour'));
        this.search_options.push(new InsuranceDashboardSearchOption(4, 'Last 3 hours'));
        this.search_options.push(new InsuranceDashboardSearchOption(5, 'Last 6 hours'));
        this.search_options.push(new InsuranceDashboardSearchOption(6, 'Last 12 hours'));
        this.search_options.push(new InsuranceDashboardSearchOption(7, 'Last 24 hours'));
        this.search_options.push(new InsuranceDashboardSearchOption(8, 'Last 1 week'));
        this.search_options.push(new InsuranceDashboardSearchOption(9, 'Last 1 month'));
        this.search_option = new InsuranceDashboardSearchOption(0, 'Last 5 minutes');
        this.insurance_types = Array();
        this.insurance_types.push(new InsuranceDashboardInsuranceType(0, 'All'));
        this.insurance_types.push(new InsuranceDashboardInsuranceType(1, 'Ride Sharing'));
        this.insurance_types.push(new InsuranceDashboardInsuranceType(2, 'Food Delivery'));
        this.insurance_types.push(new InsuranceDashboardInsuranceType(3, 'Rental Car'));
        this.insurance_types.push(new InsuranceDashboardInsuranceType(4, 'Holiday Travel'));
        this.insurance_type = new InsuranceDashboardInsuranceType(0, 'All');
        this.company_types = Array();
        this.company_types.push(new InsuranceDashboardCompanyType(0, 'All'));
        this.company_types.push(new InsuranceDashboardCompanyType(1, 'Tuber'));
        this.company_types.push(new InsuranceDashboardCompanyType(2, 'Delivermoo'));
        this.company_types.push(new InsuranceDashboardCompanyType(3, 'GoGet'));
        this.company_types.push(new InsuranceDashboardCompanyType(4, 'Menulog'));
        this.company_types.push(new InsuranceDashboardCompanyType(5, 'SMS Insurance'));
        this.company_type = new InsuranceDashboardCompanyType(0, 'All');
        this.chart_types = Array();
        this.chart_types.push(new InsuranceDashboardChartType(0, ' Main'));
        this.chart_types.push(new InsuranceDashboardChartType(1, 'History'));
        this.chart_type = new InsuranceDashboardChartType(0, 'Main');
    };
    AnalyticsComponent.prototype.selectLive = function () {
        this.live = !this.live;
        console.log("button triggered : live : " + this.live);
        this.triggerSearch();
    };
    AnalyticsComponent.prototype.selectInsuranceType = function (selectedInsurance) {
        try {
            var style = document.getElementById("insurance" + selectedInsurance).style;
            if (style != null) {
                if (style.backgroundColor == "") {
                    style.backgroundColor = "#D3D3D3";
                    var noOfInsurances = this.insurance_types.length;
                    for (var y = 0; y < noOfInsurances; y++) {
                        if (y == selectedInsurance) {
                            continue;
                        }
                        var style1 = document.getElementById("insurance" + y).style;
                        if (style1 != null) {
                            style1.backgroundColor = "";
                        }
                    }
                }
                else {
                    style.backgroundColor = "";
                    selectedInsurance = 0;
                }
            }
        }
        catch (e) {
        }
        this.selectedInsuranceId = selectedInsurance;
        if (selectedInsurance != -1) {
            console.log('insurance: ' + JSON.stringify(selectedInsurance) + ":" + this.insurance_types[selectedInsurance].name);
        }
        else {
            console.log('None selected');
        }
        this.triggerSearch();
    };
    AnalyticsComponent.prototype.selectCompanyType = function (selectedCompany) {
        try {
            var style = document.getElementById("company" + selectedCompany).style;
            if (style != null) {
                if (style.backgroundColor == "") {
                    style.backgroundColor = "#D3D3D3";
                    var noOfCompanies = this.company_types.length;
                    for (var y = 0; y < noOfCompanies; y++) {
                        if (y == selectedCompany) {
                            continue;
                        }
                        var style1 = document.getElementById("company" + y).style;
                        if (style1 != null) {
                            style1.backgroundColor = "";
                        }
                    }
                }
                else {
                    style.backgroundColor = "";
                    selectedCompany = 0;
                }
            }
        }
        catch (e) {
        }
        console.log('Inside select company ');
        this.selectedCompanyId = selectedCompany;
        if (selectedCompany != -1) {
            console.log('company: ' + JSON.stringify(selectedCompany) + ":" + this.company_types[selectedCompany].name);
        }
        else {
            console.log('None selected');
        }
        this.triggerSearch();
    };
    AnalyticsComponent.prototype.selectChartType = function (selectedChart) {
        this.selectedChartId = selectedChart;
        if (selectedChart != -1) {
            console.log('chart: ' + JSON.stringify(selectedChart) + ":" + this.chart_types[selectedChart].name);
            if (selectedChart == 1) {
                this.live = false;
            }
            this.triggerSearch();
        }
        else {
            console.log('None selected');
        }
    };
    AnalyticsComponent.prototype.selectSearchOption = function (selectedOption) {
        try {
            var style = document.getElementById("history" + selectedOption).style;
            if (style != null) {
                if (style.backgroundColor == "") {
                    style.backgroundColor = "#D3D3D3";
                    var noOfOptions = this.search_options.length;
                    for (var y = 0; y < noOfOptions; y++) {
                        if (y == selectedOption) {
                            continue;
                        }
                        var style1 = document.getElementById("history" + y).style;
                        if (style1 != null) {
                            style1.backgroundColor = "";
                        }
                    }
                }
                else {
                    style.backgroundColor = "";
                    selectedOption = 0;
                }
            }
        }
        catch (e) {
        }
        this.selectedOptionId = parseInt(selectedOption);
        this.triggerSearch();
        if (selectedOption != -1) {
            console.log('selected: ' + JSON.stringify(selectedOption) + ":" + this.search_options[selectedOption].name);
        }
        else {
            console.log('None selected');
            this.unsubscribeToData();
        }
    };
    AnalyticsComponent.prototype.reset_clicked = function () {
        console.log('Reset Clicked ');
        this.dateSearch = false;
        this.grandTotalConversion = "0%";
        this.totalConversion = "0%";
        this.totalPolicyAmount = 0;
        this.totalQuotes = 0;
        this.totalPolicies = 0;
        this.selectedOptionId = 0;
        this.selectedCompanyId = 0;
        this.selectedInsuranceId = 0;
        this.selectedChartId = 0;
        this.live = false;
        this.exe_id = "";
        this.search_option = new InsuranceDashboardSearchOption(0, 'Last 5 minutes');
        this.insurance_type = new InsuranceDashboardInsuranceType(0, 'All');
        this.company_type = new InsuranceDashboardCompanyType(0, 'All');
        this.chart_type = new InsuranceDashboardChartType(0, 'Main');
        this.lastRefreshMilliseconds = (new Date()).getTime();
        this.lastRefreshed = "1 second";
        this.isLoaded = false;
        this.fromMilliseconds = "";
        this.toMilliseconds = "";
        this.selectedFromTime = new Date();
        this.selectedToTime = new Date();
        this.selectedFromTime = null;
        this.selectedToTime = null;
        var element1 = document.getElementById("dashboard_menu");
        var style1 = element1.style;
        style1.display = "none";
        document.getElementById("dashboard_menu_a").classList.remove('toggled');
        var element2 = document.getElementById("search_menu");
        var style2 = element2.style;
        style2.display = "none";
        document.getElementById("search_menu_a").classList.remove('toggled');
        var element3 = document.getElementById("history_menu");
        var style3 = element3.style;
        style3.display = "none";
        document.getElementById("history_menu_a").classList.remove('toggled');
        var element4 = document.getElementById("insurance_menu");
        var style4 = element4.style;
        style4.display = "none";
        document.getElementById("insurance_menu_a").classList.remove('toggled');
        var element5 = document.getElementById("company_menu");
        var style5 = element5.style;
        style5.display = "none";
        document.getElementById("company_menu_a").classList.remove('toggled');
        this.unsubscribeToData();
        this.triggerSearch();
    };
    AnalyticsComponent.prototype.search_clicked = function (value) {
        console.log('Search Clicked ' + value);
        if (value != null && value != "") {
            this.exe_id = value;
        }
        this.triggerSearch();
    };
    AnalyticsComponent.prototype.triggerSearch = function () {
        console.log('selectedOption :' + this.selectedOptionId);
        console.log('fromMilliseconds :' + this.fromMilliseconds);
        var selectedInsurance = "";
        var selectedCompany = "";
        if (this.selectedInsuranceId != -1) {
            selectedInsurance = this.insurance_types[this.selectedInsuranceId].name;
        }
        if (this.selectedCompanyId != -1) {
            selectedCompany = this.company_types[this.selectedCompanyId].name;
        }
        var toTimeInMilliSeconds = -1;
        if ((this.selectedFromTime != null) || (this.selectedToTime != null)) {
            console.log('provided date range :' + this.selectedFromTime);
            var currentDate = new Date();
            var fromTimeInMilliSeconds = currentDate.getTime();
            if ((this.selectedFromTime != null)) {
                //let fromTimeString = this.getTimeInMillisecondsString(this.selectedFromTime);
                fromTimeInMilliSeconds = new Date(this.selectedFromTime).getTime();
                this.fromMilliseconds = fromTimeInMilliSeconds + "";
            }
            if ((this.selectedToTime != null)) {
                //let toTimeString = this.getTimeInMillisecondsString(this.selectedToTime);
                toTimeInMilliSeconds = new Date(this.selectedToTime).getTime();
                this.toMilliseconds = toTimeInMilliSeconds + "";
            }
            this.dateSearch = true;
            this.selectedChartId = 1;
            this.live = false;
            this.searchTransactions(this.selectedOptionId, fromTimeInMilliSeconds, toTimeInMilliSeconds, selectedInsurance, selectedCompany, null);
            console.log('Subscribe for periodically refreshing data');
        }
        else {
            this.dateSearch = false;
            //start live dashboard with filters
            var currentDate = new Date();
            currentDate.setSeconds(0);
            var currentTimeInMilliSeconds = currentDate.getTime();
            this.globalCurrentTime = this.getTimestampString(currentDate);
            var fromTimeInMilliSeconds = -1;
            var dataPointFactor = 1;
            var dataPointFactor1 = 0;
            var dataPoints1 = 0;
            var dataPoints2 = 60;
            if (this.live) {
                this.fromMilliseconds = currentTimeInMilliSeconds + "";
                dataPointFactor = dataPointFactor * (2) * 1000;
                fromTimeInMilliSeconds = (currentTimeInMilliSeconds - (60000 * 1));
                this.searchTransactions(this.selectedOptionId, fromTimeInMilliSeconds, toTimeInMilliSeconds, selectedInsurance, selectedCompany, this.exe_id);
                console.log('Subscribe for periodically refreshing data');
            }
            else if (this.selectedOptionId == 0) {
                this.fromMilliseconds = currentTimeInMilliSeconds + "";
                dataPointFactor = dataPointFactor * 5 * 1000;
                fromTimeInMilliSeconds = (currentTimeInMilliSeconds - (60000 * 5));
                this.searchTransactions(this.selectedOptionId, fromTimeInMilliSeconds, toTimeInMilliSeconds, selectedInsurance, selectedCompany, this.exe_id);
                console.log('Unsubscribe from periodically refreshing data');
            }
            else if (this.selectedOptionId == 1) {
                this.toMilliseconds = currentTimeInMilliSeconds + "";
                dataPointFactor = dataPointFactor * 10 * 1000;
                fromTimeInMilliSeconds = (currentTimeInMilliSeconds - (60000 * 10));
                this.fromMilliseconds = fromTimeInMilliSeconds + "";
                this.searchTransactions(this.selectedOptionId, fromTimeInMilliSeconds, toTimeInMilliSeconds, selectedInsurance, selectedCompany, this.exe_id);
                console.log('Unsubscribe from periodically refreshing data');
            }
            else if (this.selectedOptionId == 2) {
                this.toMilliseconds = currentTimeInMilliSeconds + "";
                dataPointFactor = dataPointFactor * 30 * 1000;
                fromTimeInMilliSeconds = (currentTimeInMilliSeconds - (60000 * 30));
                this.fromMilliseconds = fromTimeInMilliSeconds + "";
                this.searchTransactions(this.selectedOptionId, fromTimeInMilliSeconds, toTimeInMilliSeconds, selectedInsurance, selectedCompany, this.exe_id);
                console.log('Unsubscribe from periodically refreshing data');
            }
            else if (this.selectedOptionId == 3) {
                this.toMilliseconds = currentTimeInMilliSeconds + "";
                dataPointFactor = dataPointFactor * 60 * 1000;
                fromTimeInMilliSeconds = (currentTimeInMilliSeconds - (60000 * 60));
                this.fromMilliseconds = fromTimeInMilliSeconds + "";
                this.searchTransactions(this.selectedOptionId, fromTimeInMilliSeconds, toTimeInMilliSeconds, selectedInsurance, selectedCompany, this.exe_id);
                console.log('Unsubscribe from periodically refreshing data');
            }
            else if (this.selectedOptionId == 4) {
                this.toMilliseconds = currentTimeInMilliSeconds + "";
                dataPointFactor = dataPointFactor * 180 * 1000;
                fromTimeInMilliSeconds = (currentTimeInMilliSeconds - (60000 * 180));
                this.fromMilliseconds = fromTimeInMilliSeconds + "";
                this.searchTransactions(this.selectedOptionId, fromTimeInMilliSeconds, toTimeInMilliSeconds, selectedInsurance, selectedCompany, this.exe_id);
                console.log('Unsubscribe from periodically refreshing data');
            }
            else if (this.selectedOptionId == 5) {
                this.toMilliseconds = currentTimeInMilliSeconds + "";
                dataPointFactor = dataPointFactor * 360 * 1000;
                fromTimeInMilliSeconds = (currentTimeInMilliSeconds - (60000 * 360));
                this.fromMilliseconds = fromTimeInMilliSeconds + "";
                this.searchTransactions(this.selectedOptionId, fromTimeInMilliSeconds, toTimeInMilliSeconds, selectedInsurance, selectedCompany, this.exe_id);
                console.log('Unsubscribe from periodically refreshing data');
            }
            else if (this.selectedOptionId == 6) {
                this.toMilliseconds = currentTimeInMilliSeconds + "";
                dataPointFactor = dataPointFactor * 720 * 1000;
                fromTimeInMilliSeconds = (currentTimeInMilliSeconds - (60000 * 720));
                this.fromMilliseconds = fromTimeInMilliSeconds + "";
                this.searchTransactions(this.selectedOptionId, fromTimeInMilliSeconds, toTimeInMilliSeconds, selectedInsurance, selectedCompany, this.exe_id);
                console.log('Unsubscribe from periodically refreshing data');
            }
            else if (this.selectedOptionId == 7) {
                this.toMilliseconds = currentTimeInMilliSeconds + "";
                dataPointFactor = dataPointFactor * 1440 * 1000;
                fromTimeInMilliSeconds = (currentTimeInMilliSeconds - (60000 * 1440));
                this.fromMilliseconds = fromTimeInMilliSeconds + "";
                this.searchTransactions(this.selectedOptionId, fromTimeInMilliSeconds, toTimeInMilliSeconds, selectedInsurance, selectedCompany, this.exe_id);
                console.log('Unsubscribe from periodically refreshing data');
            }
            else if (this.selectedOptionId == 8) {
                this.toMilliseconds = currentTimeInMilliSeconds + "";
                dataPointFactor = dataPointFactor * 10080 * 1000;
                fromTimeInMilliSeconds = (currentTimeInMilliSeconds - (60000 * 10080));
                this.fromMilliseconds = fromTimeInMilliSeconds + "";
                this.searchTransactions(this.selectedOptionId, fromTimeInMilliSeconds, toTimeInMilliSeconds, selectedInsurance, selectedCompany, this.exe_id);
                console.log('Unsubscribe from periodically refreshing data');
            }
            else if (this.selectedOptionId == 9) {
                this.toMilliseconds = currentTimeInMilliSeconds + "";
                dataPointFactor = dataPointFactor * 300080 * 1000;
                fromTimeInMilliSeconds = (currentTimeInMilliSeconds - (60000 * 300080));
                this.fromMilliseconds = fromTimeInMilliSeconds + "";
                this.searchTransactions(this.selectedOptionId, fromTimeInMilliSeconds, toTimeInMilliSeconds, selectedInsurance, selectedCompany, this.exe_id);
                console.log('Unsubscribe from periodically refreshing data');
            }
            else {
                console.log('Unsubscribe from periodically refreshing data');
            }
        }
    };
    AnalyticsComponent.prototype.searchTransactions = function (selectedOption, fromTimeInMilliSeconds, toTimeInMilliSeconds, selectedInsurance, selectedCompany, exeId) {
        var _this = this;
        this.unsubscribeToData();
        this.insuranceTransactionsResponse = null;
        this.filteredTypesSummary = [];
        this.filteredCompaniesSummary = [];
        this.typesSummary = [];
        this.companiesSummary = [];
        this.responseData = null;
        this.searchTransactionsSummary(selectedInsurance, selectedCompany, exeId);
        console.log('selectedOption :' + selectedOption);
        console.log('fromMilliseconds :' + this.fromMilliseconds);
        console.log('toMilliseconds :' + this.toMilliseconds);
        this.searchInsuranceTransactionsService.searchTransactions(this.fromMilliseconds, this.toMilliseconds, selectedInsurance, selectedCompany, exeId).subscribe(function (insuranceTransactionsResponse) {
            _this.insuranceTransactionsResponse = insuranceTransactionsResponse;
            if (insuranceTransactionsResponse != null && insuranceTransactionsResponse.status != null && 'SUCCESS' == insuranceTransactionsResponse.status.toUpperCase()) {
                _this.responseData = insuranceTransactionsResponse.data;
                if (_this.responseData != null) {
                    _this.insuranceSummary = _this.responseData.summary;
                    _this.insuranceTransactions = _this.responseData.transactions;
                    console.log('Number of transactions : ' + _this.insuranceTransactions.length);
                    _this.filteredInsuranceSummary = _this.responseData.summary;
                    var groupsSummary = _this.responseData.groupsSummary;
                    if (groupsSummary != null) {
                        _this.filteredTypesSummary = groupsSummary.insuranceTypeSummary;
                        _this.filteredCompaniesSummary = groupsSummary.companiesSummary;
                    }
                    //console.log('summary : ' + JSON.stringify(this.filteredInsuranceSummary));
                    //console.log('typesSummary : ' + JSON.stringify(this.filteredTypesSummary));
                    //console.log('companiesSummary : ' + JSON.stringify(this.filteredCompaniesSummary));
                    _this.updateFilteredChart(selectedOption, fromTimeInMilliSeconds, toTimeInMilliSeconds, selectedInsurance, selectedCompany, exeId);
                }
                else {
                    console.log('Invalid Response Data');
                    _this.insuranceTransactionsResponse = null;
                    _this.filteredTypesSummary = [];
                    _this.filteredCompaniesSummary = [];
                }
            }
            else {
                _this.errorData = insuranceTransactionsResponse.error;
                _this.insuranceTransactionsResponse = null;
                _this.filteredTypesSummary = [];
                _this.filteredCompaniesSummary = [];
            }
        }, function (err) {
            // Log errors if any
            console.log(err);
        });
        this.lastRefreshMilliseconds = (new Date()).getTime();
        console.log("lastRefreshMilliseconds ----------------------------------------- :" + this.lastRefreshMilliseconds);
        if (this.live) {
            console.log('Subscribe from periodically refreshing data');
            this.subscribeToData(selectedOption, fromTimeInMilliSeconds, toTimeInMilliSeconds, selectedInsurance, selectedCompany, exeId);
        }
    };
    AnalyticsComponent.prototype.searchTransactionsSummary = function (selectedInsurance, selectedCompany, exeId) {
        var _this = this;
        this.searchInsuranceTransactionsService.searchTransactionsSummary(selectedInsurance, selectedCompany, exeId).subscribe(function (insuranceTransactionsResponse) {
            _this.insuranceTransactionsResponse = insuranceTransactionsResponse;
            if (insuranceTransactionsResponse != null && insuranceTransactionsResponse.status != null && 'SUCCESS' == insuranceTransactionsResponse.status.toUpperCase()) {
                _this.responseData = insuranceTransactionsResponse.data;
                if (_this.responseData != null) {
                    _this.insuranceSummary = _this.responseData.summary;
                    var groupsSummary = _this.responseData.groupsSummary;
                    if (groupsSummary != null) {
                        _this.typesSummary = groupsSummary.insuranceTypeSummary;
                        _this.companiesSummary = groupsSummary.companiesSummary;
                    }
                    //console.log('summary : ' + JSON.stringify(this.insuranceSummary));
                    //console.log('typesSummary : ' + JSON.stringify(this.typesSummary));
                    //console.log('companiesSummary : ' + JSON.stringify(this.companiesSummary));
                    _this.updateSummaryChart();
                    _this.isLoaded = true;
                }
                else {
                    console.log('Invalid Response Data');
                    _this.typesSummary = [];
                    _this.companiesSummary = [];
                    _this.responseData = null;
                }
            }
            else {
                _this.errorData = insuranceTransactionsResponse.error;
                _this.typesSummary = [];
                _this.companiesSummary = [];
                _this.responseData = null;
            }
        }, function (err) {
            // Log errors if any
            console.log(err);
        });
    };
    AnalyticsComponent.prototype.subscribeToData = function (selectedOption, fromTimeInMilliSeconds, toTimeInMilliSeconds, selectedInsurance, selectedCompany, exeId) {
        var _this = this;
        var currentDate = new Date();
        currentDate.setSeconds(0);
        var currentTimeInMilliSeconds = currentDate.getTime();
        fromTimeInMilliSeconds = (currentTimeInMilliSeconds - (60000 * 1));
        //this.fromMilliseconds=fromTimeInMilliSeconds+"";
        this.searchSubscription = Observable_1.Observable.timer(this.refreshFrequency).first().subscribe(function () { return _this.searchTransactions(selectedOption, fromTimeInMilliSeconds, toTimeInMilliSeconds, selectedInsurance, selectedCompany, exeId); });
    };
    AnalyticsComponent.prototype.unsubscribeToData = function () {
        if (this.searchSubscription) {
            this.searchSubscription.unsubscribe();
        }
    };
    AnalyticsComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeToData();
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
    };
    AnalyticsComponent.prototype.ngOnChanges = function (changes) {
    };
    AnalyticsComponent.prototype.updateSummaryChart = function () {
        console.log('Updating Summary Charts....');
        var totalQuotesCount = parseFloat(this.insuranceSummary.quotesCount);
        var totalPoliciesCount = parseFloat(this.insuranceSummary.policiesCount);
        console.log('totalQuotesCount :' + totalQuotesCount);
        console.log('totalPoliciesCount :' + totalPoliciesCount);
        var pieChartData = [[]];
        pieChartData.push(["Quotes", (totalQuotesCount - totalPoliciesCount)], ["Policies", totalPoliciesCount]);
        pieChartData[0] = ["Label", "Count"];
        this.grandTotalQuotes = totalQuotesCount;
        this.grandTotalPolicies = totalPoliciesCount;
        if (totalQuotesCount > 0) {
            this.grandTotalConversion = ((totalPoliciesCount / totalQuotesCount) * 100).toFixed(2) + "%";
        }
        else {
            this.grandTotalConversion = "0%";
        }
        this.grandTotalRevenue = parseFloat(this.insuranceSummary.totalPoliciesAmount);
        var typesPieChartData = [[]];
        var typesRevPieChartData = [[]];
        if (this.typesSummary != null) {
            var typesLength = this.typesSummary.length;
            for (var e = 0; e < typesLength; e++) {
                var floatData = (parseFloat(this.typesSummary[e].totalPoliciesAmount)).toFixed(2);
                typesPieChartData.push([this.typesSummary[e].name.toUpperCase(), Number(this.typesSummary[e].policiesCount)]);
                typesRevPieChartData.push([(this.typesSummary[e].name.toUpperCase()), Number(floatData + "")]);
            }
        }
        typesPieChartData[0] = ["Insurance", "Policies"];
        typesRevPieChartData[0] = ["Insurance", "Amount"];
        //console.log('typesPieChartData :'+JSON.stringify(typesPieChartData));
        //console.log('typesRevPieChartData :'+JSON.stringify(typesRevPieChartData));
        var companiesPieChartData = [[]];
        var companiesRevPieChartData = [[]];
        if (this.companiesSummary != null) {
            var companiesLength = this.companiesSummary.length;
            for (var e = 0; e < companiesLength; e++) {
                var floatData = (parseFloat(this.companiesSummary[e].totalPoliciesAmount)).toFixed(2);
                companiesPieChartData.push([this.companiesSummary[e].name.toUpperCase(), Number(this.companiesSummary[e].policiesCount)]);
                companiesRevPieChartData.push([(this.companiesSummary[e].name.toUpperCase()), Number(floatData + "")]);
            }
        }
        companiesPieChartData[0] = ["Company", "Policies"];
        companiesRevPieChartData[0] = ["Company", "Amount"];
        //console.log('companiesPieChartData :'+JSON.stringify(companiesPieChartData));
        //console.log('companiesRevPieChartData :'+JSON.stringify(companiesRevPieChartData));
        this.summaryPieChartData = this.dashboard_googlechart1.createDataTable(pieChartData);
        this.insTypeSummaryPieChartData = this.dashboard_googlechart1.createDataTable(typesPieChartData);
        this.insRevSummaryPieChartData = this.dashboard_googlechart1.createDataTable(typesRevPieChartData);
        this.companySummaryPieChartData = this.dashboard_googlechart1.createDataTable(companiesPieChartData);
        this.companyRevSummaryPieChartData = this.dashboard_googlechart1.createDataTable(companiesRevPieChartData);
        this.drawSummaryGraph();
    };
    AnalyticsComponent.prototype.updateFilteredChart = function (selectedOption, fromTimeInMilliSeconds, toTimeInMilliSeconds, selectedInsurance, selectedCompany, exeId) {
        console.log('Number of transactions :' + this.insuranceTransactions.length);
        console.log('fromTimeInMilliSeconds :' + fromTimeInMilliSeconds);
        var isOnlyTimeRequired = false;
        var fromDay = (new Date(fromTimeInMilliSeconds)).getDate();
        var today = (new Date()).getDate();
        var noOfDataPoints = this.insuranceTransactions.length;
        isOnlyTimeRequired = (fromDay == today);
        console.log('fromDay :' + fromDay);
        console.log('today :' + today);
        console.log('isOnlyTimeRequired :' + isOnlyTimeRequired);
        var totalQuotesCount = 0;
        var totalPoliciesCount = 0;
        var totalRevenue = 0.00;
        var techData1 = [];
        var techData = _.groupBy(this.insuranceTransactions, function (item) {
            var displayDateStr = null;
            //check this later
            if (item != null && item.modified != null) {
                var dateInMilliSeconds = item.modified;
                var now = new Date(dateInMilliSeconds);
                var date2 = [now.getFullYear(), now.getMonth() + 1, now.getDate()];
                var time2 = [now.getHours(), now.getMinutes(), now.getSeconds()];
                // If seconds and minutes are less than 10, add a zero
                var time1 = [];
                for (var i = 0; i < 3; i++) {
                    if (time2[i] < 10) {
                        time1.push("0" + time2[i]);
                    }
                    else {
                        time1.push(time2[i]);
                    }
                }
                var date1 = [];
                for (var i = 0; i < 3; i++) {
                    if (date2[i] < 10) {
                        date1.push("0" + date2[i]);
                    }
                    else {
                        date1.push(date2[i]);
                    }
                }
                displayDateStr = date1.join("-") + " " + time1.join(":");
            }
            //console.log("displayDateStr :" + displayDateStr);
            return displayDateStr;
        });
        //console.log('techData :'+JSON.stringify(techData));
        _.each(techData, function (value, key) {
            var quotesCount = value.length;
            totalQuotesCount = totalQuotesCount + quotesCount;
            var policiesCount = 0;
            for (var t = 0; t < quotesCount; t++) {
                if (value[t] != null && value[t].policyId != null) {
                    policiesCount = policiesCount + 1;
                    totalPoliciesCount = totalPoliciesCount + 1;
                    totalRevenue = parseFloat(value[t].policyAmount) + totalRevenue;
                }
            }
            if (key != null && key != 'Invalid date') {
                var date = new Date(key);
                var timeInMilliseconds = date.getTime();
                techData1.push({
                    "dateTime": key,
                    "timeInMilliseconds": timeInMilliseconds,
                    "quotesCount": quotesCount,
                    "policiesCount": policiesCount
                });
            }
        });
        var techData2 = _.sortBy(techData1, function (obj) {
            return [obj.timeInMilliseconds];
        });
        var tempLineChartData = [
            []
        ];
        if (techData2.length > 0) {
            _.each(techData2, function (value, key) {
                var chartDateTime = value.dateTime;
                // console.log('chartDateTime:'+chartDateTime);
                if (chartDateTime != null && "null" !== chartDateTime) {
                    tempLineChartData.push([chartDateTime, value.quotesCount, value.policiesCount]);
                }
            });
        }
        for (var r = 1; r < tempLineChartData.length; r++) {
            if (isOnlyTimeRequired) {
                var dateTime = "";
                dateTime = tempLineChartData[r][0] + "";
                var parts = dateTime.split(' ');
                tempLineChartData[r][0] = parts[1];
            }
        }
        if (tempLineChartData.length <= 1) {
            totalQuotesCount = 0;
            var now = new Date(fromTimeInMilliSeconds);
            var date2 = [now.getFullYear(), now.getMonth() + 1, now.getDate()];
            var time2 = [now.getHours(), now.getMinutes(), now.getSeconds()];
            // If seconds and minutes are less than 10, add a zero
            var time1 = [];
            for (var i = 0; i < 3; i++) {
                if (time2[i] < 10) {
                    time1.push("0" + time2[i]);
                }
                else {
                    time1.push(time2[i]);
                }
            }
            var date1 = [];
            for (var i = 0; i < 3; i++) {
                if (date2[i] < 10) {
                    date1.push("0" + date2[i]);
                }
                else {
                    date1.push(date2[i]);
                }
            }
            tempLineChartData.push([time1.join(":"), 0, 0]);
        }
        //console.log('tempLineChartData is reloaded with records count : ' + JSON.stringify(tempLineChartData));
        // console.log('tempLineChartData count : ' + tempLineChartData.length);
        tempLineChartData[0] = ["TIME", "QUOTES", "POLICIES"];
        this.filteredLineChartData = this.dashboard_googlechart1.createDataTable(tempLineChartData);
        this.totalPolicyAmount = totalRevenue;
        this.totalQuotes = totalQuotesCount;
        this.totalPolicies = totalPoliciesCount;
        if (totalQuotesCount > 0) {
            this.totalConversion = ((totalPoliciesCount / totalQuotesCount) * 100).toFixed(2) + "%";
        }
        else {
            this.totalConversion = "0%";
        }
        var pieChartData = [[]];
        pieChartData.push(["Quotes", (totalQuotesCount - totalPoliciesCount)], ["Policies", totalPoliciesCount]);
        pieChartData[0] = ["Label", "Count"];
        var typesPieChartData = [[]];
        var typesRevPieChartData = [[]];
        if (this.filteredTypesSummary != null) {
            var typesLength = this.filteredTypesSummary.length;
            for (var e = 0; e < typesLength; e++) {
                var floatData = (parseFloat(this.filteredTypesSummary[e].totalPoliciesAmount)).toFixed(2);
                typesPieChartData.push([this.filteredTypesSummary[e].name.toUpperCase(), Number(this.filteredTypesSummary[e].policiesCount)]);
                typesRevPieChartData.push([(this.filteredTypesSummary[e].name.toUpperCase()), Number(floatData + "")]);
            }
        }
        typesPieChartData[0] = ["Insurance", "Policies"];
        typesRevPieChartData[0] = ["Insurance", "Amount"];
        //console.log('typesPieChartData :'+JSON.stringify(typesPieChartData));
        //console.log('typesRevPieChartData :'+JSON.stringify(typesRevPieChartData));
        var companiesPieChartData = [[]];
        var companiesRevPieChartData = [[]];
        if (this.filteredCompaniesSummary != null) {
            var companiesLength = this.filteredCompaniesSummary.length;
            for (var e = 0; e < companiesLength; e++) {
                var floatData = (parseFloat(this.filteredCompaniesSummary[e].totalPoliciesAmount)).toFixed(2);
                companiesPieChartData.push([this.filteredCompaniesSummary[e].name.toUpperCase(), Number(this.filteredCompaniesSummary[e].policiesCount)]);
                companiesRevPieChartData.push([(this.filteredCompaniesSummary[e].name.toUpperCase()), Number(floatData + "")]);
            }
        }
        companiesPieChartData[0] = ["Company", "Policies"];
        companiesRevPieChartData[0] = ["Company", "Amount"];
        // console.log('companiesPieChartData :'+JSON.stringify(companiesPieChartData));
        // console.log('companiesRevPieChartData :'+JSON.stringify(companiesRevPieChartData));
        this.filteredPieChartData = this.dashboard_googlechart1.createDataTable(pieChartData);
        this.filteredInsTypeSummaryPieChartData = this.dashboard_googlechart1.createDataTable(typesPieChartData);
        this.filteredInsRevSummaryPieChartData = this.dashboard_googlechart1.createDataTable(typesRevPieChartData);
        this.filteredCompanySummaryPieChartData = this.dashboard_googlechart1.createDataTable(companiesPieChartData);
        this.filteredCompanyRevSummaryPieChartData = this.dashboard_googlechart1.createDataTable(companiesRevPieChartData);
        this.drawFilteredGraph();
    };
    AnalyticsComponent.prototype.getTimestampString = function (now) {
        var date2 = [now.getFullYear(), now.getMonth() + 1, now.getDate()];
        var time2 = [now.getHours(), now.getMinutes(), now.getSeconds()];
        // If seconds and minutes are less than 10, add a zero
        var time1 = [];
        for (var i = 0; i < 3; i++) {
            if (time2[i] < 10) {
                time1.push("0" + time2[i]);
            }
            else {
                time1.push(time2[i]);
            }
        }
        var date1 = [];
        for (var i = 0; i < 3; i++) {
            if (date2[i] < 10) {
                date1.push("0" + date2[i]);
            }
            else {
                date1.push(date2[i]);
            }
        }
        return date1.join("-") + ' ' + time1.join(':');
    };
    AnalyticsComponent.prototype.getTimeInMillisecondsString = function (now) {
        var parts = now.split(' ');
        var parts1 = parts[0].split('/');
        var parts2 = parts[1].split(':');
        return parts1.join('-') + " " + parts2.join(":") + ":" + "00";
    };
    AnalyticsComponent = __decorate([
        core_1.Component({
            selector: 'app-analytics',
            templateUrl: './analytics.component.html',
            moduleId: module.id,
            styleUrls: ['./analytics.component.css']
        }), 
        __metadata('design:paramtypes', [transactions_service_1.SearchInsuranceTransactionsService, router_1.ActivatedRoute, common_1.Location])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());
exports.AnalyticsComponent = AnalyticsComponent;
var DashboardGoogleChartComponent = (function (_super) {
    __extends(DashboardGoogleChartComponent, _super);
    function DashboardGoogleChartComponent() {
        _super.call(this);
    }
    return DashboardGoogleChartComponent;
}(googlechart_component_1.GoogleChartComponent));
exports.DashboardGoogleChartComponent = DashboardGoogleChartComponent;
var InsuranceDashboardSearchOption = (function () {
    function InsuranceDashboardSearchOption(id, name) {
        this.id = id;
        this.name = name;
    }
    return InsuranceDashboardSearchOption;
}());
exports.InsuranceDashboardSearchOption = InsuranceDashboardSearchOption;
var InsuranceDashboardInsuranceType = (function () {
    function InsuranceDashboardInsuranceType(id, name) {
        this.id = id;
        this.name = name;
    }
    return InsuranceDashboardInsuranceType;
}());
exports.InsuranceDashboardInsuranceType = InsuranceDashboardInsuranceType;
var InsuranceDashboardCompanyType = (function () {
    function InsuranceDashboardCompanyType(id, name) {
        this.id = id;
        this.name = name;
    }
    return InsuranceDashboardCompanyType;
}());
exports.InsuranceDashboardCompanyType = InsuranceDashboardCompanyType;
var InsuranceDashboardChartType = (function () {
    function InsuranceDashboardChartType(id, name) {
        this.id = id;
        this.name = name;
    }
    return InsuranceDashboardChartType;
}());
exports.InsuranceDashboardChartType = InsuranceDashboardChartType;
//# sourceMappingURL=analytics.component.js.map