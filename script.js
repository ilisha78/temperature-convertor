function convertTemperature() {
    const temperature = parseFloat(document.getElementById("inp").value);
    const unit = document.getElementById("unit").value;
    let result;

    switch (unit) {
        case "celsius":
            result = `${temperature} °C`;
            break;
        case "fahrenheit":
            result = `${fahrenheitToCelsius(temperature)} °C`;
            break;
        case "kelvin":
            result = `${kelvinToCelsius(temperature)} °C`;
            break;
        default:
            result = "Invalid unit";
    }

    document.getElementById("result").innerText = result;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}
