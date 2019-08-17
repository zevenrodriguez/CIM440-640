//info from https://www.statista.com/statistics/188658/movie-genres-in-north-america-by-box-office-revenue-since-1995/
//Pie chart code from https://p5js.org/examples/form-pie-chart.html
var table;

var totals = 0;

var revData = [];

var pieData = [];


function preload() {
  table = loadTable('assets/genres-ranked.csv', 'csv', 'header');

}

function setup() {
  // put setup code here

  createCanvas(600, 600);

  console.log(table.getRowCount() + ' total rows in table');
  console.log(table.getColumnCount() + ' total columns in table');
  console.log(table.getColumn('Genre'));
  console.log(table.getColumn('Revenue'));

  //Conver to float array
  for (var i in table.getColumn('Revenue')) {
    // console.log(parseFloat(table.getColumn('Revenue')[i]));
    var curValue = parseFloat(table.getColumn('Revenue')[i]);
    totals = totals + curValue;
    revData[i] = curValue;
    //console.log(revData[i]);
  }

  for(var i in revData){
    pieData[i] = (revData[i]/totals);
  }

  console.log("Pie Data: " + pieData);

  // the ... Spread Sintax which expands strings or array into there individual units
  //console.log(...revData);
  //console.log(Math.max(...revData));
  //console.log(Math.min(...revData));


  //console.log("converted values: " + revData)

  pieChart(250, pieData);


}

function draw() {
  // put drawing code here



}


function pieChart(diameter, data) {
  var lastAngle = 0
  for (var i = 0; i < data.length; i++) {
    var gray = map(i, 0, data.length, 0, 255); // Determines pie color slice
    fill(gray);
    arc(width / 2, height / 2, diameter, diameter, lastAngle, lastAngle + radians(data[i] * 360));
    push();
    translate(width / 2, height / 2);
    rotate(lastAngle );
    fill(0);
    var textInfo = table.getColumn('Genre')[i] + " " + (data[i] * 100).toFixed(2); //toFixed adjusts how many decimal points to display
    text(textInfo, 150, 0);
    pop();
    lastAngle += radians(data[i] * 360);
  }
}
