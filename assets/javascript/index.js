
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
            var carouselInner = $("<div>").attr("class", "carousel-inner")
            carousel.append(carouselInner)
            var image = `<div class="item active"><img src=${images[0].url} class="d-block w-100"></div>`
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



<div class="container">
  <h2>Carousel Example</h2>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    
    <!-- Wrapper for slides -->
    <div class="carousel-inner">

      <div class="item active">
        <img src="la.jpg" alt="Los Angeles" style="width:100%;">
        <div class="carousel-caption">
          <h3>Los Angeles</h3>
          <p>LA is always so much fun!</p>
        </div>
      </div>

      <div class="item">
        <img src="chicago.jpg" alt="Chicago" style="width:100%;">
        <div class="carousel-caption">
          <h3>Chicago</h3>
          <p>Thank you, Chicago!</p>
        </div>
      </div>
    
      <div class="item">
        <img src="ny.jpg" alt="New York" style="width:100%;">
        <div class="carousel-caption">
          <h3>New York</h3>
          <p>We love the Big Apple!</p>
        </div>
      </div>
  
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

</body>
</html>

