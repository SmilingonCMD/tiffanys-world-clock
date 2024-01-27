function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  losAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");

  losAngelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small>]");

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");

  tokyoDateElement.innerHTML = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");

  tokyoTimeElement.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("h:mm:ss [<small>]A[</small>]");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss "
          )}<small>${cityTime.format("A")}</small></div>
        `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
