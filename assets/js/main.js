

//Richiedere all'utente tramite input i 2 valori (prima i km e dopo la sua età)
//Stampiamo in console i 2 valori 

let km_number = Number(prompt("how many km will you travel?"));
console.log(km_number);
let age_user = Number(prompt("how old will you be when you travel?"));
console.log(age_user);

//Stabiliamo il prezzo del biglietto con una variabile
let price_km = 0.21;
const discount_child = 0.2;
const discount_senior = 0.4;

//Eseguiamo delle operazioni math con delle condizioni:
//Usare il document.writeIn per stampare il prezzo 
if (age_user <= 18) {
    alert ("Minors have a 20% discount");
    let price_passenger = (km_number * price_km);
    let price_total = price_passenger - (price_passenger * discount_child);
    console.log(price_total);
    document.writeln(`Total Price: ${price_total.toFixed(2)} €`);
}

else if (age_user >= 65) {
    alert ("Senior have a 40% discount"); 
    let price_passenger = (km_number * price_km);
    let price_total = price_passenger - (price_passenger * discount_senior)
    console.log(price_total);
    document.writeln(`Total Price: ${price_total.toFixed(2)} €`);
}

else {
    let price_total = (km_number * price_km);
    console.log(price_total);
    document.writeln(`Total Price: ${price_total.toFixed(2)} €`);
}


