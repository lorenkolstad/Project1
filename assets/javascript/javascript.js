M.toast({html: 'I am a toast!', classes: 'rounded'})

// var firebaseConfig = {
//     apiKey: "AIzaSyCi2FqKo_Pwcj7Z_ImIJ4Rlwy89QRwjOL8",
//     authDomain: "project1-18df4.firebaseapp.com",
//     databaseURL: "https://project1-18df4.firebaseio.com",
//     projectId: "project1-18df4",
//     storageBucket: "project1-18df4.appspot.com",
//     messagingSenderId: "178823515374",
//     appId: "1:178823515374:web:91f4ee2ea935188314b7ff"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

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
        
            
        var apiTitle1 = response.data[22].fullName;
        var apiContent1 = response.data[22].description;
        var apiTitle2 = response.data[42].fullName;
        var apiContent2 = response.data[42].description;
        var apiTitle3 = response.data[26].fullName;
        var apiContent3 = response.data[26].description;


        // $("#card2title").text(cardTitle);
        // $("#card2content").text(response.data[22].description);

        // var card1 = `<div class= "card" id="card1">`

        var card1Col = $("<div>").attr("class", "col s4");
        var card1 = $("<div>").attr("class","card");
        var spanTitle1 = $("<span>").attr("id","card-1-title");
        spanTitle1.attr("class","card-title");
        var cardContent1 = $("<div>").attr("class", "card-content");
        cardContent1.attr("id", "card-1-content");
        spanTitle1.text(apiTitle1);
        cardContent1.text(apiContent1);

        card1.append(spanTitle1);
        card1.append(cardContent1);
        card1Col.append(card1);
        $("#card-row").append(card1Col);

        var card2Col = $("<div>").attr("class", "col s4");
        var card2 = $("<div>").attr("class","card");
        var spanTitle2 = $("<span>").attr("id","card-2-title");
        spanTitle2.attr("class","card-title");
        var cardContent2 = $("<div>").attr("class", "card-content");
        cardContent2.attr("id", "card-2-content");
        spanTitle2.text(apiTitle2);
        cardContent2.text(apiContent2);

        card2.append(spanTitle2);
        card2.append(cardContent2);
        card2Col.append(card2);
        $("#card-row").append(card2Col);

        var card3Col = $("<div>").attr("class", "col s4");
        var card3 = $("<div>").attr("class","card");
        var spanTitle3 = $("<span>").attr("id","card-3-title");
        spanTitle3.attr("class","card-title");
        var cardContent3 = $("<div>").attr("class", "card-content");
        cardContent3.attr("id", "card-3-content");
        spanTitle3.text(apiTitle3);
        cardContent3.text(apiContent3);

        card3.append(spanTitle3);
        card3.append(cardContent3);
        card3Col.append(card3);
        $("#card-row").append(card3Col);

        



        

        // var card1image = `<img src= ${response.data[22].images.url}`
    
        // $(".col s4").append(card1);
        // $(card1image).append(card1);
    
    
    
    
    });


        // var element = `<img src= ${giphys[i].images.fixed_height.url} data-still= ${giphys[i].images.fixed_height_still.url} data-animate= ${giphys[i].images.fixed_height.url} data-state= "animate" class= "gifs">`


    // $("#card1").empty();
  })
  
  



