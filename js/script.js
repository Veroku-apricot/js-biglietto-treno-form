
// Calc ticket price
// Normal price
var ticketPrice = (0.21 * km).toFixed(2);
console.log("Normal price ticket: ", ticketPrice);

// Output
if (age < 18) {
  // 20% discount
  document.getElementById("title").innerHTML = "Congratulazioni! Per lei uno sconto del 20%!" + "<br>" + "Prezzo finale: " + (ticketPrice - (ticketPrice * 0.2)).toFixed(2) + "&euro;";
  console.log("Discounted price for under 18: ", (ticketPrice - (ticketPrice * 0.2)).toFixed(2));
} else if (age > 65){
  // 40% discount
  document.getElementById("title").innerHTML = "Congratulazioni! Per lei uno sconto del 40%!" + "<br>" + "Prezzo finale: " + (ticketPrice - (ticketPrice * 0.4)).toFixed(2) + "&euro;";
  console.log("Discounted price for over 65: ", (ticketPrice - (ticketPrice * 0.4)).toFixed(2));
} else {
  document.getElementById("title").innerHTML = "Prezzo totale (Iva esclusa): " + ticketPrice + "&euro;";
}
