$(function() {
    $.getJSON("https://ajax.googleapis.com/ajax/services/feed/find?v=1.0&q=codecademy&callback=?",
      function(response) {
        $.each(response.responseData.entries, function (i,newsItem) {
            $("#newsfeed").append("<li>"+newsItem.title+"</li>");
        });
      });

   $.ajax({
        url: "https://ajax.googleapis.com/ajax/services/feed/find?v=1.0&q=jquery& ",

        jsonpCallback: "listFeeds"
    });

});

function listTweets(response) {
     // each goes here with appends to #jqueryfeed
  $.each(response, function(i, item){
  
  });

}



$(function() {
   $("#loadFeeds").click(function() {
       $("li").remove(); // Remove any existing li elements
       $(this).toggleClass("btn-primary"); // Switch to default grey
       $(this).html("Loading"); // Change text of button
       $(this).html("Load Again"); // Change back text of button
       $(this).toggleClass("btn-primary")
       $.ajax({
            url: "/codecademy/success?callback=?",
            dataType: "jsonp",
            complete: function(jqXHR, textStatus) {
                console.log("Completed: "+textStatus);
            $("#loadFeeds").html("Load Again"); // Change back text of button
       $("#loadFeeds").toggleClass("btn-primary")
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Error: "+textStatus+" "+errorThrown);
            },
            success: function(data, textStatus, jqXHR) {
                console.log("Success: "+textStatus);
            
            },
            jsonpCallback: "listFeeds"
       
       });

       // Revert back to default grey
   });
});

function listFeeds(response) {
    $.each(response.responseData.entries, function (i,newsItem) {
        $("#newsfeed").append("<li>"+newsItem.title+"</li>");
    });
}

$(function() {
   $("#loadButtons").click(function() {
       $("li").remove(); // Remove any existing li elements
       $(this).toggleClass("btn-primary"); // Switch to default grey
       $(this).html("Loading"); // Change text of button
       $.ajax({
            url: "/codecademy/success",
            dataType: "jsonp",
            complete: function(jqXHR, textStatus) {
                $("#loadButtons").html("Load Again"); // Change back text of button
                $("#loadButtons").toggleClass("btn-primary"); // Revert back to default grey
            },
            error: function(jqXHR, textStatus, errorThrown) {
            },
            success: function(response) {
                // Empty the #buttonfeed div
                $("#buttonfeed").html("");
                
                // Go through the array of button data passed back and create a button for each
                $.each(response.buttonData, function(i, item){
                    $("#buttonfeed").append(buttonHTML(item,response.numberOfCalls));
                });
                
                // Add a click event for button #1
                $(generateButtonId(response, 1)).click(function(e) {
                    $("#statusText").text("Clicked "+$(this).attr("id"));
                });
            }
        });
   });
   
   function buttonHTML(buttonData,counter) {
       return "<a type='button' id='"+buttonData.btnId+counter+"' class='"+buttonData.btnClass+"' >"+buttonData.btnText+"</a>";
   }
   
   // Add a click event for any button with class 'btn-primary'
   $("body").on('click', 'a.btn-primary', function(e) {
       $("#statusText").text("Clicked "+e.target.id);
   });
});

// Take in the item number and generate an id for jQuery from the response data
function generateButtonId(respData, itemNo) {
    return "#"+respData.buttonData[itemNo].btnId+respData.numberOfCalls;
}
University of OULU
POBox 8000
90014 University of Oulu



$(document).ready(() => {
  $('.menu-button').on('click',() => {
    $('#nav-dropdown').slideToggle('slow');
  });
	
  $(".login-button").on("click", () => {
    $(".login-form").slideToggle();
  });
  
  $(".arrow-one").on("click", () => {
    $(".shoe-details-one").toggle();
  });
  
  $(".sizes-one").on("click", () => {
    $(".text-one").fadeIn(1000);
  });
  
  $(".arrow-two").on("click", () => {
    $(".shoe-details-two").toggle();
  });
  
  $(".sizes-two").on("click", () => {
    $(".text-two").fadeIn();
  });
  
  $(".arrow-three").on("click", () => {
    $(".shoe-details-three").toggle();
  });
  
  $(".sizes-three").on("click", () => {
    $(".text-three").fadeIn(1000);
  });
  
});

$(function() {
   $("#loadButtons").click(function() {
       $("li").remove(); // Remove any existing li elements
       $(this).toggleClass("btn-primary"); // Switch to default grey
       $(this).html("Loading"); // Change text of button
       $.ajax({
            url: "/codecademy/success",
            dataType: "jsonp",
            jsonpCallback:"buttonHTML",
            complete: function(jqXHR, textStatus) {
                $("#loadButtons").html("Load Again"); // Change back text of button
                $("#loadButtons").toggleClass("btn-primary"); // Revert back to default grey
            },
            error: function(jqXHR, textStatus, errorThrown) {
            },
            success: function(response) {
                // Empty the #buttonfeed div
                $("#buttonfeed").html("");
                
                // Go through the array of button data passed back and create a button for each
                $.each(response.buttonData, function(i, item){
                    $("#buttonfeed").append(buttonHTML(item,response.numberOfCalls));
                });
                
                // Add a click event for button #1
                $(generateButtonId(response, 1)).click(function(e) {
                    $("#statusText").text("Clicked "+$(this).attr("id"));
                });
            $(generateButtonId(response, 2)).click(function(e) {
                    $("#statusText").text("Clicked "+$(this).attr("id"));
                });
             $(generateButtonId(response, 3)).click(function(e) {
                    $("#statusText").text("Clicked "+$(this).attr("id"));
                });
            }
        });
   });
   
   function buttonHTML(buttonData,counter) {
       return "<a type='button' id='"+buttonData.btnId+counter+"' class='"+buttonData.btnClass+"' >"+buttonData.btnText+"</a>";
   }
   
   // Add a click event for any button with class 'btn-primary'
   $("body").on('click', 'a.btn-primary', function(e) {
       $("#statusText").text("Clicked "+e.target.id);
   });
$("body").on('click', 'a.btn-success', function(e) {
       $("#statusText").text("Clicked "+e.target.id);
   });
$("body").on('click', 'a.btn-inverse', function(e) {
       $("#statusText").text("Clicked "+e.target.id);
   });

});

// Take in the item number and generate an id for jQuery from the response data
function generateButtonId(respData, itemNo) {
    return "#"+respData.buttonData[itemNo].btnId+respData.numberOfCalls;
}