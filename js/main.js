$(document).on('ready', function(e) {

    console.log("Yo, I work it.");
    function noShow() {
        $("document").on('load', function(){
            hide("#animatedModal");
        });
    }

 // Follow mouse with image
    // $(document).mousemove(function(e) {
    //         $('#cloud').offset({
    //         left: e.pageX - 600,
    //         top: e.pageY - 600
    //     }).html('<img style="z-index:9999; opacity:1;" src="images/cursorCloud.png"></div>');
    // });
// --------------------

// Create variable to be able to pull index from function
//     var index;

// //event handler function for project list on click of specialty
//     $( ".specialty" ).click(function(e) {
//         // var selectedInverse = + '.css("background", "black").css("color", "white")';
//         // e.preventDefault();
//         e.stopPropagation();
//         // `this` is the DOM element that is clicked
//         index = $( ".specialty" ).index( this );
//         // 'if statement' to control project view on click
//         // console.log("Index of specialty: " + index);
//         if (index === 0) {


// //*** FUNCTION TO ADD TOGGLE ON index value vvvvvvvv
//             $("#dev").css("border", "2.5px solid #eb4430").css("color", "#eb4430").css("background-color", "white");
//             $(".image-gallery").css("color", "#eb4430").css("background-color", "white");
// //*** FUNCTION TO ADD TOGGLE ON index value ^^^^^^^^


//             loadGalleria(webProjects[0]);
//             $( "#projects" ).html(
//                 '<h4><span class="image-gallery">' + 'LinkQuizTics' + '</span>' +
//                 '<span class="image-gallery">' + 'Pirate: Contemporary Art' + '</span>' +
//                 '<span class="image-gallery">' + 'Wordcloud Town' + '</span>'  +
//                 '<span class="image-gallery">' + 'CSR' + '</span></h4>'
//             );
//         }
//         else if (index === 1){
//             loadGalleria(identity);
//             $( "#projects" ).html(
//                 '<h4><span class="image-gallery">' + 'Identity' + '</span>' +
//                 '<span class="image-gallery">' + 'Print' + '</span>' +
//                 '<span class="image-gallery">' + 'Public' + '</span></h4>'
//              );
//         }
//         else {
//             loadGalleria(tvAbstract);
//             console.log("gooda"+ tvAbstract);
//             $( "#projects" ).html(
//                 '<h4><span class="image-gallery">' + 'TV Abstractions' + '</span>' +
//                 '<span class="image-gallery">' + 'Noesis/Landscape' + '</span>' +
//                 '<span class="image-gallery">' + 'Television Vernacular' + '</span>' +
//                 '<span class="image-gallery">' + 'Meetings In Hollywood' + '</span>' +
//                 '<span class="image-gallery">' + 'Remote Patterns' + '</span>' +
//                 '<span class="image-gallery">' + 'Hands' + '</span></h4>'
//              );
//         }
//     });
// //------------------------------

// //     //event handler function for gallery to show when project is selected
// // console.log(webProjects.push(webProjects.shift()));
//     $( document ).on("click", ".image-gallery", function() {
//         var indexOfArtGal = $( ".image-gallery" ).index( this );
//                 var shiftedArray = [];
//         // console.log(indexOfArtGal);
//         if (index === 2) {
//             if(indexOfArtGal === 0) {
//                 loadGalleria(tvAbstract);
//                 // $('#post-description').append();
//             }
//             else if(indexOfArtGal == 1){
//                 loadGalleria(noesis);
//             }
//             else if(indexOfArtGal == 2){
//                 loadGalleria(teleVis);
//             }
//             else if(indexOfArtGal == 3){
//                 loadGalleria(meetingsInHWood);
//             }
//             else if(indexOfArtGal === 4){
//                 loadGalleria(remotePatterns);
//             }
//             else {
//                 loadGalleria(hands);
//             }
//         }
//         else if (index === 1){
//             if(indexOfArtGal === 0) {
//                 loadGalleria(identity);
//             }
//             else if(indexOfArtGal == 1){
//                 loadGalleria(print);
//             }
//             else {
//                 loadGalleria(public);
//             }
//         }
//         else if (index === 0){

//             if (indexOfArtGal === 0){
//                 loadGalleria(webProjects[0]);
//                 // console.log( webProjects);
//             }
//             else if (indexOfArtGal === 1) {
//                 var  pirateImgs = webProjects;
//                 loadGalleria(pirateImgs.slice(1, 4));
//             }
//             else if (indexOfArtGal === 2) {
//                 console.log(webProjects);
//                 var wordcloudImgs = webProjects;
//                 loadGalleria(wordcloudImgs.slice(4, 5));
//             }
//             else if (indexOfArtGal === 3) {
//                 var csrImgs = webProjects;
//                 loadGalleria(csrImgs.slice(5));
//             }

//         }
//     });
    //----------------------------------------------
// Animated modal library call
    $("#open-resume").animatedModal({
        modalTarget:'animatedModal',
        animatedIn:'fadeIn',
        animatedOut:'fadeOut',
        color:'rgba(255,255,255,1)',
        animationDuration:'1s',
            position:'fixed',
            width:'100%',
            height:'90%',
            top:'12%',
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

// // Load Galleria Theme
    Galleria.loadTheme('js/galleria/galleria.classic.js');

// // load galleria -- passes dataSource
//     function loadGalleria(dataSource1) {
//         $('#galleria').galleria({
//         thumbnails: 'lazy',
//         lightbox: true,
//         idleMode: true,
//         imageCrop: false,
//         dataSource: dataSource1,
//         transition: 'fadeslide',
//         responsive: true,
//         fullscreenDoubleTap: true,
//         fullscreenCrop: true,

//         // imageCrop: true, SET THIS UP
//         });
//     }

});