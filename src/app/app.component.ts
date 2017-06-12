import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<div class="container">....</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app works!';
  deviation: number;
  noOfTries: number;
  original: number;
  guess: number;
  num1: number;
  num2: number;
  result: boolean;
  answer: number;
  score: number;
  total: number;
  operation: boolean[];
  index: number = 0;
  show: boolean;
  addition: boolean = true;
  subtraction: boolean = false;
  multiplication: boolean = false;
  division: boolean = false;
  selectedOperations: boolean[];
  num: number = 1;
  op: string[] = ["+", "-", "*", "/"];
  symbol: string;
  setAdd: boolean;
  ignore: boolean = true;

  constructor() {
    console.log("constructor()");
    this.initialize();
    // this.refresh();
  }

  initialize() {
    console.log("initialize()");
    this.num1 = Math.floor((Math.random() * 10) + 1);
    this.num2 = Math.floor((Math.random() * 10) + 1);
    this.result = null;
    this.answer = null;
    this.score = 0;
    this.total = 0;
    this.operation = [];
    this.selectedOperations = [];
    this.addition = true;
    this.subtraction = false;
    this.multiplication = false;
    this.division = false;
    this.show = false;
    this.refresh();
  }

  toggle(){
    console.log("toggle()");
    // this.show =! this.show;
    console.log("this.addition=" + this.addition);
    console.log("this.subtraction=" + this.subtraction);
    console.log("this.multiplication=" + this.multiplication);
    console.log("this.division=" + this.division);
    this.operation = [this.addition, this.subtraction, this.multiplication, this.division];
    console.log("---------");
    console.log("this.operation[0]=" + this.operation[0]);
    console.log("this.operation[1]=" + this.operation[1]);
    console.log("this.operation[2]=" + this.operation[2]);
    console.log("this.operation[3]=" + this.operation[3]);
    for(var i=0; i<this.operation.length; i++){
      console.log("operation[" + i + "]=" + this.operation[i]);
    }
    // if(!this.operation[0] && !this.operation[1] && !this.operation[2] && !this.operation[3]){
    if(!this.addition && !this.subtraction && !this.multiplication && !this.division){
      console.log("I am before alert");
      alert('You must choose at least one operator. Setting addition to on.');
      console.log("I am after alert");
      this.addition = true;
      // this.operation[0] = true;
      // this.setAdd = false;
      console.log("In if(setAdd)");
    }
    this.refresh();
  }

    // refresh() the question but keep scoring
    refresh(){
      console.log("refresh()");
      this.answer = null;
      this.result = null;
      this.num1 = Math.floor((Math.random() * 10) + 1);
      this.num2 = Math.floor((Math.random() * 10) + 1);
      // this.getOperator();
    }

  // init() is called on restart
  init(){
    console.log("init()");
    this.total = 0;
    this.score = 0;
    this.answer = null;
    this.result = null;
    // this.num1 = Math.floor((Math.random() * 10) + 1);
    // this.num2 = Math.floor((Math.random() * 10) + 1);
    this.refresh();
  }

  doCalculate(){
    console.log("doCalculate()");
    this.operation = [this.addition, this.subtraction, this.multiplication, this.division];
    console.log("-------------------");
    console.log("index = " + this.index);
    console.log("this.operation[0] is " + this.operation[0]);
    console.log("this.operation[1] is " + this.operation[1]);
    console.log("this.operation[2] is " + this.operation[2]);
    console.log("this.operation[3] is " + this.operation[3]);

    if(this.index==0 && this.operation[this.index]){
      if(this.answer == this.num1 + this.num2){
          this.result = true;
          this.score = this.score + 1;
        } else {
          this.result = false;
        }
    }

    if(this.index==1 && this.operation[this.index]){
      if(this.answer == this.num1 - this.num2){
          this.result = true;
          this.score = this.score + 1;
        } else {
          this.result = false;
        }
    }

    if(this.index==2 && this.operation[this.index]){
      if(this.answer == this.num1 * this.num2){
          this.result = true;
          this.score = this.score + 1;
        } else {
          this.result = false;
        }
    }

    if(this.index==3 && this.operation[this.index]){
      if(this.answer == this.num1 / this.num2){
          this.result = true;
          this.score = this.score + 1;
        } else {
          this.result = false;
        }
    }

    this.total = this.total + 1;
    this.answer = null;
    this.num1 = Math.floor((Math.random() * 10) + 1);
    this.num2 = Math.floor((Math.random() * 10) + 1);
    // for(var i=0; i<this.op.length; i++){
    //   console.log("In the for loop " + this.op[i]);
    // }
    this.ignore = true;
    this.getOperator();
  }

  getOperator() {
    console.log("getOperator()");
    if(this.ignore){
    this.index = Math.floor((Math.random() * 4));
}
    //prevent a negative answer with subtraction
    if(this.index == 1 && this.num1 < this.num2){
      this.num1 = Math.floor((Math.random() * 10) + 1);
      this.num2 = Math.floor((Math.random() * 10) + 1);
      this.getOperator();
    }

    console.log(this.num1 + " % " + this.num2 + " = " + this.num1 % this.num2);
    //prevent a decimal, 0 or 1 answer with division
    if(this.index == 3 && (this.num1 % this.num2 != 0) ){
      console.log("i am in decimal prevent code " + this.num1 + "/" + this.num2 + " = " + this.num1 / this.num2)
      if((this.num1 / this.num2 == 1) || (this.num2 == 1.0)){
        // this.num1 = Math.floor((Math.random() * 50) + 1);
        // this.num2 = Math.floor((Math.random() * 50) + 1);
        this.ignore = false;
      this.getOperator;
      }

  }

    console.log("index in getOperator = " + this.index);
    console.log("I am just inside the getOperator() this.op[" + this.index + "]" + " = " + this.op[this.index] + ", this.operation[" + this.index + "] = " + this.operation[this.index]);
    if(this.operation[this.index]){
      console.log("I am in the if, returning this.index = " + this.index);
      return this.index;
    } else {
      if(!this.operation[0] && !this.operation[1] && !this.operation[2] && !this.operation[3]){
        console.log("None are true");
        this.refresh();
      }
      console.log("I am in the else");
      this.ignore = true;
      this.getOperator();
    }
  }
}
