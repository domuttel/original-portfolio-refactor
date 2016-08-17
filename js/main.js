$(document).on('ready', function() {
    // $('#email').append('<a href="mailto:domuttel@gmail.com"></a>');
    // $('#linkedin').append('<a href="https://www.linkedin.com/in/domuttel"></a>');
    // $('#github').append('<a href="https://github.com/domuttel"></a>');
    // $('#twitter').append('<a href="https://twitter.com/DOMUconcept"></a>');
    // $('#cargo').append('<a href="http://cargocollective.com/dofran"></a>');
// Create variable to be able to pull index from function
    var index;
// event handler function for project list on click of specialty
$( document ).on("click", ".specialty", function(e) {
        // `this` is the DOM element that is clicked
        index = $( ".specialty" ).index( this );
        var partA = '<div class="button image-gallery child">';
        var partB = '</div>';
        if(index === 0){
            $("#hidden-on-about").hide();
            $("#about-me-info").fadeIn(500);
        }
        // 'if statement' to control project view on click
        else if (index === 1) {
            $("#hidden-on-about").fadeIn(800);
            $("#about-me-info").hide();
            loadGalleria(webProjects);
            $( "#projects" ).html(
                partA + '<span class="button">SUPERNOVA</span>' + partB +
                partA + '<span class="button">Pirate: Contemporary Art</span>' + partB +
                partA + '<span class="button">Wordcloud Town</span>' + partB
            );
        }
        else if (index === 2){
            $("#hidden-on-about").fadeIn(800);
            $("#about-me-info").hide();
            loadGalleria(identity);
            $( "#projects" ).html(
                partA + '<span class="button">Identity</span>' + partB +
                partA + '<span class="button">Public</span>' + partB
             );
        }
        else if (index ===3) {
            $("#hidden-on-about").fadeIn(800);
            $("#about-me-info").hide();
            loadGalleria(tvAbstract);
            $( "#projects" ).html(
                partA + '<span class="button">Display Abstractions</span>' + partB +
                partA + '<span class="button">Noesis/Landscape</span>' + partB +
                partA + '<span class="button">Remote Patterns</span>' + partB +
                partA + '<span class="button">Television Vernacular</span>' + partB +
                partA + '<span class="button">Meetings In Hollywood</span>' + partB +
                partA + '<span class="button">Hands</span>' + partB
            );
        }
    });
// event handler function for gallery to show when project is selected
    $( document ).on("click", ".image-gallery", function(e) {
        // e.preventDefault();
        var indexOfArtGal = $( ".image-gallery" ).index( this );
        if (index === 3) {
            if(indexOfArtGal === 0)       { loadGalleria(tvAbstract); }
            else if(indexOfArtGal == 1)   { loadGalleria(noesis); }
            else if(indexOfArtGal == 2)   { loadGalleria(remotePatterns); }
            else if(indexOfArtGal == 3)   { loadGalleria(teleVis); }
            else if(indexOfArtGal === 4)  { loadGalleria(meetingsInHWood); }
            else                          { loadGalleria(hands); }
        }
        else if (index === 2){
            if(indexOfArtGal === 0)       { loadGalleria(identity); }
            else                          { loadGalleria(public); }
        }
        else if (index === 1) {
            if (indexOfArtGal === 0){ loadGalleria(webProjects.slice(0, 3)); }
            else if (indexOfArtGal === 1) { loadGalleria(webProjects.slice(3, 6)); }
            else if (indexOfArtGal === 2) { loadGalleria(webProjects.slice(6, 7)); }
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
            queue: true,
            swipe: 'enforce',
            imagePosition: 'center',
            thumbnails: 'numbers',
            showCounter: false,
        });
    };
// FORM
    var $contactForm = $('#my-form');
    $contactForm.submit(function(e) {
    	e.preventDefault();
    	$.ajax({
    		url: '//formspree.io/domuttel@gmail.com',
    		method: 'POST',
    		data: $(this).serialize(),
    		dataType: 'json',
    		beforeSend: function() {
    			$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
    		},
    		success: function(data) {
    			$contactForm.find('.alert--loading').hide();
    			$contactForm.append('<div class="alert alert--success">Message sent!</div>');
    		},
    		error: function(err) {
    			$contactForm.find('.alert--loading').hide();
    			$contactForm.append('<div class="alert alert--error">Oops, there was an error.</div>');
    		}
    	});
    });
});
