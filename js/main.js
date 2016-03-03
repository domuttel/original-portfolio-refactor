$(document).on('ready', function(e) {
    var index;
    console.log("Yo, I work it.");
    //event handler function for project list on click of specialty
    $( ".specialty" ).click(function(e) {
        e.preventDefault();
        // `this` is the DOM element that is clicked
        index = $( ".specialty" ).index( this );
        // 'if statement' to control project view on click
        if (index === 0) {
            $( "#projects" ).text( "span web" );
        }
        else if (index === 1){
            $( "#projects" ).html(
                '<span class="image-gallery">' + 'Identity' + '</span>' + ', ' +
                '<span class="image-gallery">' + 'Print' + '</span>');
            // console.log($("#projects:first-child"));
        }
        else {
            $( "#projects" ).html(
                '<span class="image-gallery">' + 'Noesis/Landscape' + '</span>' + ', ' +
                '<span class="image-gallery">' + 'Television Vernacular' + '</span>' + ', ' +
                '<span class="image-gallery">' + 'Uncertainty Principle' + '</span>' + ', ' +
                '<span class="image-gallery">' + 'Remote Patterns' + '</span>' + ', ' +
                '<span class="image-gallery">' + 'Hands' + '</span>');
        }

    });
    //----------------------------------------------

    //event handler function for gallery to show when project is selected
    // function replaceDataSource(){
        $( document ).on("click", ".image-gallery", function() {
            var indexOfArtGal = $( ".image-gallery" ).index( this );
            console.log(indexOfArtGal);
            console.log(index);
            if (index === 2) {
                if(indexOfArtGal === 0) {
                    loadGalleria(noesis);
                }
                else if(indexOfArtGal == 1){
                    loadGalleria();
                }
            }
            else if (index === 1){
                if(indexOfArtGal === 0) {
                    loadGalleria(identity);
                }
                else if(indexOfArtGal == 1){
                    loadGalleria();
                }
            }
        });
    //----------------------------------------------

// Load Galleria Theme
    Galleria.loadTheme('js/galleria/galleria.classic.js');
// function to repopulate dataSource onclick of gallery
    function loadGalleria(dataSource1) {
            $('#galleria').galleria({
            imageCrop: false,
            dataSource: dataSource1,
            transition: 'fadeslide',
            responsive: true
        });
    }


});