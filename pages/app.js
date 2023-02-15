// cities
var cities = [
  {
    id: 1,
    cityName: "London",
  },
  {
    id: 2,
    cityName: "Kansas",
  },
  {
    id: 3,
    cityName: "Paris",
  },
  {
    id: 4,
    cityName: "German",
  },
  {
    id: 5,
    cityName: "Kolkata",
  },
  {
    id: 6,
    cityName: "Karimnagar",
  },
  {
    id: 7,
    cityName: "Tirupati",
  },
  {
    id: 8,
    cityName: "Odela",
  },
];

let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;
let quote;

switch (dayOfWeekNumber) {
  case 0:
    nameOfDay = "Sunday";
    quote = "Time to chillax!";
    break;
  case 1:
    nameOfDay = "Monday";
    quote = "Monday morning blues!";
    break;
  case 2:
    nameOfDay = "Tuesday";
    quote = "Taco Time!";
    break;
  case 3:
    nameOfDay = "Wednesday";
    quote = "Two more days to the weekend.";
    break;
  case 4:
    nameOfDay = "Thursday";
    quote = "The weekend is almost here...";
    break;
  case 5:
    nameOfDay = "Friday";
    quote = "Weekend is here!";
    break;
  case 6:
    nameOfDay = "Saturday";
    quote = "Time to party!";
    break;
}

let submit = document.querySelector("#submit");
let input = document.querySelector(".cities");
let getCityName = document.querySelector("#cityName");
let temp = document.querySelector("#tmp");
let Humidity = document.querySelector("#Humidity");
let description = document.querySelector("#description");
let max_tmp = document.querySelector("#max-tmp");

const CitiesName = () => {
  cities.forEach((getCities) => {
    input.innerHTML +=
      '<option value="' +
      getCities.cityName +
      '">' +
      getCities.cityName +
      "</option>";
  });
};
CitiesName();

submit.addEventListener("click", () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=2344b8518dad4a5de3e32d5b1d95bbf6"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      tempValue = data["main"]["temp"];
      humi = data["main"]["humidity"];
      maxTmp = data["main"]["feels_like"];

      nameCity = data["name"];
      console.log(tempValue);

      getCityName.innerHTML = nameCity;
      Humidity.innerHTML = "Humidity - " + humi + "%";
      max_tmp.innerHTML = maxTmp;
      temp.innerHTML = tempValue;

      //Display the day of the week
      let weekdayDiv = document.getElementById("weekday");
      weekdayDiv.innerHTML = `${nameOfDay}`;

      //Display quote
      let dateFormat1 = moment().format("D-MM-YYYY");

      let quoteDiv = document.getElementById("phrase");
      quoteDiv.innerHTML = dateFormat1;
    });
});
