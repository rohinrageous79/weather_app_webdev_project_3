const apiKey="YOUR_API_KEY";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search= document.querySelector(".search input");
const search_btn= document.querySelector(".search button");
const weather_icon= document.querySelector(".weather-icon")

async function checkWeather(city){
    const response= await fetch(apiUrl + city.trim()  +`&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector('.error').style.display= "block";
        document.querySelector('.weather').style.display= "none";
    }else{
        let data= await response.json();
        console.log(data);
        
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
        document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";
        
        if(data.weather[0].main=="Clouds"){
            weather_icon.src="https://cdn-icons-png.flaticon.com/512/6122/6122561.png";
        }
        else if(data.weather[0].main=="Clear"){
            weather_icon.src="https://cdn-icons-png.flaticon.com/512/831/831682.png";
        }
         else if(data.weather[0].main=="Rain"){
            weather_icon.src="https://cdn-icons-png.flaticon.com/512/4834/4834585.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weather_icon.src="https://cdn-icons-png.flaticon.com/512/1458/1458966.png";
        }
        else if(data.weather[0].main=="Mist"){
            weather_icon.src="https://cdn-icons-png.flaticon.com/512/10630/10630000.png";
        }
        
        document.querySelector(".weather").style.display="block";
        document.querySelector('.error').style.display= "none";

    }
}

search_btn.addEventListener('click',function(){
    checkWeather(search.value);
});


