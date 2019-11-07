
// API Key from National Park Service API (https://www.nps.gov/subjects/developer/api-documentation.htm)
var APIKey = "wHs10WlfqBFYqXmTvluWeO53DeEFgVLZfGUvCELS"

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

        // building card - 1
        var card1Col = $("<div>").attr("class", "col s4");
        var card1 = $("<div>").attr("class","card");
        var card1Image = $("<img>").attr("src", "https://www.nps.gov/common/uploads/structured_data/3C7FE3B8-1DD8-B71B-0B91991C4D692710.jpg")
        card1Image.attr("class", "card-title");
        card1Image.attr("id", "c1");
        card1Image.attr("data-state", stateCode1);
        card1Image.attr("data-park", parkCode1);
        var spanTitle1 = $("<span>").attr("id","card-1-title");
        spanTitle1.attr("class","card-title");
        var cardContent1 = $("<div>").attr("class", "card-content");
        cardContent1.attr("id", "card-1-content");
        spanTitle1.text(apiTitle1);
        cardContent1.text(apiContent1);

        card1.append(card1Image);
        card1.append(spanTitle1);
        card1.append(cardContent1);
        card1Col.append(card1);
        $("#card-row").append(card1Col);

        // building card - 2
        var card2Col = $("<div>").attr("class", "col s4");
        var card2 = $("<div>").attr("class","card");
        var card2Image = $("<img>").attr("src", "https://www.nps.gov/common/uploads/structured_data/70B0FFC7-1DD8-B71B-0B09465A0A0048AD.jpg")
        card2Image.attr("class", "card-title");
        card2Image.attr("id", "c2");
        card2Image.attr("data-state", stateCode2);
        card2Image.attr("data-park", parkCode2);
        var spanTitle2 = $("<span>").attr("id","card-2-title");
        spanTitle2.attr("class","card-title");
        var cardContent2 = $("<div>").attr("class", "card-content");
        cardContent2.attr("id", "card-2-content");
        spanTitle2.text(apiTitle2);
        cardContent2.text(apiContent2);

        card2.append(card2Image);
        card2.append(spanTitle2);
        card2.append(cardContent2);
        card2Col.append(card2);
        $("#card-row").append(card2Col);

        // building card - 3
        var card3Col = $("<div>").attr("class", "col s4");
        var card3 = $("<div>").attr("class","card");
        var card3Image = $("<img>").attr("src", "https://www.nps.gov/common/uploads/structured_data/3C798EAB-1DD8-B71B-0BC4BEFB197F2C90.jpg")
        card3Image.attr("class", "card-title");
        card3Image.attr("id", "c3");
        card3Image.attr("data-state", stateCode3);
        card3Image.attr("data-park", parkCode3);
        var spanTitle3 = $("<span>").attr("id","card-3-title");
        spanTitle3.attr("class","card-title");
        var cardContent3 = $("<div>").attr("class", "card-content");
        cardContent3.attr("id", "card-3-content");
        spanTitle3.text(apiTitle3);
        cardContent3.text(apiContent3);

        card3.append(card3Image);
        card3.append(spanTitle3);
        card3.append(cardContent3);
        card3Col.append(card3);
        $("#card-row").append(card3Col);
    });
  });

// creating search results for national park api
  $("#submit-index").on("click", function(){

    // on search feature, logging input search value
    searchNationalPark = $("#input").val().trim()
    searchWeather = $("#input").val().trim()
    console.log(searchNationalPark)
    search(searchNationalPark);
    weather(searchWeather);
  })

  //search function that acutally searches the National Park Service API
  function search(searchNationalPark){
    var queryURLSearch = "https://developer.nps.gov/api/v1/parks?q=" + searchNationalPark + "&api_key=" + APIKey + "&fields=images";
    console.log (queryURLSearch);

    $.ajax({
      url: queryURLSearch,
      method: "GET"
    }).then(function(searchResponse) {
      console.log(searchResponse)

      // creating loop to grab information to dynamically build searched park card
      for (var i = 0; i < searchResponse.data.length; i++) {
        var idImg = ""
        var parkCode= searchResponse.data[i].id;
        var stateCode = searchResponse.data[i].states;
        var apiTitle = searchResponse.data[i].fullName;
        var apiContent = searchResponse.data[i].description;
        var latLong = searchResponse.data[i].latLong;
          console.log(latLong)
          console.log(idImg, "*****", stateCode, "*****", parkCode, "*****", apiTitle, "*****" ,apiContent);

        // creating Bootstrap carousel component
          var images = searchResponse.data[i].images
          var carousel = $("<div>").attr("class", "carousel slide")
          carousel.attr("data-ride", "carousel")
          carousel.attr("data-interval", "false")
          var carouselInner = $("<div>").attr("class", "carousel-inner")
          carousel.append(carouselInner)
          var image = `<div class="carousel-item active"><img src=${images[0].url} class="d-block w-100"></div>`
          carouselInner.append(image);

          for (var j =1; j < images.length; j++) {
            console.log(images[j].url)

            var image = `<div class="carousel-item"><img src=${images[j].url} class="d-block w-100"></div>`
            carouselInner.append(image);
          }

          // building searched park cards
          var cardCol = $("<div>").attr("id", "searched-parks");
          var card = $("<div>").attr("class","card");
          var cardImage = $("<div>").attr("class", "image");
          var cardImage = $("<img>").attr("src", "https://www.nps.gov/common/uploads/structured_data/" + idImg + ".jpg")
          cardImage.attr("class", "card-title");
          cardImage.attr("id", "c3");
          cardImage.attr("data-state", stateCode);
          cardImage.attr("data-park", parkCode);
          var spanTitle = $("<span>").attr("id","card-3-title");
          spanTitle.attr("class","card-title");
          var cardContent = $("<div>").attr("class", "card-content");
          cardContent.attr("id", "card-3-content");
          // var weather = $("<a class='waves-effect waves-light btn'>Get Weather</a>");
          // weather.attr("id", "weather");
          spanTitle.text(apiTitle);
          cardContent.text(apiContent);
          
          card.append(carousel);
          card.append(spanTitle);
          card.append(cardContent);
          // card.append(weather);
          cardCol.append(card);
          $("#searched-parks").prepend(cardCol);
      }
    });
  }

// Firebase 
var firebaseConfig = {
    apiKey: "AIzaSyCi2FqKo_Pwcj7Z_ImIJ4Rlwy89QRwjOL8",
    authDomain: "project1-18df4.firebaseapp.com",
    databaseURL: "https://project1-18df4.firebaseio.com",
    projectId: "project1-18df4",
    storageBucket: "project1-18df4.appspot.com",
    messagingSenderId: "178823515374",
    appId: "1:178823515374:web:91f4ee2ea935188314b7ff"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  var firstName = "";
  var lastName = "";
  var email = "";
  var message = "";

  $("#submit").on("click", function(event){
    event.preventDefault();

    firstName = $("#first_name").val().trim();
    lastName = $("#last_name").val().trim();
    email = $("#email").val().trim();
    message = $("#input").val().trim();

    database.ref().push({
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
      dateAdded: firebase.database.ServerValue.TIMESTAMP,
    });
  });

  database.ref().orderByChild("dateAdded").on("child_added", function(childSnapshot){
    console.log(childSnapshot.val().firstName);
    console.log(childSnapshot.val().lastName);
    console.log(childSnapshot.val().email);
    console.log(childSnapshot.val().message);

    $("#comments").append("<div class='card'>")
  })

  $(document).on("click", "#c1", function (event) {
    console.log(event.target);
    var state = $(event.target).data("state");
    var park = $(event.target).data("park");
    console.log(state);
    console.log(park);
    modalQuery(state, park);
  })

  $(document).on("click", "#c2", function (event) {
    console.log(event.target);
    var state = $(event.target).data("state");
    var park = $(event.target).data("park");
    console.log(state);
    console.log(park);
    modalQuery(state, park);
  })

  $(document).on("click", "#c3", function (event) {
    console.log(event.target);
    var state = $(event.target).data("state");
    var park = $(event.target).data("park");
    console.log(state);
    console.log(park);
    modalQuery(state, park);
  })

  function modalQuery(state, park) {
    var modalURL = "https://developer.nps.gov/api/v1/parks?parkCode=" + park + "&stateCode=" + state + "&api_key=" + APIKey

    console.log(modalURL);
    $.ajax({
      url: modalURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });
  };

  $("#card").on("click",function(){
    console.log("you got clicked");
  })

// API Key from OpenWeatherMap API (https://openweathermap.com/)
  var weatherAPIKey = "a441b767e75a3e228f7eed9d35168238"

  // search function for wather
  function weather(searchWeather){
    var city = $("#input").val().trim()
    console.log(city)
    var weatherQuery = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + weatherAPIKey;
    console.log (weatherQuery);

    $.ajax({
      url: weatherQuery,
      method: "GET"
    }).then(function(weatherResponse){
      console.log(weatherResponse)

      var tempMin = weatherResponse.main.temp_min
      var tempMax = weatherResponse.main.temp_max
      var humidity = weatherResponse.main.humidity
      var windSpeed = weatherResponse.wind.speed
      var currentConditions = weatherResponse.weather[0].description

      var convertedTempMin = ((tempMin - 273.15)*9)/5 + 32;
      var convertedTempMax = ((tempMax - 273.15)*9)/5 + 32;
      var windSpeed = windSpeed * 2.236
      
      console.log(currentConditions)
      console.log("Humidity: " + humidity + "%")
      console.log("Temp Low: " + convertedTempMin + "F")
      console.log("Temp High: " + convertedTempMax + "F")
      console.log("Wind Speed: " + windSpeed + "mph")

      var weatherCol = $("<div>").attr("class", "col s12")
      var weatherCard = $("<div>").attr("class", "card")
      var weatherTempMin = $("<p>").attr(tempMin)
      var weatherTempMax = $("<p>").attr(tempMax)

      weatherCard.append(weatherTempMin)
      weatherCard.append(weatherTempMax)
      weatherCol.append(weatherCard)
      $("#card-row").append(weatherCol)
    })
  }

  M.toast({html: 'Leave us a message!'}).window
