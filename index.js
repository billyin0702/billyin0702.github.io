const assignments_names = ['a0']
const assignment_content = {}
const quotes_categories = ["age", "alone", "amazing", "anger", 
"architecture", "art", "attitude", "beauty", "best", "birthday", 
"business", "car", "change", "communications", "computers", "cool", 
"courage", "dad", "dating", "death", "design", "dreams", "education", 
"environmental", "equality", "experience", "failure", "faith", "family", 
"famous", "fear", "fitness", "food", "forgiveness", "freedom", "friendship", 
"funny", "future", "good", "government", "graduation", "great", "happiness", 
"health", "history", "home", "hope", "humor", "imagination", "inspirational", 
"intelligence", "jealousy", "knowledge", "leadership", "learning", "legal", "life", 
"love", "marriage", "medical", "men", "mom", "money", "morning", "movies", "success"];


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
}


function getQuote(){
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${quotes_categories[Math.floor(Math.random() * quotes_categories.length)]}`,{
        method: 'GET',
        headers: {
            'X-Api-Key': 'v+PRdHUfgSessDXDhCVjgQ==0c87KsoDNNntrwyj'
        },
    })
        .then(response => response.json())
        .then(data => {
            const quote = document.getElementById('quote');
            const author = document.getElementById('author');
            // const category = document.getElementById('category');

            quote.innerHTML = `"${data[0].quote}"`;
            author.innerHTML = `~ ${data[0].author}`;
            // category.innerHTML = `${data.category}`;
        })
        .catch(error => console.error(error));
}


window.onload = function() {
    // When everything has loaded, set the visibility of the body to visible
    document.body.style.visibility = "visible";
};

// // Focus on Search Bar on Load
// window.addEventListener('load', function () {
//     document.getElementById("uniqueGSId").focus();
//     console.log("Web page Loaded");
// });