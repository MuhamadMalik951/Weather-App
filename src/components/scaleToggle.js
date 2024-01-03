const temp = document.querySelector('.temp');
const toggle = document.querySelector('.checkbox');
const feelsLike = document.querySelector('.feels-like');
const firstCityTemp = document.querySelector('.first-city-temp');
const secondCityTemp = document.querySelector('.second-city-temp');
const thirdCityTemp = document.querySelector('.third-city-temp');
const fourthCityTemp = document.querySelector('.fourth-city-temp');


export function scaleToggle() {
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
      toggle.value = 'on';
      changeScaleToF()
    } else {
      toggle.value = 'off';
      changeScaleToC()
    }
});
}

function celsiusToFahrenheit(celsius) {
    return ((celsius * 9) / 5 + 32).toFixed(1);
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return (((fahrenheit - 32) * 5) / 9).toFixed(1);
  }
  
 export  function changeScaleToF() {
    temp.innerHTML = `${celsiusToFahrenheit(
        parseFloat(temp.textContent)
      )}&deg; F`;
      feelsLike.innerHTML = `${celsiusToFahrenheit(
        parseFloat(feelsLike.textContent)
      )}&deg; f`;
      firstCityTemp.innerHTML = `${celsiusToFahrenheit(
        parseFloat(firstCityTemp.textContent)
      )}&deg; f`;
      secondCityTemp.innerHTML = `${celsiusToFahrenheit(
        parseFloat(secondCityTemp.textContent)
      )}&deg; f`;
      thirdCityTemp.innerHTML = `${celsiusToFahrenheit(
        parseFloat(thirdCityTemp.textContent)
      )}&deg; f`;
      fourthCityTemp.innerHTML = `${celsiusToFahrenheit(
          parseFloat(fourthCityTemp.textContent)
          )}&deg; f`;
  }

  export function changeScaleToC() {
    temp.innerHTML = `${fahrenheitToCelsius(
        parseFloat(temp.textContent)
      )}&deg; C`;
      feelsLike.innerHTML = `${fahrenheitToCelsius(
        parseFloat(feelsLike.textContent)
      )}&deg; f`;
      firstCityTemp.innerHTML = `${fahrenheitToCelsius(
        parseFloat(firstCityTemp.textContent)
      )}&deg; f`;
      secondCityTemp.innerHTML = `${fahrenheitToCelsius(
        parseFloat(secondCityTemp.textContent)
      )}&deg; f`;
      thirdCityTemp.innerHTML = `${fahrenheitToCelsius(
        parseFloat(thirdCityTemp.textContent)
      )}&deg; f`;
      fourthCityTemp.innerHTML = `${fahrenheitToCelsius(
        parseFloat(fourthCityTemp.textContent)
      )}&deg; f`;
  }
