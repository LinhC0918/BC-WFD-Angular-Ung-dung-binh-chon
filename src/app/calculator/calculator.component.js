"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent() {
    }
    CalculatorComponent.prototype.onFirstChange = function (value) {
        this.firstNumber = Number(value);
    };
    CalculatorComponent.prototype.onSecondChange = function (value) {
        this.secondNumber = Number(value);
    };
    CalculatorComponent.prototype.onSelectChange = function (value) {
        this.operator = value;
    };
    CalculatorComponent.prototype.calculate = function () {
        switch (this.operator) {
            case '+':
                this.output = this.firstNumber + this.secondNumber;
                break;
            case '-':
                this.output = this.firstNumber - this.secondNumber;
                break;
            case '*':
                this.output = this.firstNumber * this.secondNumber;
                break;
            case '/':
                this.output = this.firstNumber / this.secondNumber;
                break;
        }
    };
    CalculatorComponent.prototype.ngOnInit = function () {
    };
    CalculatorComponent = __decorate([
        core_1.Component({
            selector: 'app-calculator',
            templateUrl: './calculator.component.html',
            styleUrls: ['./calculator.component.css']
        })
    ], CalculatorComponent);
    return CalculatorComponent;
}());
exports.CalculatorComponent = CalculatorComponent;
