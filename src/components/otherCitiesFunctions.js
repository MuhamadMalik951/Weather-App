import { fetchApiData } from "./fetchApi";
import { renderUiFirstCity, renderUiFourthCity, renderUiSecondCity, renderUiThirdCity } from "./renderUI";

export async function firstCityfunction(city) {
    const firstCityApi = await fetchApiData(
      `https://api.weatherapi.com/v1/forecast.json?key=eeaa1ce488084abd988112354231812&q=${city}&days=4`
    );
  
    renderUiFirstCity(
      firstCityApi.location.country,
      firstCityApi.location.name,
      firstCityApi.current.condition.icon,
      firstCityApi.current.condition.text,
      firstCityApi.current.temp_c
    );
  }
  
export  async function secondCityfunction(city) {
    const secondCityApi = await fetchApiData(
      `https://api.weatherapi.com/v1/forecast.json?key=eeaa1ce488084abd988112354231812&q=${city}&days=4`
    );
  
    renderUiSecondCity(
      secondCityApi.location.country,
      secondCityApi.location.name,
      secondCityApi.current.condition.icon,
      secondCityApi.current.condition.text,
      secondCityApi.current.temp_c
    );
  }
export  async function thirdCityfunction(city) {
    const thirdCityApi = await fetchApiData(
      `https://api.weatherapi.com/v1/forecast.json?key=eeaa1ce488084abd988112354231812&q=${city}&days=4`
    );
  
    renderUiThirdCity(
      thirdCityApi.location.country,
      thirdCityApi.location.name,
      thirdCityApi.current.condition.icon,
      thirdCityApi.current.condition.text,
      thirdCityApi.current.temp_c
    );
  }
export  async function fourthCityfunction(city) {
    const fourthCityApi = await fetchApiData(
      `https://api.weatherapi.com/v1/forecast.json?key=eeaa1ce488084abd988112354231812&q=${city}&days=4`
    );
  
    renderUiFourthCity(
      fourthCityApi.location.country,
      fourthCityApi.location.name,
      fourthCityApi.current.condition.icon,
      fourthCityApi.current.condition.text,
      fourthCityApi.current.temp_c
    );
  }
  