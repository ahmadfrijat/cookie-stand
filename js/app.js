
var hour = ["6am ", '7am ', '8am', '9am', '10am', '11am', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

var seattleShop = {
  max: 65,
  min: 23,
  average: 6.3,
  hourlySales: [],
  dailySales: 0,


  randomCust: function (min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  hourlyDailySales: function () {

    for (var i = 0; i < hour.length; i++) {
      var numOfCookies = Math.ceil(this.randomCust(this.min, this.max) * this.average);
      this.hourlySales.push(numOfCookies);
      this.dailySales += numOfCookies;
    }
  },

  render: function () {
    this.hourlyDailySales();
    console.log(this.hourlySales)
    var container = document.getElementById('content-area');
    var h2 = document.createElement('h2');
    container.appendChild(h2);
    h2.textContent = 'Seattle';
    container.appendChild(h2);
    var list = document.createElement('ul');
    container.appendChild(list);
    for (var i = 0; i < hour.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = hour[i] + ': ' + this.hourlySales[i] + ' cookies';
      list.appendChild(listItem);
    }
    var listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.dailySales + ' cookies';
    list.appendChild(listItem);


  },


}

seattleShop.hourlyDailySales();
seattleShop.render();



var tokyoShop = {
  max: 24,
  min: 3,
  average: 1.2,
  hourlySales: [],
  dailySales: 0,


  randomCust: function (min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  hourlyDailySales: function () {

    for (var i = 0; i < hour.length; i++) {
      var numOfCookies = Math.ceil(this.randomCust(this.min, this.max) * this.average);
      this.hourlySales.push(numOfCookies);
      this.dailySales += numOfCookies;
    }
  },

  render: function () {
    this.hourlyDailySales();
    console.log(this.hourlySales)
    var container = document.getElementById('content-area');
    var h2 = document.createElement('h2');
    container.appendChild(h2);
    h2.textContent = 'Tokyo';
    container.appendChild(h2);
    var list = document.createElement('ul');
    container.appendChild(list);
    for (var i = 0; i < hour.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = hour[i] + ': ' + this.hourlySales[i] + ' cookies';
      list.appendChild(listItem);
    }
    var listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.dailySales + ' cookies';
    list.appendChild(listItem);


  },
}

tokyoShop.hourlyDailySales();
tokyoShop.render();



var dubaiShop = {
  max: 38,
  min: 11,
  average: 3.7,
  hourlySales: [],
  dailySales: 0,


  randomCust: function (min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  hourlyDailySales: function () {

    for (var i = 0; i < hour.length; i++) {
      var numOfCookies = Math.ceil(this.randomCust(this.min, this.max) * this.average);
      this.hourlySales.push(numOfCookies);
      this.dailySales += numOfCookies;
    }
  },

  render: function () {
    this.hourlyDailySales();
    console.log(this.hourlySales)
    var container = document.getElementById('content-area');
    var h2 = document.createElement('h2');
    container.appendChild(h2);
    h2.textContent = 'Dubai';
    container.appendChild(h2);
    var list = document.createElement('ul');
    container.appendChild(list);
    for (var i = 0; i < hour.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = hour[i] + ': ' + this.hourlySales[i] + ' cookies';
      list.appendChild(listItem);
    }
    var listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.dailySales + ' cookies';
    list.appendChild(listItem);


  },


}

dubaiShop.hourlyDailySales();
dubaiShop.render();


var parisShop = {
  max: 38,
  min: 20,
  average: 2.3,
  hourlySales: [],
  dailySales: 0,


  randomCust: function (min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  hourlyDailySales: function () {

    for (var i = 0; i < hour.length; i++) {
      var numOfCookies = Math.ceil(this.randomCust(this.min, this.max) * this.average);
      this.hourlySales.push(numOfCookies);
      this.dailySales += numOfCookies;
    }
  },

  render: function () {
    this.hourlyDailySales();
    console.log(this.hourlySales)
    var container = document.getElementById('content-area');
    var h2 = document.createElement('h2');
    container.appendChild(h2);
    h2.textContent = 'Paris';
    container.appendChild(h2);
    var list = document.createElement('ul');
    container.appendChild(list);
    for (var i = 0; i < hour.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = hour[i] + ': ' + this.hourlySales[i] + ' cookies';
      list.appendChild(listItem);
    }
    var listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.dailySales + ' cookies';
    list.appendChild(listItem);


  },


}

parisShop.hourlyDailySales();
parisShop.render();


var limaShop = {
  max: 16,
  min: 2,
  average: 4.6,
  hourlySales: [],
  dailySales: 0,


  randomCust: function (min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  hourlyDailySales: function () {

    for (var i = 0; i < hour.length; i++) {
      var numOfCookies = Math.ceil(this.randomCust(this.min, this.max) * this.average);
      this.hourlySales.push(numOfCookies);
      this.dailySales += numOfCookies;
    }
  },

  render: function () {
    this.hourlyDailySales();
    console.log(this.hourlySales)
    var container = document.getElementById('content-area');
    var h2 = document.createElement('h2');
    container.appendChild(h2);
    h2.textContent = 'Lima';
    container.appendChild(h2);
    var list = document.createElement('ul');
    container.appendChild(list);
    for (var i = 0; i < hour.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = hour[i] + ': ' + this.hourlySales[i] + ' cookies';
      list.appendChild(listItem);
    }
    var listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.dailySales + ' cookies';
    list.appendChild(listItem);


  },


}

limaShop.hourlyDailySales();
limaShop.render();
