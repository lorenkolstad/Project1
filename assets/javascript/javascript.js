
// NATIONAL PARK API CALL

  // API Key from National Park Service API (https://www.nps.gov/subjects/developer/api-documentation.htm)
  var APIKey = "wHs10WlfqBFYqXmTvluWeO53DeEFgVLZfGUvCELS"

  // URL Variable
  var queryURL = "https://developer.nps.gov/api/v1/parks?&api_key=" + APIKey

  $(document).ready(function(){

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      // console.log resposne form National Park Service API
      console.log(response);
      console.log(response.data[22].fullName);
      console.log(response.data[22].description);
      
      // pre-selected parks for dynamically built cards
        // card-1
        var parkName1 = response.data[22].fullName
        var parkContent1 = response.data[22].description
        var stateCode1 = response.data[22].states
        var parkCode1 = response.data[22].parkCode

          // building card - 1
          var cardColumn1 = $("<div>").attr("class", "col s4")
          var card1 = $("<div>").attr("class", "card")
          var cardImage1 = $("<div>").attr("class", "card-image")
            cardImage1 = $("<img>").attr("src", "https://www.nps.gov/common/uploads/structured_data/3C7FE3B8-1DD8-B71B-0B91991C4D692710.jpg")
            cardImage1.attr("data-state", stateCode1)
            cardImage1.attr("data-park", parkCode1)
          var cardTitle1 = $("<div>").attr("class", "card-title")
          var cardContent1 = $("<div>").attr("class", "card-content")
      
          cardTitle1.text(parkName1)
          cardContent1.text(parkContent1)
          card1.append(cardImage1)
          card1.append(cardTitle1)
          card1.append(cardContent1)
          cardColumn1.append(card1)
          $("#card-row").append(cardColumn1)

        // card-2
        var parkName2 = response.data[42].fullName
        var parkContent2 = response.data[42].description
        var stateCode2 = response.data[42].states
        var parkCode2 = response.data[42].parkCode

          // building card - 2
          var cardColumn2 = $("<div>").attr("class", "col s4")
          var card2 = $("<div>").attr("class", "card")
          var cardImage2 = $("<div>").attr("class", "card-image")
            cardImage2 = $("<img>").attr("src", "https://www.nps.gov/common/uploads/structured_data/70B0FFC7-1DD8-B71B-0B09465A0A0048AD.jpg")
            cardImage2.attr("data-state", stateCode2)
            cardImage2.attr("data-park", parkCode2)
          var cardTitle2 = $("<div>").attr("class", "card-title")
          var cardContent2 = $("<div>").attr("class", "card-content")
    
          cardTitle2.text(parkName2)
          cardContent2.text(parkContent2)
          card2.append(cardImage2)
          card2.append(cardTitle2)
          card2.append(cardContent2)
          cardColumn2.append(card2)
          $("#card-row").append(cardColumn2)

        //card-3
        var parkName3 = response.data[26].fullName
        var parkContent3 = response.data[26].description
        var stateCode3 = response.data[26].states
        var parkCode3 = response.data[26].parkCode

          // building card - 3
          var cardColumn3 = $("<div>").attr("class", "col s4")
          var card3 = $("<div>").attr("class", "card")
          var cardImage3 = $("<div>").attr("class", "card-image")
            cardImage3 = $("<img>").attr("src", "https://www.nps.gov/common/uploads/structured_data/3C798EAB-1DD8-B71B-0BC4BEFB197F2C90.jpg")
            cardImage3.attr("data-state", stateCode3)
            cardImage3.attr("data-park", parkCode3)
          var cardTitle3 = $("<div>").attr("class", "card-title")
          var cardContent3 = $("<div>").attr("class", "card-content")
    
          cardTitle3.text(parkName3)
          cardContent3.text(parkContent3)
          card3.append(cardImage3)
          card3.append(cardTitle3)
          card3.append(cardContent3)
          cardColumn3.append(card3)
          $("#card-row").append(cardColumn3)
    })
    tabs()
    carousel()
  })

// creating search results for national park api
  $("#parks-search").on("click", function(){

    // on search feature, logging input search value
    searchNationalPark = $("#input-park").val().trim()
    console.log(searchNationalPark)
    search(searchNationalPark);
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
        var parkCode= searchResponse.data[i].id;
        var stateCode = searchResponse.data[i].states;
        var parkName = searchResponse.data[i].fullName;
        var parkContent = searchResponse.data[i].description;
        var parkDirections = searchResponse.data[i].directionsInfo;

        // creating carousel element
        var images = searchResponse.data[i].images
        var carousel = $("<div>").attr("class", "carousel carousel-slider")
        var carouselItem = $("<a>").attr("class", "carousel-item")
        var carouselImage = `<img src=${images[0].url}>`

        carouselItem.append(carouselImage)

        // looping through all available images
        for (var j = 1; j < images.length; j++) {
          console.log(images[j].url)
          var nextImage = `<img src=${images[j].url}>`
        }
        carouselItem.append(nextImage)

      // searched park cards
        var cardColumn = $("<div>").attr("class", "col s12")
        var card = $("<div>").attr("class", "card")
        var cardImage = $("<img>").attr("src", carouselImage)
          cardImage.attr("data-state", stateCode)
          cardImage.attr("data-park", parkCode)
        var cardTitle = $("<div>").attr("class", "card-title")
        var cardContent = $("<div>").attr("class", "card-content")
        var cardDirections = $("<div>").attr("class", "card-directions")
        
        carousel.append(carouselItem)
        carouselItem.append(cardImage)

        cardTitle.text(parkName)
        cardContent.text(parkContent)
        cardDirections.text(parkDirections)

        card.append(carousel)
        card.append(cardTitle)
        card.append(cardContent)
        card.append(cardDirections)
        cardColumn.append(card)
        $("#card-show-row").prepend(cardColumn)
      }
    })
  }


// FIREBASE

  // Firebase Configuration
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

    $("#member-name").text(firstName + " " + lastName);
    $("#member-email").text(email);
    $("#member-comment").text(message);
  });

  database.ref().orderByChild("dateAdded").on("child_added", function(childSnapshot){
    console.log(childSnapshot.val().firstName);
    console.log(childSnapshot.val().lastName);
    console.log(childSnapshot.val().email);
    console.log(childSnapshot.val().message);
  })


  $("#weather-search").on("click", function(){
    
    // on search feature, logging input search value
    var weatherCityName = $("#input-weather").val().trim()
    console.log(weatherCityName)
    weather(weatherCityName);
  })

// OPENWEATHERMAP API CALL
var weatherAPIKey = "a441b767e75a3e228f7eed9d35168238"

function weather(weatherCityName) {
  var weatherQuery = "https://api.openweathermap.org/data/2.5/weather?q=" + weatherCityName + "&APPID=" + weatherAPIKey;
  
    $.ajax({
      url: weatherQuery,
      method: "GET"
    }).then(function(weatherResponse){
      console.log(weatherResponse)

      var tempHigh = weatherResponse.main.temp_max;
      var calcTempHigh = "";
      var tempLow = weatherResponse.main.temp_min;
      var calcTempLow = ""
      var humidity = weatherResponse.main.humidity
      var windSpeed = weatherResponse.wind.speed;
      var calcWindSpeed = windSpeed * 2.20;

      console.log("Wind Speed: " + calcWindSpeed + "mph")

      // building card - 3
      var cardColumn = $("<div>").attr("class", "col s12")
      var card = $("<div>").attr("class", "card")
      var cardInfo = $("<div>").attr("class", "card-info")
        cardInfo.attr("data", calcWindSpeed)
      var cardTitle = $("<h4>", "Weather")
      
        // cardTitle.text(cardTitle)
        cardColumn.append(card)
        $("#card-show-row").prepend(cardColumn)
    })
  }


function tabs(){
  $(".search-weather").hide()
  $("#searched-weather").hide()
  $("#weather-search").hide()

  $("#btn-search").on("click", function(){
    $(".search-parks").show()
    $(".searched-parks").show()
    $("#featured-parks").show()
    $("#parks-search").show()

    $("#weather-search").hide()
    $(".search-weather").hide()
    $(".searched-weather").hide()
    console.log("hi")
  })

  $("#btn-weather").on("click", function(){
    $(".search-weather").show()
    $("#searched-weather").show()
    $("#weather-search").show()

    $(".search-parks").hide()
    $(".searched-parks").hide()
    $("#featured-parks").hide()
    $("#parks-search").hide()
    console.log("hello")
  })
}

function carousel() {
  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });
}