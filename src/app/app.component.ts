import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<div class="container">
    <div class="row">
      <!-- <h2>Guess the Number!</h2>
      <p class="well lead">Guess the computer generated random number between 1 and 1000.</p>
      <label>Your Guess: </label>
      <input type="number" [value]="guess" (input)="guess = $event.target.value"/>
      <button (click)="verifyGuess()" class="btn btn-primary btn-sm">Verify</button>
      <button (click)="initializeGame()" class="btn btn-warning btn-sm">Restart</button>
      <div>
        <p *ngIf="deviation<0" class="alert alert-warning">Your guess is higher.</p>
        <p *ngIf="deviation>0" class="alert alert-warning">Your guess is lower.</p>
        <p *ngIf="deviation===0" class="alert alert-success">Yes! That's it.</p>

      </div>
      <p class="text-info">No of guesses:
        <span class="badge">{{noOfTries}}</span>
      </p> -->
      <h2>You do the Math!...</h2>
      <div class="col-md-6" style="text-align:right;">
        <!-- Checkbox value: <input type="checkbox" [value]="operation" (input)="operation = $event.target.value"/> -->
        <span class="question"><font size="10">{{num1}} + {{num2}} = </font></span>
      </div>
      <div class="col-md-3" style="vertical-align:center;">
         <input class="form-control form-rounded" type="number" style="width:100px; height:50px;" [value]="answer" (input)="answer = $event.target.value" />
      </div>
      <div class="co-md-3">

      </div>
    </div>
    <div class="row">
      <div class="col-md-12" style="text-align:center;" >
        <button (click)="doCalculate()" class="btn btn-warning btn-sm">Submit</button>
        <button (click)="init()" class="btn btn-warning btn-sm">Restart</button>
        <!-- <p *ngIf="result===true" class="alert alert-warning">That is the correct answer.</p> -->
        <p *ngIf="result===false" class="alert alert-warning"><i class="fa wrong fa-times fa-3x" aria-hidden="true"></i> <font size="6">Have another go!</font></p>
        <p *ngIf="result===true" class="alert alert-warning"><i class="fa correct fa-check fa-3x" aria-hidden="true"></i> Well done!</p>
        <span *ngIf="total!=0" class="question"><font size="10">{{ score }} correct out of {{ total }}</font></span>
        <!-- <p>Checked value is {{ operation }}</p> -->
      </div>
    </div>
  </div>
  `,
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
  operation: boolean;

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
    this.operation = null;
  }

  verifyGuess() {
    this.deviation = this.original - this.guess;
    this.noOfTries = this.noOfTries + 1;
  }

init(){
  this.total = 0;
  this.score = 0;
  this.answer = null;
  this.result = null;
  this.operation = null;
  this.num1 = Math.floor((Math.random() * 10) + 1);
  this.num2 = Math.floor((Math.random() * 10) + 1);
}

  doCalculate(){
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
    console.log(this.operation);
  }
}
