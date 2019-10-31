

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

  var APIKey = "wHs10WlfqBFYqXmTvluWeO53DeEFgVLZfGUvCELS"
  
//   var searchVariable = ""
  var queryURL = "https://developer.nps.gov/api/v1/parks?&api_key=" + APIKey

  $(document).ready(function() {

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
        // console.log(queryURL);
        console.log(response);
        console.log(response.data[22].fullName);
        console.log(response.data[22].description);
            
        var cardTitle = response.data[22].fullName;

        // $("#card2title").text(cardTitle);
        // $("#card2content").text(response.data[22].description);

        var card1 = `<div class= "card" id="card1">`

        var card1image = `<img src= ${response.data[22].images.url}`
    
        $(".col s4").append(card1);
        $(card1image).append(card1);
    
    
    
    
    });


        // var element = `<img src= ${giphys[i].images.fixed_height.url} data-still= ${giphys[i].images.fixed_height_still.url} data-animate= ${giphys[i].images.fixed_height.url} data-state= "animate" class= "gifs">`


    $("#card1").empty();
  })
  
  



