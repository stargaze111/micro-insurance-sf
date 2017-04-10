"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var GoogleChartComponent = (function () {
    function GoogleChartComponent() {
        console.log('Here is GoogleChartComponent');
    }
    GoogleChartComponent.prototype.getGoogle = function () {
        return google;
    };
    GoogleChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit');
        if (!GoogleChartComponent.googleLoaded) {
            GoogleChartComponent.googleLoaded = true;
            google.charts.load('current', { packages: ['corechart', 'line'] });
            google.charts.load('current', { packages: ['corechart', 'pie'] });
        }
        google.charts.setOnLoadCallback(function () { return _this.drawGraph(); });
    };
    GoogleChartComponent.prototype.drawGraph = function () {
        console.log('DrawGraph base class!!!! ');
    };
    GoogleChartComponent.prototype.createLineChart = function (element) {
        return new google.visualization.LineChart(element);
    };
    GoogleChartComponent.prototype.createPieChart = function (element) {
        return new google.visualization.PieChart(element);
    };
    GoogleChartComponent.prototype.createDataTable = function (array) {
        return new google.visualization.arrayToDataTable(array);
    };
    GoogleChartComponent = __decorate([
        core_1.Component({
            selector: 'chart'
        }), 
        __metadata('design:paramtypes', [])
    ], GoogleChartComponent);
    return GoogleChartComponent;
}());
exports.GoogleChartComponent = GoogleChartComponent;
//# sourceMappingURL=googlechart.component.js.map