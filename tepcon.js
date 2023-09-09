let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');
let kelvin = document.getElementById('kelvin');

let fahText = document.getElementById("fahrenText");
let celText = document.getElementById("celciusText");
let kelText = document.getElementById("kelvinText")

celsius.oninput = function() {
    let f = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));
    fahText.textContent = "Conveted fahrenheit Value= " + fahrenheit.value;

    let k = (parseFloat(celsius.value) + 273.15);
    kelvin.value = parseFloat(k.toFixed(2));
    kelText.textContent = "Converted kelvin Value= " + kelvin.value;

    celText.textContent = "Converted Celcious Value= " + celsius.value;
}


fahrenheit.oninput = function() {
    let c = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(c.toFixed(2));
    celText.textContent = "Converted Celcious Value= " + celsius.value;

    let k = (parseFloat(fahrenheit.value) - 32) * 5 / 9 + 273.15;
    kelvin.value = parseFloat(k.toFixed(2));
    kelText.textContent = "Converted kelvin Value= " + kelvin.value;

    fahText.textContent = "Conveted fahrenheit Value= " + fahrenheit.value;
}


kelvin.oninput = function() {
    let f = (parseFloat(kelvin.value) - 273.15) * 9 / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));
    fahText.textContent = "Conveted fahrenheit Value= " + fahrenheit.value;

    let c = (parseFloat(kelvin.value) - 273.15);
    celsius.value = parseFloat(c.toFixed(2));
    celText.textContent = "Converted Celcious Value= " + celsius.value;

    kelText.textContent = "Converted kelvin Value= " + kelvin.value;
}