webpackJsonp([2,4],{

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 140;


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(156);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        this.addition = true;
        this.subtraction = false;
        this.multiplication = false;
        this.division = false;
        this.op = ["+", "-", "*", "/"];
        this.initializeGame();
    }
    AppComponent.prototype.initializeGame = function () {
        this.noOfTries = 0;
        this.original = Math.floor((Math.random() * 10) + 1);
        this.num1 = Math.floor((Math.random() * 10) + 1);
        this.num2 = Math.floor((Math.random() * 10) + 1);
        this.result = null;
        this.answer = null;
        this.guess = null;
        this.deviation = null;
        this.score = 0;
        this.total = 0;
        this.operation = [true, false, false, false];
        this.selectedOperations = [];
        this.addition = true;
        this.subtraction = false;
        this.multiplication = false;
        this.division = false;
        this.show = false;
        this.num = null;
        this.operation = [true, false, false, false];
    };
    // verifySettings() {
    //   this.deviation = this.original - this.guess;
    //   this.noOfTries = this.noOfTries + 1;
    // }
    AppComponent.prototype.toggle = function () {
        this.show = !this.show;
        this.operation = [this.addition, this.subtraction, this.multiplication, this.division];
        for (var i = 0; i < this.operation.length; i++) {
            console.log("settings " + this.operation[i]);
        }
        if (!this.operation[0] && !this.operation[1] && !this.operation[2] && !this.operation[3]) {
            alert('You must choose at least one operator.');
        }
        this.doCalculate();
    };
    // console.log("blah bee blah bloo!");
    // console.log("checked result is " + this.operation);
    AppComponent.prototype.init = function () {
        this.total = 0;
        this.score = 0;
        this.answer = null;
        this.result = null;
        // console.log(this.operation[0]);
        this.num1 = Math.floor((Math.random() * 10) + 1);
        this.num2 = Math.floor((Math.random() * 10) + 1);
    };
    AppComponent.prototype.doCalculate = function () {
        this.operation = [this.addition, this.subtraction, this.multiplication, this.division];
        if (this.answer == this.num1 + this.num2) {
            this.result = true;
            this.score = this.score + 1;
        }
        else {
            this.result = false;
        }
        this.total = this.total + 1;
        this.answer = null;
        this.num1 = Math.floor((Math.random() * 10) + 1);
        this.num2 = Math.floor((Math.random() * 10) + 1);
        // console.log(this.operation);
        // console.log("blah " + this.getOperator());
        for (var i = 0; i < this.op.length; i++) {
            console.log("In the for loop " + this.op[i]);
        }
    };
    AppComponent.prototype.getOperator = function () {
        this.num = Math.floor((Math.random() * 4) + 1);
        console.log("HelloOne" + this.num);
        if (this.operation[this.num]) {
            console.log("HelloTwo");
            this.symbol = this.op[this.num - 1];
            return this.symbol;
        }
        else {
            console.log("HelloThree");
            this.getOperator();
        }
        // console.log("random num is " + this.num);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(219),
        // template: `<div class="container">....</div>`,
        styles: [__webpack_require__(212)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_new_component_my_new_component_component__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { AlertModule } from 'ng2-bootstrap';







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__my_new_component_my_new_component_component__["a" /* MyNewComponentComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__my_new_component_my_new_component_component__["a" /* MyNewComponentComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyNewComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyNewComponentComponent = (function () {
    function MyNewComponentComponent() {
    }
    MyNewComponentComponent.prototype.ngOnInit = function () {
    };
    return MyNewComponentComponent;
}());
MyNewComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-my-new-component',
        template: __webpack_require__(220),
        styles: [__webpack_require__(213)]
    }),
    __metadata("design:paramtypes", [])
], MyNewComponentComponent);

//# sourceMappingURL=my-new-component.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, ".form-rounded {\nborder-radius: 2rem;\n}\n.question {\n  /*text-align: right;*/\n  margin-right: 0;\n  font-size: 20;\n}\ninput {\n\n}\n\ndiv {\n/*display:inline-block;\nmargin-left:5px;\nheight:100px;\nwidth:100px;*/\n/*border:2px solid black;*/\n/*border-radius:100%*/\n}\n\n.correct {\n  color: green;\n}\n\n.wrong {\n  color: red;\n}\n.details {\n  text-align: center;\n}\n\ninput[type=\"text\"]\n{\n    font-size:48px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <!-- <h2>Guess the Number!</h2>\n    <p class=\"well lead\">Guess the computer generated random number between 1 and 1000.</p>\n    <label>Your Guess: </label>\n    <input type=\"number\" [value]=\"guess\" (input)=\"guess = $event.target.value\"/>\n    <button (click)=\"verifyGuess()\" class=\"btn btn-primary btn-sm\">Verify</button>\n    <button (click)=\"initializeGame()\" class=\"btn btn-warning btn-sm\">Restart</button>\n    <div>\n      <p *ngIf=\"deviation<0\" class=\"alert alert-warning\">Your guess is higher.</p>\n      <p *ngIf=\"deviation>0\" class=\"alert alert-warning\">Your guess is lower.</p>\n      <p *ngIf=\"deviation===0\" class=\"alert alert-success\">Yes! That's it.</p>\n\n    </div>\n    <p class=\"text-info\">No of guesses:\n      <span class=\"badge\">{{noOfTries}}</span>\n    </p> -->\n    <h2>You do the Math!...</h2>\n    <p><button (click)=\"toggle()\" class=\"btn btn-warning btn-sm\">Settings</button></p>\n    <div *ngIf=\"show===true\">\n      <p>need checkboxes here!</p>\n      <!-- <input class=\"form-control form-rounded\" type=\"checkbox\" [value]=\"operation\" (input)=\"operation = $event.target.value\" /> Addition -->\n      <p><input [(ngModel)]=\"addition\" type=\"checkbox\" /> <i class=\"fa fa-plus\"></i> addition</p>\n      <p><input [(ngModel)]=\"subtraction\" type=\"checkbox\" /> <i class=\"fa fa-minus\"></i> subtraction</p>\n      <p><input [(ngModel)]=\"multiplication\" type=\"checkbox\" /> <i class=\"fa fa-times\"></i> multiplication</p>\n      <p><input [(ngModel)]=\"division\" type=\"checkbox\" /> <strong>&#247;</strong> division</p>\n\n      <p><button (click)=\"toggle()\" class=\"btn btn-warning btn-sm\">Submit</button></p>\n    </div>\n    <div class=\"col-md-6\" style=\"text-align:right;\">\n      <!-- Checkbox value: <input type=\"checkbox\" [value]=\"operation\" (input)=\"operation = $event.target.value\"/> -->\n      <span class=\"question\"><font size=\"10\">{{num1}} + {{num2}} = </font></span>\n    </div>\n    <div class=\"col-md-3\" style=\"vertical-align:center;\">\n      <input class=\"form-control form-rounded\" type=\"number\" style=\"width:100px; height:50px;\" [value]=\"answer\" (input)=\"answer = $event.target.value\" />\n    </div>\n    <div class=\"co-md-3\">\n\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\" style=\"text-align:center;\">\n      <button (click)=\"doCalculate()\" class=\"btn btn-warning btn-sm\">Submit</button>\n      <button (click)=\"init()\" class=\"btn btn-warning btn-sm\">Restart</button>\n\n      <!-- <p *ngIf=\"result===true\" class=\"alert alert-warning\">That is the correct answer.</p> -->\n      <p *ngIf=\"result===false\" class=\"alert alert-warning\"><i class=\"fa wrong fa-times fa-3x\" aria-hidden=\"true\"></i>\n        <font size=\"6\">Have another go!</font>\n      </p>\n      <p *ngIf=\"result===true\" class=\"alert alert-warning\"><i class=\"fa correct fa-check fa-3x\" aria-hidden=\"true\"></i> Well done!</p>\n      <span *ngIf=\"total!=0\" class=\"question\"><font size=\"10\">{{ score }} correct out of {{ total }}</font></span>\n      <!-- <p>Checked value is {{ operation }}</p> -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "<p>\n  my-new-component works!.\n</p>\n"

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(141);


/***/ })

},[254]);
//# sourceMappingURL=main.bundle.js.map