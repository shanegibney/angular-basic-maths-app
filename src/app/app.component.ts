import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<div class="container">....</div>`,
  // styleUrls: ['./app.component.css']
  styles: [
  `
  .settings {
    border-radius: 8px;
    background: lightgrey;
    border: 2px solid grey;
  }
  `
  ]
})
export class AppComponent {
  increment: number = 0;
  num1: number = 1;
  num2: number = 10;
  num : number;
  result: boolean = null;
  addmin1: number = 1;
  addmax1: number = 10;
  addmin2: number = 1;
  addmax2: number = 10;
  submin1: number = 1;
  submax1: number = 10;
  submin2: number = 1;
  submax2: number = 10;
  multmin1: number = 1;
  multmax1: number = 10;
  multmin2: number = 1;
  multmax2: number = 10;
  divmin1: number = 1;
  divmax1: number = 10;
  divmin2: number = 1;
  divmax2: number = 10;
  addtotal: number = 0;
  subtotal: number = 0;
  multtotal: number = 0;
  divtotal: number = 0;
  answer: number;
  score: number = 0;
  addscore: number = 0;
  subscore: number = 0;
  multscore: number = 0;
  divscore: number = 0;
  total: number = 0;
  operation: boolean[];
  show: boolean = true;
  addition: boolean = true;
  subtraction: boolean = false;
  multiplication: boolean = false;
  division: boolean = false;
  op: string;

  constructor() {
    this.makeadd();
    this.test();
  }

  test(){
    console.log("one");
  }

  makeadd(){
    if(!this.addition && !this.subtraction && !this.multiplication && !this.division){
      this.addition = true;
      alert("At least one operator must be chosen. Setting addition to on.");
    }

    console.log("makeadd()" + ": this.addition = " + this.addition);
    if(this.addition){
      this.additionproblem();
      console.log("@makeadd: num1 = " + this.num1 + " num2 = " + this.num2 + ", op = " + this.op);
    } else {
      this.makesub();
    }
  }

  makesub(){
    console.log("makesub(): " + ": this.subtraction = " + this.subtraction);
    if(this.subtraction){
      this.subtractionproblem();
      console.log("should stop here");
      console.log("@makesub: num1 = " + this.num1 + " num2 = " + this.num2 + ", op = " + this.op);
    } else {
      console.log("here!");
      this.makemult();
    }
  }

  makemult(){
    console.log("makemult()" + ": this.multiplication = " + this.multiplication);
    if(this.multiplication){
      this.multiplicationproblem();
      console.log("@makediv: num1 = " + this.num1 + " num2 = " + this.num2 + ", op = " + this.op);
    } else {
      this.makediv();
    }
  }

   makediv(){
     console.log("makediv()" + ": this.division = " + this.division);
    if(this.division){
      this.divisionproblem();
      console.log("@makemult: num1 = " + this.num1 + " num2 = " + this.num2 + ", op = " + this.op);
    } else {
      this.makeadd();
    }
  }

additionproblem(){
 this.result = false;
 this.op = "+";
 this.num1 = this.generate(this.addmin1, this.addmax1);
 this.num2 = this.generate(this.addmin2, this.addmax2);
 console.log("additionproblem(): this.num1 = " + this.num1 + ", this.num2 = " + this.num2 + ", op = " + this.op);
}

subtractionproblem(){
this.result = false;
this.op = "-";
this.num1 = this.generate(this.submin1, this.submax1);
this.num2 = this.generate(this.submin2, this.submax2);
console.log("subtractionproblem(): this.num1 = " + this.num1 + ", this.num2 = " + this.num2 + ", op = " + this.op);
}

multiplicationproblem(){
this.op = "*";
this.num1 = this.generate(this.multmin1, this.multmax1);
this.num2 = this.generate(this.multmin2, this.multmax2);
console.log("multiplicationproblem(): this.num1 = " + this.num1 + ", this.num2 = " + this.num2 + ", op = " + this.op);
}

divisionproblem(){
this.op = "/";
this.num1 = this.generate(this.divmin1, this.divmax1);
this.num2 = this.generate(this.divmin2, this.divmax2);
console.log("divisionproblem(): this.num1 = " + this.num1 + ", this.num2 = " + this.num2 + ", op = " + this.op);
}

generate(min,max){
  max = +max;
  min = +min;
  return Math.round(Math.random() * (max -  min) + min);
}

check(){
  if(this.op == "/"){
    console.log("check(/): this.num1 = " +  this.num1 + ", this.num2 = " + this.num2 + ", op = " + this.op);
    if(this.answer == this.num1 / this.num2){
      this.result = true;
      this.score++;
      this.divscore++;
    } else {
      this.result = false;
    }
    this.answer = null;
    this.divtotal++;
    this.total++;
    this.makeadd();
    return;
  }

  if(this.op == "*"){
    console.log("check(*): this.num1 = " +  this.num1 + ", this.num2 = " + this.num2 + ", op = " + this.op);
    if(this.answer == this.num1 * this.num2){
      this.result = true;
      this.score++;
      this.multscore++;
    } else {
      this.result = false;
    }
    this.answer = null;
    this.multtotal++;
    this.total++;
    this.makediv();
    return;
  }

  if(this.op == "-"){
    console.log("check(-): this.num1 = " +  this.num1 + ", this.num2 = " + this.num2 + ", op = " + this.op);
    if(this.answer == this.num1 - this.num2){
      this.result = true;
      console.log("minus this.result = " + this.result);
      this.score++;
      this.subscore++;
    } else {
      this.result = false;
    }
    this.answer = null;
    this.subtotal++;
    this.total++;
    console.log("there!");
    this.makemult();
    return;
  }

  if(this.op == "+"){
    console.log("check(+): this.num1 = " +  this.num1 + ", this.num2 = " + this.num2 + ", op = " + this.op);
    if(this.answer == this.num1 + this.num2){
      this.result = true;
      console.log("minus this.result = " + this.result);
      this.score++;
      this.addscore++;
    } else {
      this.result = false;
    }
    this.answer = null;
    this.addtotal++;
    this.total++;
    this.makesub();
    return;
  }
  console.log("Do I get called?");
 }

  toggle(){
    this.show =! this.show;
  }
}
