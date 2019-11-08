# Project - 1

Members: 
	Loren Kolstad: Back-End
 	Adam Jetski: Front-End
 	Caitlan Jeffrey: Flaoting

Welcome to the National Park Geek Website!
The topic for our website was chosen because of our love for National Parks.

We wanted to make a website that was easy to use for the average park enthusiast or experienced camper!

We decided to use the libraries for Materialize and jQuery. We also included google fonts because our group preferred the Montserrat font.

HTML:

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-	scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    google-fonts
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Roboto&display=swap" rel="stylesheet">

    Materialized
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  
    <link rel="stylesheet" href="./assets/css/style.css">
  
    <title>National Park Geek</title>
	</head>

Included APIs
This page will help you get started with National Park Service API - Parks.

 
This is where you show your users how to set it up. You can use code samples, like this:

National Park Service API
Our love of National Parks and the Outdoors brought us together to use the National Park Service API.

JavaScript

/ API Key from National Park Service API (https://www.nps.gov/subjects/developer/api-documentation.htm)
var APIKey = "xxxxxxxxxxxvluWeO53DeEFgVLZfGUvCELS"

  // URL Variable
var queryURL = "https://developer.nps.gov/api/v1/parks?&api_key=" + APIKey

  $(document).ready(function() {

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

      // console.log resposne form National Park Service API
        console.log(response);
        console.log(response.data[22].fullName);
        console.log(response.data[22].description);
        
        // pre-selected parks for dynamically built cards
        var apiTitle1 = response.data[22].fullName;
        var apiContent1 = response.data[22].description;
        var stateCode1 = response.data[22].states;
        var parkCode1 = response.data[22].parkCode;
        var apiTitle2 = response.data[42].fullName;
        var apiContent2 = response.data[42].description;
        var stateCode2 = response.data[42].states;
        var parkCode2 = response.data[42].parkCode;
        var apiTitle3 = response.data[26].fullName;
        var apiContent3 = response.data[26].description;
        var stateCode3 = response.data[26].states;
        var parkCode3 = response.data[26].parkCode;
      
      
// we pre-built desired parks for our home page
      // building card - 1
        var card1Col = $("<div>").attr("class", "col s4");
        var card1 = $("<div>").attr("class","card");
        var card1Image = $("<img>").attr("src", "https://www.nps.gov/common/uploads/structured_data/3C7FE3B8-1DD8-B71B-0B91991C4D692710.jpg")
        card1Image.attr("class", "card-title");
        card1Image.attr("id", "c1");
        card1Image.attr("data-state", stateCode1);
        card1Image.attr("data-park", parkCode1);
        var spanTitle1 = $("<span>").attr("id","card-1-title");
        var cardContent1 = $("<div>").attr("class", "card-			content");
        cardContent1.attr("id", "card-1-content");
        spanTitle1.text(apiTitle1);
        cardContent1.text(apiContent1);

        card1.append(card1Image);
        card1.append(spanTitle1);
        card1.append(cardContent1);
        card1Col.append(card1);
        $("#card-row").append(card1Col);
OpenWeather API
The second choice for our required API was the weather of course! Every camper needs to know the weather before heading out on the trails!

JavaScript

// API Key from OpenWeatherMap API (https://openweathermap.com/)

  var weatherAPIKey = "xxxxx75a3e228f7eed9d35168238"
  var selectedNationalParkZipCode = "";

  // URL Variable
  var weatherQuery = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=" + weatherAPIKey;

  $(document).ready(function(){
    $.ajax({
      url: weatherQuery,
      method: "GET"
    }).then(function(weatherResponse){
      console.log(weatherResponse)

      var tempHigh = weatherResponse.main.temp_max;
      var tempLow = weatherResponse.main.temp_min;
      var humidity = weatherResponse.main.humidity
      var windSpeed = weatherResponse.wind.speed;

      var weather
      var card1Col = $("<div>").attr("class", "col s4");
        var card1 = $("<div>").attr("class","card");
        var card1Image = $("<img>").attr("src", "https://www.nps.gov/common/uploads/structured_data/3C7FE3B8-1DD8-B71B-0B91991C4D692710.jpg")
        card1Image.attr("class", "card-title");
    })
  })
 