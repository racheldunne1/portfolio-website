// MetaWeather API for London
fetch('https://www.metaweather.com/api/location/44418/')
.then(response => response.json())
.then(data => {
    const weather = data.consolidated_weather[0].weather_state_name;
    document.getElementById('weather').innerText = `Weather in London: ${weather}`;
})
.catch(err => console.error('Weather API Error:', err));

// Contact Form Alert
document.getElementById("contactForm").onsubmit = function(e) {
    e.preventDefault();
    alert("Thank you for your message!");
};



