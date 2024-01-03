import { weatherForcast } from "./fetchWeatherApi";

async function getCoord(lat, lon) {
    try {
      const coord = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=eeaa1ce488084abd988112354231812&q=${lat},${lon}&days=4`);
      const  forcaster =  coord; 
      weatherForcast(forcaster.location.name);
    } catch (error) {
    }
  }

export function getLocation() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            getCoord(latitude, longitude);
          },
          (error) => {
            switch (error.code) {
              case error.PERMISSION_DENIED:
                break;
              case error.POSITION_UNAVAILABLE:
                break;
              case error.TIMEOUT:
                break;
              default:
            }
          }
        );
      } else {
      }
      
}