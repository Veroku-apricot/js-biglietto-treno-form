// Variables
var name = document.getElementById("name").value;
var km = document.getElementById("km").value;
var age = document.getElementById("age").value;
var genera = document.getElementById("genera");
var annulla = document.getElementById("annulla");
  // Calc ticket price
  // Normal price
  var ticketPrice = (0.21 * km).toFixed(2);
  console.log("Normal price ticket: ", ticketPrice);
  // Discounted price
  var priceJunior = (ticketPrice - (ticketPrice * 0.2)).toFixed(2);
  var priceSenior = (ticketPrice - (ticketPrice * 0.4)).toFixed(2);

// Output
genera.addEventListener('click',
  function() {

  }
)

annulla.addEventListener('click',
  function() {

  }
)
