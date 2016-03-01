// add scripts

$(document).on('ready', function() {
    console.log("yo");

    $("#web").click(function(){
        $("#graphic-projects, #art-projects").hide();
        $("#web-projects").show();
    });
    $("#graphic").click(function(){
        $("#web-projects, #art-projects").hide();
        $("#graphic-projects").show();
    });
    $("#art").click(function(){
        $("#web-projects, #graphic-projects").hide();
        $("#art-projects").show();
    });
});


