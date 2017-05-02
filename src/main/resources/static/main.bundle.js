webpackJsonp([1,4],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__init_trades__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeService; });
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







var TradeService = (function (_super) {
    __extends(TradeService, _super);
    function TradeService(_http) {
        _super.call(this);
        this._http = _http;
        this._url = '/api/trades';
        console.log('TradeService Initialized...');
        this.load();
    }
    TradeService.prototype.addTrade = function (newTrade) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'applications/json; charset=utf-8');
        this._http.post(this._url, newTrade, headers)
            .subscribe(function () { }, function (err) { return console.log(err); });
    };
    TradeService.prototype.getTrades = function () {
        return this._http.get(this._url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TradeService.prototype.getNotifications = function () {
        var trades = JSON.parse(localStorage.getItem('trades'));
        return trades;
    };
    TradeService.prototype.deleteTrade = function (tradeText) {
        var trades = JSON.parse(localStorage.getItem('trades'));
        for (var i = 0; i < trades.length; i++) {
            if (trades[i].text === tradeText) {
                trades.splice(i, 1);
            }
        }
        localStorage.setItem('trades', JSON.stringify(trades));
    };
    TradeService.prototype.updateTrade = function (oldText, newText) {
        var trades = JSON.parse(localStorage.getItem('trades'));
        for (var i = 0; i < trades.length; i++) {
            if (trades[i].text === oldText) {
                trades[i].text = newText;
            }
        }
        localStorage.setItem('trades', JSON.stringify(trades));
    };
    TradeService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    TradeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], TradeService);
    return TradeService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__init_trades__["a" /* Init */]));
//# sourceMappingURL=/home/oegonzal/Documents/workspace-sts-3.8.4.RELEASE/trade-track-data3/src/trade.service.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trade_service__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TradesComponent = (function () {
    function TradesComponent(_tradeService) {
        this._tradeService = _tradeService;
        this.appState = 'default';
    }
    TradesComponent.prototype.ngOnInit = function () {
        this.notifications = this._tradeService.getNotifications();
        this.fieldIndex = 1;
        this.getTrades();
    };
    TradesComponent.prototype.getTrades = function () {
        var _this = this;
        this._tradeService.getTrades()
            .subscribe(function (trades) { return _this.trades = trades; }, function (error) { return _this.errorMessage = error; });
    };
    TradesComponent.prototype.addTrade = function () {
        var newTrade = {
            dateCreated: +new Date(),
            stockSymbol: this.stockSymbol,
            initialPrice: this.initialPrice,
            predictionPrice: this.predictionPrice,
            stopPrice: this.stopPrice,
            predictionDate: new Date(this.predictionDate).getTime(),
            tradeStatus: 'Pending'
        };
        console.log('New Trade is: ' + JSON.stringify(newTrade));
        console.log(newTrade.dateCreated);
        this.trades.push(newTrade);
        this._tradeService.addTrade(newTrade);
    };
    TradesComponent.prototype.deleteTrade = function (tradeText) {
        for (var i = 0; i < this.trades.length; i++) {
            if (this.trades[i].text === tradeText) {
                this.trades.splice(i, 1);
            }
        }
        this._tradeService.deleteTrade(tradeText);
    };
    TradesComponent.prototype.editTrade = function (trade) {
        this.appState = 'edit';
        this.oldText = trade.text;
        this.text = trade.text;
    };
    TradesComponent.prototype.updateTrade = function () {
        for (var i = 0; i < this.trades.length; i++) {
            if (this.trades[i].text === this.oldText) {
                this.trades[i].text = this.text;
            }
        }
        this._tradeService.updateTrade(this.oldText, this.text);
    };
    TradesComponent.prototype.nextField = function () {
        this.fieldIndex = Math.min(5, this.fieldIndex + 1);
    };
    TradesComponent.prototype.prevField = function () {
        this.fieldIndex = Math.max(1, this.fieldIndex - 1);
    };
    TradesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-trades',
            template: __webpack_require__(616),
            styles: [__webpack_require__(613)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__trade_service__["a" /* TradeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__trade_service__["a" /* TradeService */]) === 'function' && _a) || Object])
    ], TradesComponent);
    return TradesComponent;
    var _a;
}());
//# sourceMappingURL=/home/oegonzal/Documents/workspace-sts-3.8.4.RELEASE/trade-track-data3/src/trades.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 346;


/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(455);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/oegonzal/Documents/workspace-sts-3.8.4.RELEASE/trade-track-data3/src/main.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trades_trades_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trade_service__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!!!!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(615),
            styles: [__webpack_require__(612)],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_1__trades_trades_component__["a" /* TradesComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__trade_service__["a" /* TradeService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/oegonzal/Documents/workspace-sts-3.8.4.RELEASE/trade-track-data3/src/app.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trades_trades_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tradesls_tradesls_component__ = __webpack_require__(457);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__trades_trades_component__["a" /* TradesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__tradesls_tradesls_component__["a" /* TradeslsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/oegonzal/Documents/workspace-sts-3.8.4.RELEASE/trade-track-data3/src/app.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Init; });
var Init = (function () {
    function Init() {
    }
    Init.prototype.load = function () {
        console.log(localStorage.getItem('trades'));
        if (localStorage.getItem('trades') === null || localStorage.getItem('trades') === 'undefined') {
            console.log('No Trades found... Creating...');
            var trades = [
                {
                    text: 'Gold is down Today - Bloomberg'
                },
                {
                    text: 'Rising Activity in JNUG'
                },
                {
                    text: 'SPY showing high volatility'
                }
            ];
            localStorage.setItem('trades', JSON.stringify(trades));
            return;
        }
        else {
            console.log('Found trades....');
        }
    };
    return Init;
}());
//# sourceMappingURL=/home/oegonzal/Documents/workspace-sts-3.8.4.RELEASE/trade-track-data3/src/init-trades.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeslsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TradeslsComponent = (function () {
    function TradeslsComponent() {
    }
    TradeslsComponent.prototype.ngOnInit = function () {
    };
    TradeslsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-tradesls',
            template: __webpack_require__(617),
            styles: [__webpack_require__(614)]
        }), 
        __metadata('design:paramtypes', [])
    ], TradeslsComponent);
    return TradeslsComponent;
}());
//# sourceMappingURL=/home/oegonzal/Documents/workspace-sts-3.8.4.RELEASE/trade-track-data3/src/tradesls.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/oegonzal/Documents/workspace-sts-3.8.4.RELEASE/trade-track-data3/src/environment.js.map

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 613:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 614:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 615:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">Trade Track</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav\">\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n<div class=\"container\">\n  <div class=\"row\">\n    <app-trades></app-trades>\n  </div>\n</div>"

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

module.exports = "\n<form (submit)=\"addTrade()\">\n\n  <div *ngIf=\"fieldIndex == 1\">\n    <h3>Stock Symbol: </h3>\n    <input [(ngModel)]=\"stockSymbol\" name=\"stockSymbol\"\n         class=\"form-control col-sm\" style=\"width: 70%; float:left;\" type=\"text\">\n  </div>\n\n  <div *ngIf=\"fieldIndex == 2\">\n    <h3>Initial Price: </h3>\n    <input [(ngModel)]=\"initialPrice\" name=\"initialPrice\"\n         class=\"form-control col-sm\" style=\"width: 70%; float:left;\" type=\"text\">\n  </div>\n  \n  <div *ngIf=\"fieldIndex == 3\">\n    <h3>Prediction Price: </h3>\n    <input [(ngModel)]=\"predictionPrice\" name=\"predictionPrice\"\n         class=\"form-control col-sm\" style=\"width: 70%; float:left;\" type=\"text\">\n  </div>\n  \n  <div *ngIf=\"fieldIndex == 4\">\n    <h3>Stop Price: </h3>\n    <input [(ngModel)]=\"stopPrice\" name=\"stopPrice\"\n         class=\"form-control col-sm\" style=\"width: 70%; float:left;\" type=\"text\">\n  </div>\n\n  <div *ngIf=\"fieldIndex == 5\">\n    <h3>Prediction Date (MM-dd-yyyy): </h3>\n    <input [(ngModel)]=\"predictionDate\" name=\"predictionDate\"\n         class=\"form-control col-sm\" style=\"width: 70%; float:left;\" type=\"text\">\n  </div>\n\n</form>\n\n<button type=\"button\" *ngIf=\"fieldIndex == 5\" (click)=\"addTrade()\" \n        style=\"float: left; margin-left: 15px; border-radius: 3px;\" class=\"btn btn-info\">Submit</button>\n\n<button type=\"button\" *ngIf=\"fieldIndex != 5\" (click)=\"nextField()\" \n        style=\"float: left; margin-left: 15px; border-radius: 3px;\" class=\"btn btn-info\">Next</button>\n\n<button type=\"button\" *ngIf=\"fieldIndex != 1\" (click)=\"prevField()\" \n        style=\"float: left; margin-left: 15px; border-radius: 3px;\" class=\"btn btn-warning\">Prev</button>\n\n<div style=\"clear: both\"></div>\n\n<h3> Notifications: </h3>\n<ul  class=\"list-group\">\n  <li *ngFor=\"let notification of notifications\"  class=\"list-group-item\">\n    <span (click)=\"editTrade(notification)\"> {{notification.text}} </span>\n    <button (click)=\"deleteTrade(notification.text)\" class=\"btn btn-danger btn-xs\" \n            style=\"border-radius: 5px; margin-left: 8px;\">x</button>\n  </li>\n</ul>\n\n<div class=\"panel panel-default\">\n  <!-- Default panel contents -->\n  <div class=\"panel-heading\">Current Results for trades: </div>\n  <div class=\"panel-body\">\n    <p>Statistics...</p>\n  </div>\n\n  <!-- Table -->\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Symbol</th>\n        <th>Starting Price</th>\n        <th>Prediction Price</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let trade of trades\">\n        <td>{{ trade.stockSymbol }}</td>\n        <td>{{ trade.initialPrice }}</td>\n        <td>{{ trade.predictionPrice }}</td>\n      </tr>\n    </tbody>\n\n  </table>\n</div>"

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = "<p>\n  tradesls works!\n</p>\n"

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(347);


/***/ })

},[641]);
//# sourceMappingURL=main.bundle.map