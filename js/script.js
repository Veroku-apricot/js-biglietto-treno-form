// Variables
var genera = document.getElementById("genera");
var annulla = document.getElementById("annulla");
var ticket = document.getElementById("ticket");

// Output
genera.addEventListener('click',
  function getInputValue() {
    // Passenger name
    var name = document.getElementById("name").value;
    document.getElementById("nomep").innerHTML = name;
    // Ticket price
    var km = document.getElementById("km").value;
    var ticketPrice = (0.21 * km).toFixed(2);
    console.log("Normal price ticket: ", ticketPrice);
    var age = document.getElementById("age").value;
    if (age === "minorenne") {
      // 20% discount
      document.getElementById("prezzo").innerHTML = (ticketPrice - (ticketPrice * 0.2)).toFixed(2) + "&euro;";
      console.log("Discounted price for under 18: ", (ticketPrice - (ticketPrice * 0.2)).toFixed(2));
    } else if (age === "over65"){
      // 40% discount
      document.getElementById("prezzo").innerHTML = (ticketPrice - (ticketPrice * 0.4)).toFixed(2) + "&euro;";
      console.log("Discounted price for over 65: ", (ticketPrice - (ticketPrice * 0.4)).toFixed(2));
    } else {
      document.getElementById("prezzo").innerHTML = ticketPrice + "&euro;";
    }





    ticket.style.visibility = "visible";
  }
)

annulla.addEventListener('click',
  function() {
    ticket.style.visibility = "hidden";
  }
)
