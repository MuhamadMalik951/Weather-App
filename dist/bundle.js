(()=>{"use strict";async function e(e){const t=await fetch(e);return await t.json()}const t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"],r=new Date;let c=r.getDay();const o=t[r.getDay()],a=[],i=[];for(let e=0;e<=3;e++)c=(c+1)%7,a[e]=t[c];const d=a[0],u=a[1],y=a[2];function s(e,t){return e+" "+t}const m=s(r.getDate(),n[r.getMonth()]);for(let e=0;e<4;e++){const t=new Date(r);t.setDate(r.getDate()+e+1);const c=n[t.getMonth()],o=s(t.getDate(),c);i[e]=o}const l=n[r.getMonth()];s(r.getDate(),l),new Date(r).setDate(r.getDate()+1);const f=document.querySelector(".temp"),p=document.querySelector(".condition"),q=document.querySelector(".location-span"),S=document.querySelector(".weather-icon"),M=document.querySelector(".feels-like"),L=document.querySelector(".humidity"),T=document.querySelector(".uv-index"),h=document.querySelector(".wind"),H=document.querySelector(".wind-direction"),g=document.querySelector(".wind-degree"),w=document.querySelector(".precip"),x=document.querySelector(".gust"),v=document.querySelector(".visibility"),$=document.querySelector(".top-current-location"),_=(document.querySelector(".checkbox"),document.querySelector(".first-day")),k=document.querySelector(".first-day-max"),C=document.querySelector(".first-day-min"),D=document.querySelector(".first-day-date"),F=document.querySelector(".first-day-weekday"),b=document.querySelector(".second-day"),I=document.querySelector(".second-day-max"),j=document.querySelector(".second-day-min"),E=document.querySelector(".second-day-date"),P=document.querySelector(".second-day-weekday"),A=document.querySelector(".third-day"),J=document.querySelector(".third-day-max"),N=document.querySelector(".third-day-min"),O=document.querySelector(".third-day-date"),B=document.querySelector(".third-day-weekday"),U=document.querySelector(".fourth-day"),K=document.querySelector(".fourth-day-max"),R=document.querySelector(".fourth-day-min"),V=document.querySelector(".fourth-day-date"),W=document.querySelector(".fourth-day-weekday"),z=document.querySelector(".first-country"),G=document.querySelector(".first-city"),Q=document.querySelector(".first-city-icon"),X=document.querySelector(".first-city-condition"),Y=document.querySelector(".first-city-temp"),Z=document.querySelector(".second-country"),ee=document.querySelector(".second-city"),te=document.querySelector(".second-city-icon"),ne=document.querySelector(".second-city-condition"),re=document.querySelector(".second-city-temp"),ce=document.querySelector(".third-country"),oe=document.querySelector(".third-city"),ae=document.querySelector(".third-city-icon"),ie=document.querySelector(".third-city-condition"),de=document.querySelector(".third-city-temp"),ue=document.querySelector(".fourth-country"),ye=document.querySelector(".fourth-city"),se=document.querySelector(".fourth-city-icon"),me=document.querySelector(".fourth-city-condition"),le=document.querySelector(".fourth-city-temp");async function fe(t){try{const pe=await e(`https://api.openweathermap.org/data/2.5/weather?q=${t}&APPID=20f7632ffc2c022654e4093c6947b4f4`),qe=await e(`https://api.weatherapi.com/v1/forecast.json?key=eeaa1ce488084abd988112354231812&q=${t}&days=4`),Se=await pe,Me=await qe;if(Se.base){const e=Me.location.name+", "+Me.location.country;n=Me.current.temp_c,r=Me.current.condition.text,c=e,a=Me.current.feelslike_c,s=Me.current.humidity,l=Me.current.uv,z=Me.current.wind_kph,G=Me.current.wind_dir,Q=Me.current.wind_degree,X=Me.current.precip_mm,Y=Me.current.gust_kph,Z=Me.current.vis_km,ee=Me.current.condition.icon,te=Me.forecast.forecastday[0].day.condition.icon,ne=Me.forecast.forecastday[0].day.maxtemp_c,re=Me.forecast.forecastday[0].day.mintemp_c,Me.forecast.forecastday[0].date,Me.forecast.forecastday[0].date,ce=Me.forecast.forecastday[1].day.condition.icon,oe=Me.forecast.forecastday[1].day.maxtemp_c,ae=Me.forecast.forecastday[1].day.mintemp_c,Me.forecast.forecastday[1].date,Me.forecast.forecastday[1].date,ie=Me.forecast.forecastday[2].day.condition.icon,de=Me.forecast.forecastday[2].day.maxtemp_c,ue=Me.forecast.forecastday[2].day.mintemp_c,Me.forecast.forecastday[2].date,Me.forecast.forecastday[2].date,ye=Me.forecast.forecastday[0].day.condition.icon,se=Me.forecast.forecastday[0].day.maxtemp_c,me=Me.forecast.forecastday[0].day.mintemp_c,Me.forecast.forecastday[0].date,Me.forecast.forecastday[0].date,le=Me.location.name,fe=Me.location.country,f.innerHTML=`${n}&deg; C`,p.innerHTML=r,q.innerHTML=c,M.innerHTML=`${a}&deg; c`,L.innerHTML=s,T.innerHTML=l,h.innerHTML=z,H.innerHTML=G,g.innerHTML=Q,w.innerHTML=X,x.innerHTML=Y,v.innerHTML=Z,S.src=ee,$.innerHTML=le+", "+fe,_.src=te,k.innerHTML=ne+"/",C.innerHTML=re,D.innerHTML=m,F.innerHTML=o,b.src=ce,I.innerHTML=oe+"/",j.innerHTML=ae,E.innerHTML=i[0],P.innerHTML=d,A.src=ie,J.innerHTML=de+"/",N.innerHTML=ue,O.innerHTML=i[1],B.innerHTML=u,U.src=ye,K.innerHTML=se+"/",R.innerHTML=me,V.innerHTML=i[2],W.innerHTML=y}else console.error("this is the error")}catch(e){}var n,r,c,a,s,l,z,G,Q,X,Y,Z,ee,te,ne,re,ce,oe,ae,ie,de,ue,ye,se,me,le,fe}const pe=document.querySelector(".temp"),qe=document.querySelector(".checkbox"),Se=document.querySelector(".feels-like"),Me=document.querySelector(".first-city-temp"),Le=document.querySelector(".second-city-temp"),Te=document.querySelector(".third-city-temp"),he=document.querySelector(".fourth-city-temp");function He(e){return(9*e/5+32).toFixed(1)}function ge(e){return(5*(e-32)/9).toFixed(1)}const we=document.querySelector("form"),xe=document.querySelector(".search");we.addEventListener("submit",(()=>{event.preventDefault(),fe(xe.value)})),qe.addEventListener("change",(()=>{qe.checked?(qe.value="on",pe.innerHTML=`${He(parseFloat(pe.textContent))}&deg; F`,Se.innerHTML=`${He(parseFloat(Se.textContent))}&deg; f`,Me.innerHTML=`${He(parseFloat(Me.textContent))}&deg; f`,Le.innerHTML=`${He(parseFloat(Le.textContent))}&deg; f`,Te.innerHTML=`${He(parseFloat(Te.textContent))}&deg; f`,he.innerHTML=`${He(parseFloat(he.textContent))}&deg; f`):(qe.value="off",pe.innerHTML=`${ge(parseFloat(pe.textContent))}&deg; C`,Se.innerHTML=`${ge(parseFloat(Se.textContent))}&deg; f`,Me.innerHTML=`${ge(parseFloat(Me.textContent))}&deg; f`,Le.innerHTML=`${ge(parseFloat(Le.textContent))}&deg; f`,Te.innerHTML=`${ge(parseFloat(Te.textContent))}&deg; f`,he.innerHTML=`${ge(parseFloat(he.textContent))}&deg; f`)})),"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((e=>{!async function(e,t){try{fe((await fetch(`https://api.weatherapi.com/v1/forecast.json?key=eeaa1ce488084abd988112354231812&q=${e},${t}&days=4`)).location.name)}catch(e){}}(e.coords.latitude,e.coords.longitude)}),(e=>{switch(e.code){case e.PERMISSION_DENIED:case e.POSITION_UNAVAILABLE:case e.TIMEOUT:}})),fe("Jalalpur Pirwala"),async function(t){const n=await e("https://api.weatherapi.com/v1/forecast.json?key=eeaa1ce488084abd988112354231812&q=Jalalpur Pirwala&days=4");var r,c,o,a,i;r=n.location.country,c=n.location.name,o=n.current.condition.icon,a=n.current.condition.text,i=n.current.temp_c,z.innerHTML=r,G.innerHTML=c,Q.src=o,X.innerHTML=a,Y.innerHTML=`${i}&deg; C`}(),async function(t){const n=await e("https://api.weatherapi.com/v1/forecast.json?key=eeaa1ce488084abd988112354231812&q=Khan Bela&days=4");var r,c,o,a,i;r=n.location.country,c=n.location.name,o=n.current.condition.icon,a=n.current.condition.text,i=n.current.temp_c,Z.innerHTML=r,ee.innerHTML=c,te.src=o,ne.innerHTML=a,re.innerHTML=`${i}&deg; C`}(),async function(t){const n=await e("https://api.weatherapi.com/v1/forecast.json?key=eeaa1ce488084abd988112354231812&q=Bahawalpur&days=4");var r,c,o,a,i;r=n.location.country,c=n.location.name,o=n.current.condition.icon,a=n.current.condition.text,i=n.current.temp_c,ce.innerHTML=r,oe.innerHTML=c,ae.src=o,ie.innerHTML=a,de.innerHTML=`${i}&deg; C`}(),async function(t){const n=await e("https://api.weatherapi.com/v1/forecast.json?key=eeaa1ce488084abd988112354231812&q=Lahore&days=4");var r,c,o,a,i;r=n.location.country,c=n.location.name,o=n.current.condition.icon,a=n.current.condition.text,i=n.current.temp_c,ue.innerHTML=r,ye.innerHTML=c,se.src=o,me.innerHTML=a,le.innerHTML=`${i}&deg; C`}()})();