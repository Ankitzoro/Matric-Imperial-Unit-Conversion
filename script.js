
let input = document.getElementById("myInput");
const button = document.getElementById("b1");
let pera1 = document.getElementById("p1");
let pera2 = document.getElementById("p2");
let pera3 = document.getElementById("p3");
// Add click event
button.addEventListener("click", function() {
    let value = input.value;          // Get input value
    const number = Number(value);       // Convert to number

    // Check if it's a valid number
    if (!isNaN(number) && value.trim() !== "") {
        input.value = ""
        pera1.textContent = `${number} Meters = ${(number*3.2808).toFixed(3)} feet | ${number} feet = ${(number * 0.3048).toFixed(3)} meters`
        pera2.textContent = `${number} Liters = ${(number/3.785).toFixed(3)} Gallons | ${number} Gallons = ${(number * 3.785411784).toFixed(3)} Liters`
        pera3.textContent = `${number} Kilos = ${(number*2.20462).toFixed(3)} Pounds | ${number} Ponds = ${(number / 2.20462).toFixed(3)} Kilos`

    //   alert("You entered number: " + number);
    } else {
      alert("Please enter a valid number!");
    }
    // input.value = ""
});