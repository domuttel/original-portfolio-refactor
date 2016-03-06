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
            $( "#projects" ).html(
                '<span class="image-gallery">' + 'LinkQuizTics' + '</span>' + ', ' +
                '<span class="image-gallery">' + 'Pirate: Contemporary Art' + '</span>' + ', ' +
                '<span class="image-gallery">' + 'Wordcloud Town' + '</span>'  + ', ' +
                '<span class="image-gallery">' + 'CSR' + '</span>'
            )  && loadGalleria(webProjects);
        }
        else if (index === 1){
            $( "#projects" ).html(
                '<span class="image-gallery">' + 'Identity' + '</span>' + ', ' +
                '<span class="image-gallery">' + 'Print' + '</span>' + ', ' +
                '<span class="image-gallery">' + 'Public' + '</span>'
             ) && loadGalleria(identity);
        }
        else {
            $( "#projects" ).html(
                '<span class="image-gallery">' + 'TV Abstractions' + '</span>' + ', ' +
                '<span class="image-gallery">' + 'Noesis/Landscape' + '</span>' + ', ' +
                '<span class="image-gallery">' + 'Television Vernacular' + '</span>' + ', ' +
                '<span class="image-gallery">' + 'Meetings In Hollywood' + '</span>' + ', ' +
                '<span class="image-gallery">' + 'Remote Patterns' + '</span>' + ', ' +
                '<span class="image-gallery">' + 'Hands' + '</span>'
             ) && loadGalleria(tvAbstract);
        }

    });
    //----------------------------------------------
// $(".specialty").on('click', function () {
//     console.log("fired");
//     if (index === 0) {
//         $('#specialties h1:first, #projects').css('background-color', 'red');
//     }
// });
//     //event handler function for gallery to show when project is selected

    $( document ).on("click", ".image-gallery", function() {
        var indexOfArtGal = $( ".image-gallery" ).index( this );
        if (index === 2) {
            if(indexOfArtGal === 0) {
                loadGalleria(tvAbstract);
                // $('#post-description').append();
            }
            else if(indexOfArtGal == 1){
                loadGalleria(noesis);
            }
            else if(indexOfArtGal == 2){
                loadGalleria(teleVis);
            }
            else if(indexOfArtGal == 3){
                loadGalleria(meetingsInHWood);
            }
            else if(indexOfArtGal === 4){
                loadGalleria(remotePatterns);
            }
            else {
                loadGalleria(hands);
            }
        }
        else if (index === 1){
            if(indexOfArtGal === 0) {
                loadGalleria(identity);
            }
            else if(indexOfArtGal == 1){
                loadGalleria(print);
            }
            else {
                loadGalleria(public);
            }
        }
        else {
            loadGalleria(webProjects);
        }
    });
    //----------------------------------------------

    $("#demo01").animatedModal();

// Load Galleria Theme
    Galleria.loadTheme('js/galleria/galleria.classic.js');

// function to repopulate dataSource onclick of gallery
    function loadGalleria(dataSource1) {
            $('#galleria').galleria({

            lightbox: true,
            idleMode: true,
            imageCrop: false,
            dataSource: dataSource1,
            transition: 'fadeslide',
            responsive: true,
            fullscreenDoubleTap: true,
            fullscreenCrop: true,
            // imageCrop: true, SET THIS UP
        });
    }

});