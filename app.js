let getWeather = () => { 
    let cityName = document.querySelector("#cityName").value
    
    
    
    axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=169c99e240ebdd03d28f6795890fc587&q=${cityName}`)
    
    .then(function (response)
    
    {
    
    console.log("response is success");
    console.log(response.data);
    
    
    document.querySelector("#result").innerHTML = `<h1>${response.data.name} </h1>
    <h5 class="font">   Temperature    :  ${response.data.main.temp} °C  | °F  </h5>
   
    <h4 class="font">   Country Code :              ${response.data.sys.country} </h4>
    <h5 class="font">   Wind Speed      :          ${response.data.wind.speed} </h5> 
    <h4 class="font">   Humidity         :      ${response.data.main.humidity}  % </h4> 
    <h5 class="font">  Feels Like         :     ${response.data.main.feels_like}  </h5> 
     `
    })  
    
    
    .catch(function (error)   {
    console.log(error);
    
    })
    }
    