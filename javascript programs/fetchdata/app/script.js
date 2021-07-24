function displayDetails(city) {
  let city_name = city.name;
  let humidity = city.main.humidity;
  let iconid = city.weather[0].icon;
  let country = city.sys.country;
  let timezone = city.timezone;
  let temp = city.main.temp;
  let temp_min = city.main.temp_min;
  let temp_max = city.main.temp_max;
  let weather_des = city.weather[0].description;
  let Pressure = city.main.pressure;
  let sealevel = city.main.sea_level;
  let latitude = city.coord.lat;
  let longitude = city.coord.lon;
  console.log(iconid);
  let html_data =
    `<div class="container-fluid car">
  <h1 class="text-center"><b>${city_name}<b></h1>

 <div class="row row1">
      <div class="col-lg-4 col-sm-4 text-center">
        <p>COUNTRY:${country}</p>
       
      </div>
      <div class="col-lg-4 col-sm-4 text-center">
      <p style="font-size:70px">${temp}°C</p>
      
      </div>
      <div class="col-lg-4 col-sm-4 text-center">
      <p class="text-uppercase">PRESSURE-${Pressure}</p>
      
      </div>
  
  </div>
  <div class="row row2">
  <div class="col-lg-4 col-md-4 col-sm-6 text-center">
  <p> humidity:${humidity}</p>
  </div>
  <div class="col-lg-4 col-md-4 col-sm-6  text-center">
  <p> Temp-max:${temp_max}</p>
  </div>
  <div class="col-lg-4 col-md-4 col-sm-6  text-center">
  <p> Temp-min:${temp_min}</p>
  </div>
    </div>`

  result.innerHTML = html_data;
}
function resetButton() {
  city.value = " ";
  result.innerHTML = ""
}
function fetchWeather() {

  let city_name = city.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=93c046e9370077994082d7249567b1db&units=metric`

  fetch(url).then(res => res.json()).then(data => displayDetails(data))

}