import { Component, Directive, OnInit, ElementRef, Renderer, Input  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as d3 from 'd3';
import { D3graphComponent } from './d3graph/d3graph.component';
import * as FileSaver from 'file-saver';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  num1: number = 1;
  num2: number = 10;
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
  addwrong: number = 0;
  subwrong: number = 0;
  multwrong: number = 0;
  divwrong: number = 0;
  answer: number;
  solution: number;
  score: number = 0;
  addscore: number = 0;
  subscore: number = 0;
  multscore: number = 0;
  divscore: number = 0;
  total: number = 0;
  addpercent: number;
  subpercent: number;
  multpercent: number;
  divpercent: number;
  operation: boolean[];
  problems: { num1: number, op: string, num2: number, answer: number, result: boolean, solution: number}[] = [];
  show: boolean = false;
  addition: boolean = true;
  subtraction: boolean = true;
  multiplication: boolean = true;
  division: boolean = true;
  op: string;
  negativeanswers: boolean = true;
  // details: {}[]= [{name: 'John', addtotal: 'this.addtotal}];
  values: {name: string, yVal: number, diff: number}[]= [];
  Math: any;
  date: Date = new Date();

  constructor() {
    this.makeadd();
    this.Math = Math;
  }

    keyDownFunction(event) {
      if(event.keyCode == 13) {// keyCode = 13 is enter
      this.check();
      }
    }

  arrayBuild(){
    this.values = [
      {name: 'add', yVal: this.addscore, diff: this.addwrong},
      {name: 'sub', yVal: this.subscore, diff: this.subwrong},
      {name: 'mult', yVal: this.multscore, diff: this.multwrong},
      {name: 'div', yVal: this.divscore, diff: this.divwrong}
    ];
    // for(let i=0; i<this.values.length; i++){
    //   console.log("name: ", this.values[i].name, " yVal: ", this.values[i].yVal);
    // }
  }

  makeadd(){
    if(!this.addition && !this.subtraction && !this.multiplication && !this.division){
      this.addition = true;
      alert("At least one operator must be chosen. Setting addition to on.");
    }

    if(this.addition){
      this.additionproblem();
    } else {
      this.makesub();
    }
  }

  makesub(){
    if(this.subtraction){
      this.subtractionproblem();
    } else {
      this.makemult();
    }
  }

  makemult(){
    if(this.multiplication){
      this.multiplicationproblem();
    } else {
      this.makediv();
    }
  }

   makediv(){
    if(this.division){
      this.divisionproblem();
    } else {
      this.makeadd();
    }
  }

additionproblem(){
   this.op = "+";
   this.num1 = this.generate(this.addmin1, this.addmax1);
   this.num2 = this.generate(this.addmin2, this.addmax2);
}

subtractionproblem(){
  this.op = "-";
  this.num1 = this.generate(this.submin1, this.submax1);
  this.num2 = this.generate(this.submin2, this.submax2);

  // disallow negative answers if checked
  if(this.negativeanswers){
    if(this.num1 < this.num2){
      this.subtractionproblem();
    }
  }

}

multiplicationproblem(){
this.op = "*";
this.num1 = this.generate(this.multmin1, this.multmax1);
this.num2 = this.generate(this.multmin2, this.multmax2);
}

divisionproblem(){
this.op = "/";
this.num1 = this.generate(this.divmin1, this.divmax1);
this.num2 = this.generate(this.divmin2, this.divmax2);
// console.log("this.num1 = " + this.num1 + ", this.num2 = " + this.num2 + ", modulus: num1/num2 = " + this.num1%this.num2);
if(this.num1%this.num2!=0){
  this.divisionproblem();
}
}

generate(min,max){
  max = +max;
  min = +min;
  return Math.round(Math.random() * (max -  min) + min);
}

check(){
  if(this.answer==null){
    alert("You did not submit an answer. This will be marked as incorrect.");
  }
  if(this.op == "/"){
    this.solution = this.num1 / this.num2;
    if(this.answer == this.num1 / this.num2){
      this.result = true;
      this.score++;
      this.divscore++;
    } else {
      this.result = false;
    }
    this.problems.push({num1: this.num1, op: this.op, num2: this.num2, answer: this.answer, result: this.result, solution: this.solution});
    this.answer = null;
    this.divtotal++;
    this.total++;
    this.divwrong = this.divtotal - this.divscore;
    this.arrayBuild();
    this.makeadd();
    return;
  }

  if(this.op == "*"){
    this.solution = this.num1 * this.num2;
    if(this.answer == this.num1 * this.num2){
      this.result = true;
      this.score++;
      this.multscore++;
    } else {
      this.result = false;
    }
    this.problems.push({num1: this.num1, op: this.op, num2: this.num2, answer: this.answer, result: this.result, solution: this.solution});
    this.answer = null;
    this.multtotal++;
    this.total++;
    this.multwrong = this.multtotal - this.multscore;
    this.arrayBuild();
    this.makediv();
    return;
  }

  if(this.op == "-"){
    this.solution = this.num1 - this.num2;
    if(this.answer == this.num1 - this.num2){
      this.result = true;
      this.score++;
      this.subscore++;
    } else {
      this.result = false;
    }
    this.problems.push({num1: this.num1, op: this.op, num2: this.num2, answer: this.answer, result: this.result, solution: this.solution});
    this.answer = null;
    this.subtotal++;
    this.total++;
    this.subwrong = this.subtotal - this.subscore;
    this.arrayBuild();
    this.makemult();
    return;
  }

  if(this.op == "+"){
    this.solution = this.num1 + this.num2;
    if(this.answer == this.num1 + this.num2){
      this.result = true;
      this.score++;
      this.addscore++;
    } else {
      this.result = false;
    }
    this.problems.push({num1: this.num1, op: this.op, num2: this.num2, answer: this.answer, result: this.result, solution:this.solution});
    this.answer = null;
    this.addtotal++;
    this.total++;
    this.addwrong = this.addtotal - this.addscore;
    // this.values[0] = {name: "add", yVal: this.addscore};
    this.arrayBuild();
    this.makesub();
    return;
  }
 }

  toggle(){
    this.show =! this.show;
  }

  restart(){
    this.answer = null;
    this.result = null;
    this.addtotal = 0;
    this.subtotal = 0;
    this.multtotal = 0;
    this.divtotal = 0;
    this.score = 0;
    this.addscore = 0;
    this.subscore = 0;
    this.multscore = 0;
    this.divscore = 0;
    this.total = 0;
    this.problems = [];
    this.addition = true;
    this.subtraction = true;
    this.multiplication = true;
    this.division = true;
    this.negativeanswers = true;
  }

 //  getDateTime() {
 //  this.date = new Date();
 //      return this.date;
 // }

  // download(){
  //   // var doc = new jsPDF();
  //   // for(var i=0; i<this.problems.length;i++){
  //   //   doc.text(20, 20+(i*10), String(this.problems[i].num1));
  //   // }
  //   // doc.addPage();
  //   // doc.text(20, 20, 'Second page');
  //   // doc.save('Test.pdf');
  //
  //   let img: string;
  //   var marginTop = 10;
  //   var marginBottom = 10;
  //   var marginLeft = 10;
  //   var marginRight = 10;
  //   var spacing = 10;
  //   var pageHeight = 297;
  //   var pageWidth = 210;
  //   var headerHeight = 10;
  //   var cornerRadius = 2;
  //   var colWidth = (pageWidth - marginLeft - marginRight - spacing)/2;
  //   var colHeight = pageHeight - headerHeight - marginTop - marginBottom;
  //   var resultsheight = 80;// set later
  //   var graphHeight = 80;//set later
  //   var originXcol1 = marginLeft;
  //   var originYcol1 = marginTop;
  //   var originXcol2 = marginLeft + colWidth + spacing;
  //   var originYcol2 = marginTop;
  //   var originXresults = marginLeft + colWidth + spacing;
  //   var originYresults = marginTop;
  //   var originXgraph = marginLeft + colWidth + spacing;
  //   var originYgraph = marginTop + resultsheight + spacing;
  //   var title;
  //   var linesperPage = 4;
  //   var page = 1;
  //   var column = 0;
  //   var offset = 5;
  //   var row = 1;
  //
  //   var doc = new jsPDF();
  //   // doc.text(55,offset,this.problems.length.toString());
  //   doc.setFontSize(10);
  //
  //   // console.log("outer-img " + typeof(img));
  //   // doc.save('testCanvas.pdf');
  //
  //
  //   function drawBorder(originX, originY, colHeight, title){
  //       // main column
  //       doc.setDrawColor(51,122,183);
  //       doc.setFillColor(255,255,255);
  //       doc.roundedRect(originX, originY , colWidth, colHeight, cornerRadius, cornerRadius,'FD');
  //
  //       // column header overlays main column
  //       doc.setDrawColor(51,122,183);
  //       doc.setFillColor(51,122,183);
  //       doc.roundedRect(originX, originY, colWidth, headerHeight, cornerRadius, cornerRadius,'FD')
  //       doc.setTextColor(255,255,255);
  //       doc.text(originX+offset, originY+(2*headerHeight/3), title);
  //       doc.setTextColor(0); // black
  //       if(title === 'Graph:'){
  //         line += linesperPage;
  //         title = 'Your answers continued:'//title for all subsequent blocks
  //       }
  //     }
  //   // var dnow = Date.now();
  //   // var d = new Date(dnow);
  //
  //   // doc.setTextColor(0);
  //   doc.text(offset,offset,'date here');
  //   // num1: this.num1, op: this.op, num2: this.num2, answer: this.answer, result: this.result, solution:this.solution
  //   title = 'Your answers:';
  //   drawBorder(originXcol1, originYcol1, colHeight, title); // page 1 answers border
  //   title = 'Results:';
  //   drawBorder(originXcol2, originYcol2, resultsheight, title); // page 1 results border
  //   title = 'Graph:';
  //   drawBorder(originXgraph, originYgraph, graphHeight, title); // page 1 graph border
  //
  //   var line = 1;
  //   for(var i=0; i<this.problems.length; i++){
  //     if(column==1){
  //       //column two
  //       console.log("column:2, line = " + line);
  //       doc.text(originXcol2+offset,originYcol2+(row*5) + offset + headerHeight,(i+1) + ". " + this.problems[i].num1 + " " + this.problems[i].op + " " + this.problems[i].num2 + " = " + this.problems[i].answer + " result: " + this.problems[i].result);
  //       line++;
  //       row++;
  //     } else if(column==0){
  //       //column one
  //       console.log("column:1, line = " + line);
  //       doc.text(originXcol1+offset,originYcol1+(row*5)   + headerHeight,(i+1) + ". " + this.problems[i].num1 + " " + this.problems[i].op + " " + this.problems[i].num2 + " = " + this.problems[i].answer + " result: " + this.problems[i].result);
  //       line++;
  //       row++;
  //     }
  //
  //     if(line==linesperPage+1){
  //       console.log("1. line: "+ line);
  //       doc.addPage();// end of first page
  //       page++;
  //       row = 1;
  //       column = 0;
  //       drawBorder(originXcol1, originYcol1, colHeight, title); // page 2 answers border column one
  //     }
  //
  //     // if((line/linesperPage)%2==1) {
  //     if(line%linesperPage==1) {
  //       console.log("2. line: "+ line);
  //       // draw column two block
  //       drawBorder(originXcol2, originYcol2, colHeight, title); // page 2+ answers border column two
  //       column = 1;
  //       row = 1;
  //     } else if(line%linesperPage==0) {
  //       console.log("3. line: "+ line);
  //       doc.addPage();
  //       page++;
  //       row = 1;
  //       // draw column one block
  //       drawBorder(originXcol1, originYcol1, colHeight, title); // page 2+ answers border column one
  //       column = 0;
  //     }
  //   }
  //
  //   // doc.save('testCanvas.pdf');
  //   html2canvas(document.getElementById('graph')).then(function(canvas) {
  //   img = canvas.toDataURL("image/png");
  //   console.log("inner-img " + typeof(img));
  //   doc.addImage(img, 'JPEG', originXgraph + headerHeight, originYgraph + offset);
  //   doc.text(100,100,'blah test text');
  //   doc.save('testCanvas.pdf');
  // }); // closes html2canvas
  //
  // }

  // generatePDF(){ //wrapping jsPDF around html2canvas
  //     var doc = new jsPDF();
  //     doc.text(50,90,this.problems.length.toString());
  //     doc.text(50,100,'page 1')
  //     doc.addPage();
  //     doc.text(50,100,'page 2')
  //     html2canvas(document.getElementById('graph')).then(function(canvas) {
  //     var img = canvas.toDataURL("image/png");
  //     doc.addImage(img, 'JPEG', 100, 100);
  //     doc.save('test.pdf');
  //   });
  //   // doc.save('test.pdf');//fails to add image to pdf
  // }

  // generatePDF(){ //wrapping html2canvas around jsPDF
  //     console.log("outside: this.problem.length = " + this.problems.length);// works
  //
  //   html2canvas(document.getElementById('graph')).then(function(canvas) {
  //   // can't use this.problems.length inside html2canvas for inclusion in generated pdf
  //     console.log("inside: this.problem.length = " + this.problems.length);// not working!!!
  //
  //     var doc = new jsPDF();
  //     doc.text(50,100,'page 1');
  //     var img = canvas.toDataURL("image/png");
  //     doc.addImage(img, 'JPEG', 100, 100);
  //     doc.addPage();
  //     doc.text(50,100,'page 2')
  //     doc.save('test.pdf');
  //   });
  //   // doc.save('test.pdf');//fails to add image to pdf
  // }

  // const svg = source.getElementsByTagName('svg')[0];
  // // Then I serialized it doing:
  // const svg_xml = (new XMLSerializer).serializeToString(svg);
  // // (That works) When calling
  // pdf.addSVG(svg_xml, 0, 0, 500, 300);
  // // it doesn't seem to work. I don't get an error, but there is nothing displayed inside the PDF

}
