function displayArticleInfo(){
  var category = document.getElementById("category").value;
  var period = document.getElementById("period").value;

  document.getElementById("root_title").innerHTML="<br><br><h4 class='center_result'>Most viewed article in the "+category+" category:</h4>";

  var url = "https://api.nytimes.com/svc/mostpopular/v2/mostviewed/"+ category +"/"+ period +".json";
    url += '?' + $.param({
      'api-key': "07a32d92ab9e4604b8e2209115ed0f91"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
      document.getElementById("root").innerHTML = " "

      + "<style>"
      +    ".demo-card-square.mdl-card {"
      +     "width: 320px;"
      +      "height: 320px;"
      +   "}"
      +    ".demo-card-square > .mdl-card__title {"
      +      "color: #fff;"
      +      "background: url('images/ny.jpg') center / cover;"
      +    "}"
      +    "</style>"

      +      "<div class='demo-card-square mdl-card mdl-shadow--2dp center_result'>"
      +        "<div class='mdl-card__title mdl-card--expand'>"
      +          "<h2 class='mdl-card__title-text category'>"+result.results[0].section+"</h2>"
      +        "</div>"
      +        "<div class='mdl-card__supporting-text title'>"
      +          result.results[0].title        
      +        "</div>"
      +        "<div class='mdl-card__actions mdl-card--border'>"
      +          "<a class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect' href="+result.results[0].url+">"
      +            "View the Article"
      +          "</a>"
      +        "</div>"
      +      "</div>";
      
    }).fail(function(err) {
      throw err;
    });
    
}