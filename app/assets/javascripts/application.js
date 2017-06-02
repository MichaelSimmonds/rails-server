// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require d3
//= require drawChart
//= require_tree .


// function drawChart(chartData) {
//   // console.log(chartData)
//   var x = d3.scaleLinear()
//   .domain([32.8, d3.max(chartData, function(d){return d.hkld;})])
//   .range([0, 420]);
//
//   // select+update
//   var selection = d3.select(".chart")
//   .selectAll("div")
//     .data(chartData)
//     // "enter"+add
//   selection.enter().append("div")
//     .style("width", function(d) {
//       return x(d.hkld) + "px";
//     })
//     .text(function(d) {
//       return d.hkld;
//     })
//     // remove (NOT FULLY WORKING)
//     .on("click", function(e, i){
//       chartData.splice(i, 1);
//       drawChart();
//     });
//     // "exit"+clean up spliced points
//     selection.exit().remove();
// }
