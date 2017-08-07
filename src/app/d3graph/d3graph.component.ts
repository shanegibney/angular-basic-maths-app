import { Component, ElementRef, NgZone, OnDestroy, OnInit, Input, OnChanges } from '@angular/core';
import {
  D3Service, D3, Axis, BrushBehavior, BrushSelection, D3BrushEvent, ScaleLinear, ScaleOrdinal, Selection, Transition
} from 'd3-ng2-service';
import * as d3Array from "d3-array";

@Component({
  selector: 'app-d3graph',
  templateUrl: './d3graph.component.html',
  styleUrls: ['./d3graph.component.css']
})
export class D3graphComponent implements OnInit, OnChanges {
  @Input() data: [{name: string, yVal: number, diff: number}];
  private d3: D3;
  private parentNativeElement: any;
  private d3Svg: Selection<SVGSVGElement, any, null, undefined>;

  constructor(element: ElementRef, private ngZone: NgZone, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnInit() {
  }

  ngOnChanges(){
            let self = this;
            let d3 = this.d3;
            let d3ParentElement: any;
            let svg: any;
            let name: string;
            let yVal: number;
            let colors = [];
            let padding: number = 25;
            let width: number = 500;
            let height: number = 150;
            let xScale: any;
            let yScale: any;
            let xAxis: any;
            let yAxis: any;

    if (this.parentNativeElement !== null) {
      d3.select("svg").remove();
      svg = d3.select(this.parentNativeElement)
          .append('svg')        // create an <svg> element
          .attr('width', width) // set its dimensions
          .attr('height', height);

      colors = ['yellow', 'green', 'blue', 'orange'];

      xScale = d3.scaleBand()
          .domain(this.data.map(function(d){ return d.name; }))
          .range([0, 200]);

      yScale = d3.scaleLinear()
          .domain([0,d3.max(this.data, function(d) {return d.yVal + d.diff})])
          .range([100, 0]);

      xAxis = d3.axisBottom(xScale) // d3.js v.4
          .ticks(5)
          .scale(xScale);

      yAxis = d3.axisLeft(xScale) // d3.js v.4
          .scale(yScale)
          .ticks(7);

        svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + (padding) + "," + padding + ")")
        .call(yAxis);

	       svg.append('g')            // create a <g> element
         .attr('class', 'axis')   // specify classes
	       .attr("transform", "translate(" + padding + "," + (height - padding) + ")")
         .call(xAxis);            // let the axis do its thing

      var rects = svg.selectAll('rect')
          .data(this.data);
          rects.size();

      var newRects = rects.enter();

      newRects.append('rect')
          .attr('x', function(d,i) {
            return xScale(d.name );
          })
          .attr('y', function(d) {
              return yScale(d.yVal);
            })
	        .attr("transform","translate(" + (padding + 15) + "," + (padding) + ")")
          .attr('height', function(d) {
              return height - yScale(d.yVal) - (2*padding)})
          .attr('width', 20)
          .attr('fill', 'green');

      var moreRects = rects.enter();

      moreRects.append('rect')
          .attr('x', function(d,i) {
            return xScale(d.name );
          })
          .attr('y', function(d) {
              return yScale(d.yVal + d.diff);
            })
          .attr("transform","translate(" + (padding + 15) + "," + (padding) + ")")
          .attr('height', function(d) {
              return height - yScale(d.diff) - (2*padding)})
          .attr('width', 20)
          .attr('fill', 'red');

      moreRects
      .append("text")
          .attr("x", function(d) { return xScale(d.name) + 35;
           })
          .attr("y", 10)
          .attr("dy", ".35em")
          .text(function(d, i) { return (Math.floor(d.yVal/(d.yVal + d.diff)*100) + "%") });
     }
   }
}
