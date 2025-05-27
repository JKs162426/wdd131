const temperatureC = 30; 
const windSpeedKmh = 10;

const calculateWindChill = (t, s) => (13.12 + 0.6215 * t - 11.37 * s**0.16 + 0.3965 * t * s**0.16).toFixed(1);


let windChillDisplay = "N/A";

if (temperatureC <= 10 && windSpeedKmh > 4.8) {
  windChillDisplay = calculateWindChill(temperatureC, windSpeedKmh) + " °C";
}

document.addEventListener("DOMContentLoaded", function () {
  const windChillElement = document.getElementById("windchill");
  if (windChillElement) {
    windChillElement.textContent = windChillDisplay;
  }
});