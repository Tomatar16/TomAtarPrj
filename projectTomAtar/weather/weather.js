const shoWeather = () => {
  let con = document.querySelector(".container");
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=32.08&longitude=34.78&daily=temperature_2m_max&current_weather=true&timezone=auto"
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json);
      for (let i = 0; i < json.daily.time.length; i++) {
        con.innerHTML += `<div class="mezeg">
        <p class="day">${json.daily.time[i]}</p>
        <p class="wet">${json.daily.temperature_2m_max[i]}</p>
        </div>`;
      }
    });
};

window.addEventListener("load", () => {
  let btn = document.querySelector(".btn");
  btn.addEventListener("click", () => {
    shoWeather();
  });
});
