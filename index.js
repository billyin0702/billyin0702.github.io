const assignments_names = ['a0']
const assignment_content = {}

function renderAssignments(){
    // render assignments
    assignments_names.forEach(function(assignment_name) {
        var outputElement = document.getElementById(assignment_name);

        var content = assignement_content[assignment_name];

        outputElement.innerHTML = content;

        console.log("loaded assignment: " + assignment_name);
    })
}

function renderWeather(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${"Evanston"}&appid=${'18eef8705742dea3b3b25507fd5a787e'}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherDesc = document.getElementById('weather-desc');
            const weatherMainTemp = document.getElementById('weather-maintemp');
            const weatherFeelTemp = document.getElementById('weather-feeltemp');
            const weatherHumidity = document.getElementById('weather-humidity');

            weatherDesc.innerHTML = `${data.weather[0].description}`;
            weatherMainTemp.innerHTML = `${data.main.temp}°C`;
            weatherFeelTemp.innerHTML = `${data.main.feels_like}°C`;
            weatherHumidity.innerHTML = `${data.main.humidity} %`;
        })
        .catch(error => console.error(error));
}

  function realtimeClock() {
    
    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    var amPm = ( hours < 12 ) ? "AM" : "PM";

    hours = (hours > 12) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById('clock').innerHTML = 
        hours + "  :  " + minutes + "  :  " + seconds + " " + amPm;
    var t = setTimeout(realtimeClock, 500);

    // console.log(hours + "  :  " + minutes + "  :  " + seconds + " " + amPm);
}