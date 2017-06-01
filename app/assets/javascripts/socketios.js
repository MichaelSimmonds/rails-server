# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

socket.on('data', function(data){
      chartData.push({
        timestamp: data.timestamp,
        hkld: data.hkld
      })
      drawChart(chartData)
      // console.log(chartData);
    });
    
  function drawChart() {
    console.log(chartData)
    var x = d3.scaleLinear()
    .domain([32.8, d3.max(chartData, function(d){return d.hkld;})])
    .range([0, 420]);

    // select+update
    var selection = d3.select(".chart")
    .selectAll("div")
      .data(chartData)
      // "enter"+add
    selection.enter().append("div")
      .style("width", function(d) {
        return x(d.hkld) + "px";
      })
      .text(function(d) {
        return d.hkld;
      })
      // remove (NOT FULLY WORKING)
      .on("click", function(e, i){
        chartData.splice(i, 1);
        drawChart();
      });
      // "exit"+clean up spliced points
      selection.exit().remove();
  }
