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
  show: boolean;
  addition: boolean = true;
  subtraction: boolean = false;
  multiplication: boolean = false;
  division: boolean = false;
  selectedOperations: boolean[];
  num: number;
  op: string[] = ["+", "-", "*", "/"];
  symbol: string;

  constructor() {
    this.initializeGame();
  }

  initializeGame() {
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
  }

  // verifySettings() {
  //   this.deviation = this.original - this.guess;
  //   this.noOfTries = this.noOfTries + 1;
  // }

  toggle(){
    this.show =! this.show;
    this.operation = [this.addition, this.subtraction, this.multiplication, this.division];
    for(var i=0; i<this.operation.length; i++){
      console.log("settings " + this.operation[i]);
    }
    if(!this.operation[0] && !this.operation[1] && !this.operation[2] && !this.operation[3]){
      alert('You must choose at least one operator.');
    }
    this.doCalculate();
  }
    // console.log("blah bee blah bloo!");
    // console.log("checked result is " + this.operation);


  init(){
    this.total = 0;
    this.score = 0;
    this.answer = null;
    this.result = null;
    // console.log(this.operation[0]);
    this.num1 = Math.floor((Math.random() * 10) + 1);
    this.num2 = Math.floor((Math.random() * 10) + 1);
  }

  doCalculate(){
    this.operation = [this.addition, this.subtraction, this.multiplication, this.division];
    if(this.answer == this.num1 + this.num2){
      this.result = true;
      this.score = this.score + 1;
    } else {
      this.result = false;
    }
    this.total = this.total + 1;
    this.answer = null;
    this.num1 = Math.floor((Math.random() * 10) + 1);
    this.num2 = Math.floor((Math.random() * 10) + 1);
    // console.log(this.operation);
    // console.log("blah " + this.getOperator());
    for(var i=0; i<this.op.length; i++){
      console.log("In the for loop " + this.op[i]);
    }
  }

  getOperator() {
    this.num = Math.floor((Math.random() * 4) + 1);
    console.log("HelloOne" + this.num);
    if(this.operation[this.num]){
      console.log("HelloTwo");
      this.symbol = this.op[this.num-1];
      return this.symbol;
    } else {
      console.log("HelloThree");
      this.getOperator();
    }
    // console.log("random num is " + this.num);

  }
}
