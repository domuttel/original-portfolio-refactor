$(document).on('ready', function() {

    $("#project-info").html("<div class='galleria-info-link'></div>");

$("#about-me").on('click', function(){
    $("#hidden-on-about").hide();
    $("#about-me-info").slideDown();
});

$(".back-button").click(function(){
    $("#about-me-info").hide();
    $("#hidden-on-about").slideDown();
});

$("#tech-btn").click(function(e){
    e.stopPropagation();
    e.preventDefault();
    $("#tech-info").slideDown();
    $("#skill-info").hide();
    // $("#cv-info").hide();
    // $("#contact-info").hide();
});
$("#skill-btn").on('click', function(e){
    e.stopPropagation();
    e.preventDefault();
    $("#tech-info").hide();
    $("#skill-info").slideDown();
    // $("#cv-info").hide();
    // $("#contact-info").hide();
});
// $("#cv-btn").click(function(){
//     $("#tech-info").hide();
//     $("#skill-info").hide();
//     $("#cv-info").slideDown();
//     $("#contact-info").hide();
// });
// $("#contact-btn").click(function(){
//     $("#tech-info").hide();
//     $("#skill-info").hide();
//     $("#cv-info").hide();
//     $("#contact-info").slideDown();
// });



var width;
var height;


    console.log("Yo, I work it.");
    $( window ).resize(function(e) {
        e.preventDefault();
        width = $(window).width();
        height = $(window).height();
console.log('window width: '+ width +' & '+ 'window height: ' + height);
        if ( width < 890) {
console.log("hit size");

            $('#top-offset').first().addClass('u-pull-right');

// console.log($('#projects').remove());
        }
        else if (width > 890) {
            $('#top-offset').first().removeClass('u-pull-right');
        }
    });


// Create variable to be able to pull index from function
    var index;

// event handler function for project list on click of specialty
    $( ".specialty" ).click(function(e) {
        e.preventDefault();
        // `this` is the DOM element that is clicked
        index = $( ".specialty" ).index( this );
        var partA = '<div class="button image-gallery child">';
        var partB = '</div>';
        var dev = ".dev-highlight";
        var des = ".des-highlight";
        var art = ".art-highlight";
        // 'if statement' to control project view on click
        if (index === 0) {

            loadGalleria(webProjects);
            $( "#projects" ).html(
                partA + '<span>LinkQuikzTics</span>' + partB +
                partA + '<span>Pirate</span>' + partB +
                partA + '<span>Wordcloud Town</span>' + partB  +
                partA + '<span>CSR</span>' + partB
            ).addClass(dev); // <-- all addClasses are attaching to parent node

        }
        else if (index === 1){
            loadGalleria(identity);
            $( "#projects" ).html(
                partA + '<span>Identity</span>' + partB +
                partA + '<span>Public</span>' + partB
             ).addClass(des);
        }
        else {
            loadGalleria(tvAbstract);
            $( "#projects" ).html(
                partA + '<span>TV Abstractions</span>' + partB +
                partA + '<span>Noesis/Landscape</span>' + partB +
                partA + '<span>Television Vernacular</span>' + partB +
                partA + '<span>Meetings In Hollywood</span>' + partB +
                partA + '<span>Remote Patterns</span>' + partB +
                partA + '<span>Hands</span>' + partB
             ).addClass(art);
        }
    });
//------------------------------

// event handler function for gallery to show when project is selected
    $( document ).on("click", ".image-gallery", function(e) {
        e.preventDefault();
        var indexOfArtGal = $( ".image-gallery" ).index( this );
        if (index === 2) {
            if(indexOfArtGal === 0)       { loadGalleria(tvAbstract); }
            else if(indexOfArtGal == 1)   { loadGalleria(noesis); }
            else if(indexOfArtGal == 2)   { loadGalleria(teleVis); }
            else if(indexOfArtGal == 3)   { loadGalleria(meetingsInHWood);
                        $("#project-description").html(
                "<div class='twelve columns'><h4>Project:</h4><p>Web Dev Port</p></div>"
                );}
            else if(indexOfArtGal === 4)  { loadGalleria(remotePatterns); }
            else                          { loadGalleria(hands);
            $("#project-description").html(
                "<div class='twelve columns'><h4>FUN</h4><p>Web Dev Port</p></div>"
                );
        }
        }
        else if (index === 1){
            if(indexOfArtGal === 0)       { loadGalleria(identity); }
            // else if(indexOfArtGal == 1)   { loadGalleria(print); }
            else                          { loadGalleria(public); }
        }
        else {
            if (indexOfArtGal === 0){ loadGalleria(webProjects.slice(0, 3)); $("#project-description").html(
                "<div class='twelve columns'><h4>LinkQuikzTics</h4><p>Web Dev Port</p></div>"
                );}
            else if (indexOfArtGal === 1) { loadGalleria(webProjects.slice(3, 7)); $("#project-description").html(
                "<div class='twelve columns'><h4>Pirate</h4><p>SHIT</p></div>"
                );}
            else if (indexOfArtGal === 2) { loadGalleria(webProjects.slice(7, 8)); $("#project-description").html(
                "<div class='twelve columns'><h4>Wordcloud Town</h4><p>SHIT</p></div>"
                );}
            else if (indexOfArtGal === 3) { loadGalleria(webProjects.slice(8)); $("#project-description").html(
                "<div class='twelve columns'><h4>CSR</h4><p>SHIT</p></div>"
                );}
        }
    });
    //----------------------------------------------
console.log(webProjects);
// Load Galleria Theme
    Galleria.loadTheme('js/galleria/galleria.classic.js');

// load galleria -- passes dataSource
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
        queue: 'true',
        swipe: 'enforce',
        imagePosition: 'center',
        thumbnails: 'numbers',
        showCounter: false,
        // imageCrop: true
        // loadLazyThumbs();
    });
}



});

