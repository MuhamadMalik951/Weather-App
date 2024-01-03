import { currentMonth, finalMonth, fourthDayy, secondDayy, thirdDayy, today } from './getForecast.js';

const temp = document.querySelector('.temp');
const condition = document.querySelector('.condition');
const locationspan = document.querySelector('.location-span');
const weatherIcon = document.querySelector('.weather-icon');
const feelsLike = document.querySelector('.feels-like');
const humidity = document.querySelector('.humidity');
const uvIndex = document.querySelector('.uv-index');
const wind = document.querySelector('.wind');
const windDirection = document.querySelector('.wind-direction');
const windDegree = document.querySelector('.wind-degree');
const precip = document.querySelector('.precip');
const gust = document.querySelector('.gust');
const visibility = document.querySelector('.visibility');
const topCurrentLocation = document.querySelector('.top-current-location');
const toggle = document.querySelector('.checkbox');
const firstDay = document.querySelector('.first-day');
const firstDayMax = document.querySelector('.first-day-max');
const firstDayMin = document.querySelector('.first-day-min');
const firstDayDate = document.querySelector('.first-day-date');
const firstDayWeekday = document.querySelector('.first-day-weekday');
const secondDay = document.querySelector('.second-day');
const secondDayMax = document.querySelector('.second-day-max');
const secondDayMin = document.querySelector('.second-day-min');
const secondDayDate = document.querySelector('.second-day-date');
const secondDayWeekday = document.querySelector('.second-day-weekday');
const thirdDay = document.querySelector('.third-day');
const thirdDayMax = document.querySelector('.third-day-max');
const thirdDayMin = document.querySelector('.third-day-min');
const thirdDayDate = document.querySelector('.third-day-date');
const thirdDayWeekday = document.querySelector('.third-day-weekday');
const fourthDay = document.querySelector('.fourth-day');
const fourthDayMax = document.querySelector('.fourth-day-max');
const fourthDayMin = document.querySelector('.fourth-day-min');
const fourthDayDate = document.querySelector('.fourth-day-date');
const fourthDayWeekday = document.querySelector('.fourth-day-weekday');



const firstCountry = document.querySelector('.first-country');
const firstCity = document.querySelector('.first-city');
const firstCityIcon = document.querySelector('.first-city-icon');
const firstCityCondition = document.querySelector(
  '.first-city-condition'
);
 const firstCityTemp = document.querySelector('.first-city-temp');
 const secondCountry = document.querySelector('.second-country');
 const secondCity = document.querySelector('.second-city');
 const secondCityIcon = document.querySelector('.second-city-icon');
 const secondCityCondition = document.querySelector(
  '.second-city-condition'
);
 const secondCityTemp = document.querySelector('.second-city-temp');
 const thirdCountry = document.querySelector('.third-country');
 const thirdCity = document.querySelector('.third-city');
 const thirdCityIcon = document.querySelector('.third-city-icon');
 const thirdCityCondition = document.querySelector(
  '.third-city-condition'
);
 const thirdCityTemp = document.querySelector('.third-city-temp');
 const fourthCountry = document.querySelector('.fourth-country');
 const fourthCity = document.querySelector('.fourth-city');
 const fourthCityIcon = document.querySelector('.fourth-city-icon');
 const fourthCityCondition = document.querySelector(
  '.fourth-city-condition'
);
 const fourthCityTemp = document.querySelector('.fourth-city-temp');



export function renderUiFirstCity(one, two, three, four, five) {
    firstCountry.innerHTML = one;
    firstCity.innerHTML = two;
    firstCityIcon.src = three;
    firstCityCondition.innerHTML = four;
    firstCityTemp.innerHTML = `${five}&deg; C`;
  }
export  function renderUiSecondCity(six, seven, eight, nine, ten) {
    secondCountry.innerHTML = six;
    secondCity.innerHTML = seven;
    secondCityIcon.src = eight;
    secondCityCondition.innerHTML = nine;
    secondCityTemp.innerHTML = `${ten}&deg; C`;
  }
  
export  function renderUiThirdCity(eleven, twelve, thirteen, fourteen, fifteen) {
    thirdCountry.innerHTML = eleven;
    thirdCity.innerHTML = twelve;
    thirdCityIcon.src = thirteen;
    thirdCityCondition.innerHTML = fourteen;
    thirdCityTemp.innerHTML = `${fifteen}&deg; C`;
  }
  
export  function renderUiFourthCity(sixteen, seventeen, eighteen, ninteen, twenty) {
    fourthCountry.innerHTML = sixteen;
    fourthCity.innerHTML = seventeen;
    fourthCityIcon.src = eighteen;
    fourthCityCondition.innerHTML = ninteen;
    fourthCityTemp.innerHTML = `${twenty}&deg; C`;
  }

 export function renderUI(
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z,
    aa,
    ab,
    ac,
    ad,
    ae,
    af,
    ag,
    first,
    second
  ) {
    temp.innerHTML = `${a}&deg; C`;
    condition.innerHTML = b;
    locationspan.innerHTML = c;
    feelsLike.innerHTML = `${d}&deg; c`;
    humidity.innerHTML = e;
    uvIndex.innerHTML = f;
    wind.innerHTML = g;
    windDirection.innerHTML = h;
    windDegree.innerHTML = i;
    precip.innerHTML = j;
    gust.innerHTML = k;
    visibility.innerHTML = l;
    weatherIcon.src = m;
    topCurrentLocation.innerHTML = first + ', ' + second;
  
    firstDay.src = n;
    firstDayMax.innerHTML = o + '/';
    firstDayMin.innerHTML = p;
    firstDayDate.innerHTML = currentMonth;
    firstDayWeekday.innerHTML = today;
    secondDay.src = s;
    secondDayMax.innerHTML = t + '/';
    secondDayMin.innerHTML = u;
    secondDayDate.innerHTML = finalMonth[0];
    secondDayWeekday.innerHTML = secondDayy;
    thirdDay.src = x;
    thirdDayMax.innerHTML = y + '/';
    thirdDayMin.innerHTML = z;
    thirdDayDate.innerHTML = finalMonth[1];
    thirdDayWeekday.innerHTML = thirdDayy;
    fourthDay.src = ac;
    fourthDayMax.innerHTML = ad + '/';
    fourthDayMin.innerHTML = ae;
    fourthDayDate.innerHTML = finalMonth[2]; 
    fourthDayWeekday.innerHTML = fourthDayy;
  }