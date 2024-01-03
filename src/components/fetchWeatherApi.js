import { fetchApiData } from "./fetchApi";
import { renderUI } from "./renderUI";
export async function weatherForcast(city) {
    try {
      const firstApiData = await fetchApiData(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=20f7632ffc2c022654e4093c6947b4f4`
      );
      const secondApiData = await fetchApiData(
        `https://api.weatherapi.com/v1/forecast.json?key=eeaa1ce488084abd988112354231812&q=${city}&days=4`
      );
  
      const firstData = await firstApiData;
      const secondData = await secondApiData;
  
      if (firstData.base) {
        const fullLocation =
          secondData.location.name + ', ' + secondData.location.country;
  
        renderUI(
          secondData.current.temp_c,
          secondData.current.condition.text,
          fullLocation,
          secondData.current.feelslike_c,
          secondData.current.humidity,
          secondData.current.uv,
          secondData.current.wind_kph,
          secondData.current.wind_dir,
          secondData.current.wind_degree,
          secondData.current.precip_mm,
          secondData.current.gust_kph,
          secondData.current.vis_km,
          secondData.current.condition.icon,
          secondData.forecast.forecastday[0].day.condition.icon,
          secondData.forecast.forecastday[0].day.maxtemp_c,
          secondData.forecast.forecastday[0].day.mintemp_c,
          secondData.forecast.forecastday[0].date,
          secondData.forecast.forecastday[0].date,
          secondData.forecast.forecastday[1].day.condition.icon,
          secondData.forecast.forecastday[1].day.maxtemp_c,
          secondData.forecast.forecastday[1].day.mintemp_c,
          secondData.forecast.forecastday[1].date,
          secondData.forecast.forecastday[1].date,
          secondData.forecast.forecastday[2].day.condition.icon,
          secondData.forecast.forecastday[2].day.maxtemp_c,
          secondData.forecast.forecastday[2].day.mintemp_c,
          secondData.forecast.forecastday[2].date,
          secondData.forecast.forecastday[2].date,
          secondData.forecast.forecastday[0].day.condition.icon,
          secondData.forecast.forecastday[0].day.maxtemp_c,
          secondData.forecast.forecastday[0].day.mintemp_c,
          secondData.forecast.forecastday[0].date,
          secondData.forecast.forecastday[0].date,
          secondData.location.name,
          secondData.location.country
        );
      } else {
        console.error('this is the error');
      }
    } catch (error) {
    }
  }