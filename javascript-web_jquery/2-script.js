//<header> text color is changed when user clicks on DIV#red_header
$(document).ready(function(){
    $("#red_header").click(function(){
        $("header").css("color", "#FF0000");
    });
});
