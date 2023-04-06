
const DefaultPlace="india";
const CheckCity="Delhi";

const key="d741672fd00b7d203ff4f0c79cc44650";


let WeatherContainer = document.querySelector("weather-container")
let currentdate = document.querySelector("date");
let currenttime = document.getElementById("time");
let city = document.getElementById("location");
let searchcity = document.getElementById("search");
let searchbutton = document.getElementById("button");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity");
let condition = document.getElementById("climate");
let windspeed = document.getElementById("wind");
let ErrorMsg =document .getElementById("ErrorMsg");



let day1 = document.querySelector("day1");
let temp1 = document.getElementById("temp1");
let date1 = document.getElementById("date1");
let time1 = document.getElementById("time1");
let humidity1 = document.getElementById("humidity1");
let windspeed1 = document.getElementById("wind1");
let condition1 = document.getElementById("climate1");


let dY2= document.querySelector("day2");
let temp2 = document.getElementById("temp2");
let date2 = document.getElementById("date2");
let time2 = document.getElementById("time2");
let humidity2 = document.getElementById("humidity2");
let windspeed2 = document.getElementById("wind2");
let condition2 = document.getElementById("climate2");


let day3 = document.querySelector("day3");
let temp3 = document.getElementById("temp3");
let date3 = document.getElementById("date3");
let time3 = document.getElementById("time3");
let humidity3 = document.getElementById("humidity3");
let windspeed3 = document.getElementById("wind3");
let condition3 = document.getElementById("climate3");


let day4 = document.querySelector("day4");
let temp4 = document.getElementById("temp4");
let date4 = document.getElementById("date4");
let time4 = document.getElementById("time4");
let humidity4 = document.getElementById("humidity4");
let windspeed4 = document.getElementById("wind4");
let condition4 = document.getElementById("climate4");


let day5 = document.querySelector("day5");
let temp5 = document.getElementById("temp5");
let date5 = document.getElementById("date5");
let time5 = document.getElementById("time5");
let humidity5 = document.getElementById("humidity5");
let windspeed5 = document.getElementById("wind5");
let condition5 = document.getElementById("climate5");


let day6 = document.querySelector("day6");
let temp6= document.getElementById("temp6");
let date6 = document.getElementById("date6");
let time6 = document.getElementById("time6");
let humidity6 = document.getElementById("humidity6");
let windspeed6 = document.getElementById("wind6");
let condition6= document.getElementById("climate6");


let day7 = document.querySelector("day7");
let temp7 = document.getElementById("temp7");
let date7 = document.getElementById("date7");
let time7 = document.getElementById("time7");
let humidity7 = document.getElementById("humidity7");
let windspeed7 = document.getElementById("wind7");
let condition7 = document.getElementById("climate7");


searchbutton.addEventListener('click',(event)=>{
    let len=searchcity.value
    if(searchcity.value.match(CheckCity) && len.length!=0){
        getWeather(searchcity.value);
    }
    else{
        ErrorMsg.style.opacity =1;
        ErrorMsg.innerHTML ="enter valid city";
        ErrorMsg.style.backgroundColor="red";
        HideErrorMsg();
        searchcity.focus();
        searchcity.value="";
    }
})





function getWeather(city){
    const url = `api.openweathermap.org/data/2.5/forecast/daily?city=${city}&cnt=${7}&appid=${key}`;

    fetch(url).then((resp) => resp.json())
    .then(data =>{
        ErrorMsg.style.opacity =1;
        ErrorMsg.style.backgroundColor="green";
        ErrorMsg.innerHTML = `${city}'s Weather Deatails Show`;
        HideErrorMsg();
        return showWeather(data)

    })
    .catch(() =>
    {
        ErrorMsg.style.opacity =1;
        ErrorMsg.style.backgroundColor="red";
        ErrorMsg.innerHTML =`${city} not found`;
        searchcity.focus();
        searchcity.value="";
        HideErrorMsg();
    })
}

const showWeather =(weatherdata) => {
     // !if there is any error remove the comment from console.log(WeatherData);to look for the data which comes from API
     // console.log(weatherdata)

     city.innerHTML = `${weatherdata.location.country}`;
     temperature.innerHtml =`${weatherdata.current.temp_c}`;
     condition.innerHTML =`${weatherdata.current.condition.text}`;
     windspeed.innerHTML =`${weather.current.wind_kph}`;
     humidity.innerHTML =`${weather.current.humidity}`;


     day1.innerHTML =  `${weatherdata.forecast.forecastday[1].date}`;
     temp1.innerHTML =  `${weatherdata.forecast.forecastday[1].day.avgtemp_c}`+"&deg;c;";
     humidity1.innerHTML =`${weatherdata.forecast.forecastday[1].day.avghumidity}`+"&percent;";
     windspeed1.innerHTML =`${weatherdata.forecast.forecastday[1].day.maxtemp_c}`+"km/h";
    

     day2.innerHTML =  `${weatherdata.forecast.forecastday[2].date}`;
     temp2.innerHTML =  `${weatherdata.forecast.forecastday[2].day.avgtemp_c}`+"&deg;c;";
     humidity2.innerHTML =`${weatherdata.forecast.forecastday[2].day.avghumidity}`+"&percent;";
     windspeed2.innerHTML =`${weatherdata.forecast.forecastday[2].day.maxtemp_c}`+"km/h";

    
     day3.innerHTML = `${weatherdata.forecast.forecastday[3].date}`;
     temp3.innerHTML =  `${weatherdata.forecast.forecastday[3].day.avgtemp_c}`+"&deg;c;";
      humidity3.innerHTML =`${weatherdata.forecast.forecastday[3].day.avghumidity}`+"&percent;";
      windspeed3.innerHTML =`${weatherdata.forecast.forecastday[3].day.maxtemp_c}`+"km/h";


      day4.innerHTML =  `${weatherdata.forecast.forecastday[4].date}`;
      temp4.innerHTML =  `${weatherdata.forecast.forecastday[4].day.avgtemp_c}`+"&deg;c;";
       humidity4.innerHTML =`${weatherdata.forecast.forecastday[4].day.avghumidity}`+"&percent;";
       windspeed4.innerHTML =`${weatherdata.forecast.forecastday[4].day.maxtemp_c}`+"km/h";


       day5.innerHTML =  `${weatherdata.forecast.forecastday[5].date}`;
       temp5.innerHTML =  `${weatherdata.forecast.forecastday[5].day.avgtemp_c}`+"&deg;c;";
        humidity5.innerHTML =`${weatherdata.forecast.forecastday[5].day.avghumidity}`+"&percent;";
        windspeed5.innerHTML =`${weatherdata.forecast.forecastday[5].day.maxtemp_c}`+"km/h";


        day6.innerHTML =  `${weatherdata.forecast.forecastday[6].date}`;
        temp6.innerHTML =  `${weatherdata.forecast.forecastday[6].day.avgtemp_c}`+"&deg;c;";
         humidity6.innerHTML =`${weatherdata.forecast.forecastday[6].day.avghumidity}`+"&percent;";
         windspeed6.innerHTML =`${weatherdata.forecast.forecastday[6].day.maxtemp_c}`+"km/h";

         day7.innerHTML =  `${weatherdata.forecast.forecastday[7].date}`;
         temp7.innerHTML =  `${weatherdata.forecast.forecastday[7].day.avgtemp_c}`+"&deg;c;";
          humidity7.innerHTML =`${weatherdata.forecast.forecastday[7].day.avghumidity}`+"&percent;";
          windspeed7.innerHTML =`${weatherdata.forecast.forecastday[7].day.maxtemp_c}`+"km/h";


}

let SystemDate =new date();
currentdate.innerHTML =SystemDate.getDate()+"/"+ (SystemDate.getMonth()+1)+"/"+ SystemDate.getFullYear();
function startTime()
{
    const today=new Date();
    let h =today.getHours();
    let m =today.getMinutes();
    let s =today.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
    currenttime.innerHTML =h + ":" + m + ":" + $;
    setTimeout(startTime,1000);
}


function checkTime(i)
{
    if(i<10)
    {
        i="0"+i
    };
    return i;
}

function HideErrorMsg()
{
    setTimeout(() => {
        HideErrorMsg.style.opacity = 0;
    },5000);
}