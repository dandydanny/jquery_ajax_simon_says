$(document).ready(function(){

  console.log("In document.ready fn");

  // Do this when link is clicked
  $("[href]").click(function(event)  {
  console.log("button clicked");

  //submit ajax request to /color route
  $.post( "/color", {func: "getCellAndColor"}, function( data ) {
      
    console.log ( "Done posting" );
    console.log ( data.cell );
    console.log ( data.color );

    //change cell color
    //based on random li selection, set to random color
    $("#color_me li:nth-child(" + data.cell + ")").css("background-color",data.color);

  }, "json");

  }); // end for submit function event
}); // end for document ready function
