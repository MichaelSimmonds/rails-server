//This is now using the d3 library to some extent. This will help me to create an SVG chart.

// Recieves data from room.coffee and displays it
function drawChart(chartData) {
  console.log(chartData)
  // console.log(chartData)
  var x = d3.scale.linear()
  .domain([32, 34])
  .range([0, 420]);

  // select+update
  var selection = d3.select(".chart")
  .selectAll(".bar")
    .data(chartData)
    // "enter"+add
  selection.style("width", function(d) {
    return x(d) + "px";
  })
  selection.enter().append("div")
    .style("width", function(d) {
      return x(d) + "px";
    })
    .text(function(d) {
      return d;
    })
    // "exit"+clean up spliced points
    selection.exit().remove();
}

// d3.max(chartData, function(d){return d;})
