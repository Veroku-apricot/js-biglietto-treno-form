// Variables
var genera = document.getElementById("genera");
var annulla = document.getElementById("annulla");
var ticket = document.getElementById("ticket");

// Output
genera.addEventListener('click',
  function() {

    // Passenger name
    var name = document.getElementById("name").value;
    document.getElementById("nomep").innerHTML = name;
    console.log("Passenger's name: ", name);

    // Ticket price
    var km = document.getElementById("km").value;
    console.log("Km: ", km);
    var ticketPrice = (0.21 * km).toFixed(2);
    console.log("Normal price ticket: ", ticketPrice);
    // Age
    var age = document.getElementById("age").value;
    console.log("Passenger's age: ", age);
    // Output
    if (age === "minorenne") {
      // 20% discount
      document.getElementById("prezzo").innerHTML = (ticketPrice - (ticketPrice * 0.2)).toFixed(2) + "&euro;";
      console.log("Discounted price for under 18: ", (ticketPrice - (ticketPrice * 0.2)).toFixed(2));
      // offerta junior
      document.getElementById("offerta").innerHTML = "Sconto <br> Minorenne";
    } else if (age === "over65"){
      // 40% discount
      document.getElementById("prezzo").innerHTML = (ticketPrice - (ticketPrice * 0.4)).toFixed(2) + "&euro;";
      console.log("Discounted price for over 65: ", (ticketPrice - (ticketPrice * 0.4)).toFixed(2));
      // offerta senior
      document.getElementById("offerta").innerHTML = "Sconto <br> Senior (Over 65)";
    } else {
      document.getElementById("prezzo").innerHTML = ticketPrice + "&euro;";
      // nessuna offerta
      document.getElementById("offerta").innerHTML = "Nessuna <br> offerta";
    }

    // Carrozza
    document.getElementById("carrozza").innerHTML = Math.ceil((Math.random() * 15) + 1);

    // Codice CP
    document.getElementById("codCp").innerHTML = Math.ceil(Math.random() * (100000 - 90000) + 90000);

    // Ticket visibility
    ticket.style.visibility = "visible";
  }
);

annulla.addEventListener('click',
  function() {
    ticket.style.visibility = "hidden";
    document.getElementById("name").value = "";
    document.getElementById("km").value = "";
    document.getElementById("age").value = "minorenne";
  }
);
