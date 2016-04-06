$(document).on('ready', function() {

$("#about-me").on('click', function(){
    $("#hidden-on-about").hide();
    $("#about-me-info").slideDown();
});

$(".back-button").click(function(){
    $("#about-me-info").hide();
    $("#hidden-on-about").slideDown();
});

$("#tech-btn").click(function(){
    $("#tech-info").slideDown();
    $("#skill-info").hide();
    $("#cv-info").hide();
    $("#contact-info").hide();
});
$("#skill-btn").on('click', function(){
    $("#tech-info").hide();
    $("#skill-info").slideDown();
    $("#cv-info").hide();
    $("#contact-info").hide();
});
$("#cv-btn").click(function(){
    $("#tech-info").hide();
    $("#skill-info").hide();
    $("#cv-info").slideDown();
    $("#contact-info").hide();
});
$("#contact-btn").click(function(){
    $("#tech-info").hide();
    $("#skill-info").hide();
    $("#cv-info").hide();
    $("#contact-info").slideDown();
});






    console.log("Yo, I work it.");
    $( window ).resize(function(e) {
        e.preventDefault();
        var width = $(window).width();
        var height = $(window).height();
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
        var partA = '<div class="button image-gallery child" href="#">';
        var partB = '</div>';
        var dev = ".dev-highlight";
        var des = ".des-highlight";
        var art = ".art-highlight";
        // 'if statement' to control project view on click
        if (index === 0) {

            loadGalleria(webProjects);
            $( "#projects" ).html(
                partA + 'LinkQuizTics' + partB +
                partA + 'Pirate' + partB +
                partA + 'Wordcloud Town' + partB  +
                partA + 'CSR' + partB
            ).addClass(dev); // <-- all addClasses are attaching to parent node
        }
        else if (index === 1){
            loadGalleria(identity);
            $( "#projects" ).html(
                partA + 'Identity' + partB +
                partA + 'Print' + partB +
                partA + 'Public' + partB
             ).addClass(des);
        }
        else {
            loadGalleria(tvAbstract);
            $( "#projects" ).html(
                partA + 'TV Abstractions' + partB +
                partA + 'Noesis/Landscape' + partB +
                partA + 'Television Vernacular' + partB +
                partA + 'Meetings In Hollywood' + partB +
                partA + 'Remote Patterns' + partB +
                partA + 'Hands' + partB
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
                        $("#project-description").append(
                "<div class='twelve columns'><h4>Project:</h4><p>Web Dev Port</p></div>"
                );}
            else if(indexOfArtGal === 4)  { loadGalleria(remotePatterns); }
            else                          { loadGalleria(hands); }
        }
        else if (index === 1){
            if(indexOfArtGal === 0)       { loadGalleria(identity); }
            else if(indexOfArtGal == 1)   { loadGalleria(print); }
            else                          { loadGalleria(public); }
        }
        else {
            if (indexOfArtGal === 0){ loadGalleria(webProjects.slice(0, 3)); }
            else if (indexOfArtGal === 1) { loadGalleria(webProjects.slice(3, 7)); }
            else if (indexOfArtGal === 2) { loadGalleria(webProjects.slice(7, 8)); }
            else if (indexOfArtGal === 3) { loadGalleria(webProjects.slice(8)); }
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

