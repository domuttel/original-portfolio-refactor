var noesis = [
    {
        image: '../images/1.jpg',
        title: '<em>Document #1</em>, 2011',
        description: 'inkjet print, <br> 36 in. (91.44 cm).',
    },
    {
        image: '../images/2.jpg',
        title: '<em>Document #2</em>, 2011',
        description: 'inkjet print, <br> 24 x 24 in. (60.96 x 60.96 cm).',
    },
    {
        image: '../images/3.jpg',
        title: '<em>Document #3</em>, 2011',
        description: 'inkjet print, <br> 9 x 12.75 in. (22.86 x 32.385 cm).',
    },
    {
        image: '../images/4.jpg',
        title: '<em>Document #4</em>, 2011',
        description: 'inkjet print, <br> 11.75 x 17.75 in. (29.845 x 45.085 cm).',
    },
];

    // $( "#nl" ).click(function() {
    //     console.log("nice click");
    //     Galleria.run('.galleria', {
    //         dataSource: noesis
    //     });
    // });

    $('#nl').on('click', function(){
        var url = "#galleria"; // sets the link url as the target div of the lightbox
        $(this).run({
            dataSource: noesis,
            inline:true, // so it knows that it's looking for an internal href
            href:url, // tells it which content to show
            width:"70%",
            onOpen:function(){ //triggers a callback when the lightbox opens
                $(url).show(); //when the lightbox opens, show the content div
            },
            onCleanup:function(){
                $(url).hide(); //hides the content div when the lightbox closes
            }
        });
        var index = $(this).parent().find("img").index(this); //indexes the image cliked
        Galleria.ready(function() { //Attempt to show the same indexed image in the galleria
            var gallery = this;
            gallery.show(index);
        });
