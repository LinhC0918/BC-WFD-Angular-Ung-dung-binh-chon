import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
    output: number;
    firstNumber: number;
    secondNumber: number;
    operator: '+';

    constructor() {
    }

    onFirstChange(value) {
        this.firstNumber = Number(value);
    }

    onSecondChange(value) {
        this.secondNumber = Number(value);
    }

    onSelectChange(value) {
        this.operator = value;
    }

    calculate() {
        if (this.operator === '+') {
            this.output = this.firstNumber + this.secondNumber;
        } else if (this.operator === '-') {
            this.output = this.firstNumber - this.secondNumber;
        } else if (this.operator === '*') {
            this.output = this.firstNumber * this.secondNumber;
        } else {
            this.output = this.firstNumber / this.secondNumber;
        }
        // switch (this.operator) {
        //     case '+':
        //         this.output = this.firstNumber + this.secondNumber;
        //         break;
        //     case '-' :
        //         this.output = this.firstNumber - this.secondNumber;
        //         break;
        //     case '*':
        //         this.output = this.firstNumber * this.secondNumber;
        //         break;
        //     case '/' :
        //         this.output = this.firstNumber / this.secondNumber;
        //         break;
        // }
    }

    ngOnInit() {
    }

}
