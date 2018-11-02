//info from https://www.statista.com/statistics/188658/movie-genres-in-north-america-by-box-office-revenue-since-1995/
//Pie chart code from https://p5js.org/examples/form-pie-chart.html
var table;

var totals = 0;

var revData = [];

var pieData = [];

var baseLine = 400;

var barWidth = 20;

var spacing = 5;


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


  // the ... Spread Sintax which expands strings or array into there individual units
  //console.log(...revData);
  //console.log(Math.max(...revData));
  //console.log(Math.min(...revData));


  //console.log("converted values: " + revData)

  barChart(revData,baseLine, barWidth, spacing);


}

function draw() {
  // put drawing code here



}


function barChart(data,base,bWidth, space) {
  var lastAngle = 0
  for (var i = 0; i < data.length; i++) {
    var gray = map(i, 0, data.length, 0, 255);
    var maxData = Math.max(...data) + 10;
    var curData = map(data[i], 0, maxData, baseLine, 0);
    console.log(curData);
    fill(gray);
    rect(bWidth * i + space,base,bWidth - space, curData - base);
    var textInfo = table.getColumn('Genre')[i] + " " + data[i];

    push();
    fill(0);
    translate(bWidth * i + 5, base + 5);
    rotate(45);
    text(textInfo, 0, 0);
    pop();

  }
}
