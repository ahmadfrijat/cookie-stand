//========================================================================================================================
// VAIRIABLS AND DATA 
//=========================================================================================================================


// creat constructor function to the cookie stand project:

var Shop = function (max, min, average, hourlySales, dailySales, location) {

  this.max = parseInt(max);
  this.min = parseInt(min);
  this.average = average;
  this.hourlySales = hourlySales;
  this.dailySales = dailySales;
  this.location = location;

};
var hour = ["6am ", '7am ', '8am', '9am', '10am', '11am', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];



var seattle = new Shop(65, 23, 6.3, [], 0, 'Seattle');
var tokyo = new Shop(24, 3, 1.2, [], 0, 'Tokyo');
var dubai = new Shop(38, 11, 3.7, [], 0, 'Dubai');
var paris = new Shop(38, 20, 2.3, [], 0, 'Paris');
var lima = new Shop(16, 2, 4.6, [], 0, 'Lima');

// pushing all shops :
var allShops = [];
allShops.push(seattle, tokyo, dubai, paris, lima)




//========================================================================================================================
// FUNCTIONALITY
//=========================================================================================================================


// calculating random num :
Shop.prototype.randomCust = function () {

  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};


// calculating hourly daily sales :
Shop.prototype.hourlyDailySales = function () {

  for (var i = 0; i < hour.length; i++) {
    var numOfCookies = Math.ceil(this.randomCust(this.min, this.max) * this.average);
    this.hourlySales.push(numOfCookies);
    this.dailySales += numOfCookies;
  }
};




var container = document.getElementById('content-area');

var table = document.createElement('table')
container.appendChild(table);


Shop.prototype.render = function () {



  var firsRow = document.createElement('tr')
  table.appendChild(firsRow);
  firsRow.textContent = '#Time#';
  table.appendChild(firsRow);
  for (let h = 0; h < hour.length; h++) {
    let newText = document.createElement('th');
    newText.textContent = hour[h];
    firsRow.appendChild(newText)
  }
  var dailyLocationTotal = document.createElement('th')
  dailyLocationTotal.textContent = 'Daily Location Total';
  firsRow.appendChild(dailyLocationTotal)

};





Shop.prototype.render1 = function () {
  var firRow2 = document.createElement('tr');
  firRow2.textContent = this.location;
  table.appendChild(firRow2);
  for (var i = 0; i < hour.length; i++) {
    var secRow2 = document.createElement('th');
    secRow2.textContent = this.hourlySales[i];
    firRow2.appendChild(secRow2);

  }
  var dailyLocationTotal = document.createElement('th')
  dailyLocationTotal.textContent = this.dailySales;
  firRow2.appendChild(dailyLocationTotal)
}


Shop.prototype.total = function () {
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = 'Total';
  trElement.appendChild(tdElement);

  // calculatin total hourly sales :
  var grandTotal = 0;
  for (var i = 0; i < hour.length; i++) {

    var hourlyCounter = 0;

    for (var store = 0; store < allShops.length; store++) {
      hourlyCounter += allShops[store].hourlySales[i];
    }

    tdElement = document.createElement('td');

    tdElement.textContent = hourlyCounter;
    trElement.appendChild(tdElement);
    grandTotal = hourlyCounter += grandTotal;


  }

  tdElement = document.createElement('td');
  tdElement.textContent = grandTotal;
  trElement.appendChild(tdElement);

  table.appendChild(trElement);

}

//========================================================================================================================
// FUNCTION calling
//=========================================================================================================================
for (i = 0; i < allShops.length; i++) {

  allShops[i].hourlyDailySales();

}



seattle.render()

for (i = 0; i < allShops.length; i++) {

  allShops[i].render1();

}

seattle.total()





