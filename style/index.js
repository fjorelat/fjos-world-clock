function updateTime() {
  let athensElement = document.querySelector("#athens");
  let athensDateElement = athensElement.querySelector(".date");
  let athensTimeElement = athensElement.querySelector(".time");
  let athensTime = moment().tz("Europe/Athens");

  athensDateElement.innerHTML = athensTime.format("MMMM Do YYYY");
  athensTimeElement.innerHTML = athensTime.format(
    "h:mm:ss:SS [<small>] A [</small>]"
  );

  let dublinElement = document.querySelector("#dublin");
  let dublinDateElement = dublinElement.querySelector(".date");
  let dublinTimeElement = dublinElement.querySelector(".time");
  let dublinTime = moment().tz("Europe/Dublin");

  dublinDateElement.innerHTML = dublinTime.format("MMMM Do YYYY");
  dublinTimeElement.innerHTML = dublinTime.format(
    "h:mm:ss:SS [<small>] A [</small>]"
  );
}

function updateCity(event) {
  let cityTimezome = event.target.value;
  let cityName = cityTimezome.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezome);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city>
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format(
        "h:mm:ss:SS [<small>] A [</small>]"
      )}  </div>  
    </div>
        `;
}

updateTime();
setInterval(updateTime, 1);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
