
//Formatting click to toggle dropdown
$(".parent").click(function(){

    setTimeout(() => {

    $(this).find(".up").toggleClass("active");
    $(this).find(".down").toggleClass("active");
    $(this).find(".sub-menu").toggleClass("active");

    }, 300);
    
 });


//formatting the mobile hambugger
$(".menu-bar").click(function(){
    $(".open").toggleClass("active");
    $(".close").toggleClass("active");
    $("nav").toggleClass("active");
    $("body").toggleClass("active");
});





