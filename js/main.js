
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
                '<a href="">' + 'Identity' + '</a>' + ', ' +
                '<a href="">' + 'Print' + '</a>'
            );
        }
        else {
            $( "#projects" ).html(
                '<span id="nl">' + 'Noesis/Landscape' + '</span>' + ', ' +
                '<span>' + 'Television Vernacular' + '</span>' + ', ' +
                '<span>' + 'Uncertainty Principle' + '</span>' + ', ' +
                '<span>' + 'Remote Patterns' + '</span>' + ', ' +
                '<span>' + 'Hands' + '</span>' );
        }

    });
    //----------------------------------------------
    $( document ).on("click", "#nl", function() {
            var noesis = [
                {
                    image: 'images/galleries/noesisLandscape/1.jpg',
                    title: '<em>Document #1</em>, 2011',
                    description: 'inkjet print, <br> 36 in. (91.44 cm).',
                },
                {
                    image: 'images/galleries/noesisLandscape/2.jpg',
                    title: '<em>Document #2</em>, 2011',
                    description: 'inkjet print, <br> 24 x 24 in. (60.96 x 60.96 cm).',
                },
                {
                    image: 'images/galleries/noesisLandscape/3.jpg',
                    title: '<em>Document #3</em>, 2011',
                    description: 'inkjet print, <br> 9 x 12.75 in. (22.86 x 32.385 cm).',
                },
                {
                    image: 'images/galleries/noesisLandscape/4.jpg',
                    title: '<em>Document #4</em>, 2011',
                    description: 'inkjet print, <br> 11.75 x 17.75 in. (29.845 x 45.085 cm).',
                }
            ];

            Galleria.loadTheme('js/galleria/galleria.classic.js');

            // Initialize Galleria
            $('#galleria').galleria({
                imageCrop: false,
                dataSource: noesis,
                transition: 'fadeslide',
                responsive: true
            });
    });


});


// Galleria.run('.galleria', {
//     dataSource: noesis
// });
