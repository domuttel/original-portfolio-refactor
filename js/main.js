$(document).on('ready', function(e) {

    console.log("Yo, I work it.");

    //event handler function for project list on click of specialty
    $( ".specialty" ).click(function(e) {
        e.preventDefault();
        // `this` is the DOM element that is clicked
        var index = $( ".specialty" ).index( this );
        // 'if statement' to control project view on click
        if (index === 0) {
            $( "#projects" ).text( "span web" );
        }
        else if (index === 1){
            $( "#projects" ).html(
                '<span>' + 'Identity' + '</span>' + ', ' +
                '<span>' + 'Print' + '</span>');
        }
        else {
            $( "#projects" ).html(
                '<span id="nl">' + 'Noesis/Landscape' + '</span>' + ', ' +
                '<span>' + 'Television Vernacular' + '</span>' + ', ' +
                '<span>' + 'Uncertainty Principle' + '</span>' + ', ' +
                '<span>' + 'Remote Patterns' + '</span>' + ', ' +
                '<span>' + 'Hands' + '</span>');
        }

    });
    //----------------------------------------------

    // On click show Galleria
    $( document ).on("click", "#nl", function() {
        // Load Galleria Theme
        Galleria.loadTheme('js/galleria/galleria.classic.js');

        // Initialize Galleria
        $('#galleria').galleria({
            imageCrop: false,
            dataSource: noesis,
            transition: 'fadeslide',
            responsive: true
        });
    });
    //----------------------------------------------
});