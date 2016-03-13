$(document).on('ready', function(e) {

    console.log("Yo, I work it.");


$( "#skill-hit" ).click(function() {
    console.log("fired");
    $( "#skill-tog" ).toggle();
});
$( "#ed-hit" ).click(function() {
    console.log("fired");
    $( "#ed-tog" ).toggle();
});


// Follow mouse with image
    $(document).mousemove(function(e) {
            $('#cloud').offset({
            left: e.pageX - 600,
            top: e.pageY - 600
        }).html('<img style="z-index:9999; opacity:0.5;" src="images/cursorCloud.png"></div>');
    });
// --------------------

// Create variable to be able to pull index from function
    var index;

//event handler function for project list on click of specialty
    $( ".specialty" ).click(function(e) {
        // var selectedInverse = + '.css("background", "black").css("color", "white")';
        // e.preventDefault();
        e.stopPropagation();
        // `this` is the DOM element that is clicked
        index = $( ".specialty" ).index( this );
        // 'if statement' to control project view on click
        // console.log("Index of specialty: " + index);
        if (index === 0) {


//*** FUNCTION TO ADD TOGGLE ON index value vvvvvvvv
            $("#dev").css("border", "2px solid white").css("color", "#eb4430");
            $(".image-gallery").css("border", "2px solid white").css("color", "#eb4430");
//*** FUNCTION TO ADD TOGGLE ON index value ^^^^^^^^


            loadGalleria(webProjects);
            $( "#projects" ).html(
                '<h4><span class="image-gallery">' + 'LinkQuizTics' + '</span>' + ', ' +
                '<span class="image-gallery">' + 'Pirate: Contemporary Art' + '</span>' + ', ' +
                '<span class="image-gallery">' + 'Wordcloud Town' + '</span>'  + ', ' +
                '<span class="image-gallery">' + 'CSR' + '</span></h4>'
            );
        }
        else if (index === 1){
            loadGalleria(identity);
            $( "#projects" ).html(
                '<h4><span class="image-gallery">' + 'Identity' + '</span>' + ', ' +
                '<span class="image-gallery">' + 'Print' + '</span>' + ', ' +
                '<span class="image-gallery">' + 'Public' + '</span></h4>'
             );
        }
        else {
            loadGalleria(tvAbstract);
            console.log("gooda"+ tvAbstract);
            $( "#projects" ).html(
                '<h4><span class="image-gallery">' + 'TV Abstractions' + '</span>' + ', ' +
                '<span class="image-gallery">' + 'Noesis/Landscape' + '</span>' + ', ' +
                '<span class="image-gallery">' + 'Television Vernacular' + '</span>' + ', ' +
                '<span class="image-gallery">' + 'Meetings In Hollywood' + '</span>' + ', ' +
                '<span class="image-gallery">' + 'Remote Patterns' + '</span>' + ', ' +
                '<span class="image-gallery">' + 'Hands' + '</span></h4>'
             );
        }
    });
//------------------------------

//event handler function that pushes gallery to be viewed to Galleria
    $( document ).on("click", ".image-gallery", function() {

        var indexOfArtGal = $( ".image-gallery" ).index( this );

        console.log("index of projects: " + indexOfArtGal);
indexOfArtGal.getIndex();
    //     if (indexOfArtGal === 1){
    //         loadGalleria(webProjects.push(webProjects.shift()));
    // loadGalleria(index[1]);
    //     console.log("hey");

    //     }

    });
//-----------------------------------
// Animated modal library call
    $("#open-resume").animatedModal({
        modalTarget:'animatedModal',
        animatedIn:'fadeIn',
        animatedOut:'fadeOut',
        color:'rgba(255,255,255,1)',
        animationDuration:'2s',
        width:'100%',
        height:'100%',
        top:'85px',
        left:'0px',
        zIndexIn: '7000',
        zIndexOut: '-9999',
        // Callbacks
        beforeOpen: function() {
            console.log("The animation was called");
        },
        afterOpen: function() {
            console.log("The animation is completed");
        },
        beforeClose: function() {
            console.log("The animation was called");
        },
        afterClose: function() {
            console.log("The animation is completed");
        }
    });

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
        // imageCrop: true, SET THIS UP
        });
    }

});