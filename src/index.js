import { weatherForcast } from './components/fetchWeatherApi.js';
import { getLocation } from './components/getLocation.js';
import { firstCityfunction, fourthCityfunction, secondCityfunction, thirdCityfunction } from './components/otherCitiesFunctions.js';
import { scaleToggle } from './components/scaleToggle.js';

const form = document.querySelector('form');
const search = document.querySelector('.search');
form.addEventListener('submit', () => {
  event.preventDefault();
  weatherForcast(search.value);
});

scaleToggle()
getLocation()
weatherForcast('Jalalpur Pirwala');
firstCityfunction('Jalalpur Pirwala');
secondCityfunction('Khan Bela');
thirdCityfunction('Bahawalpur');
fourthCityfunction('Lahore');