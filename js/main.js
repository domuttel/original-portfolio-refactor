$(document).on('ready', function() {
    console.log("Yo, I work it.");
//event handler function for project list on click of specialty
    $( ".specialty" ).click(function() {
      // `this` is the DOM element that is clicked
        var index = $( ".specialty" ).index( this );
        if (index === 0) {
            $( "#projects" ).text( "span web" );
        }
        else if (index === 1){
            $( "#projects" ).text( "span graphic" );
        }
        else {
            $( "#projects" ).text( "span art" );
        }
    });
});


