$("html, body").animate({ scrollTop: 0 }, 100);
$("#Page2").hide();
$("#Page3").hide();

function toPage2(){
    $("#Page1").hide(600);
    $("#Page3").hide(600);
    $("html, body").animate({ scrollTop: 0 }, 600);
    $("#Page2").show(600)
}

function toPage1(){
    $("#Page2").hide(600);
    $("html, body").animate({ scrollTop: 0 }, 600);
    $("#Page1").show(600)
}

function toPage3(){
    $("#Page2").hide(600);
    $("html, body").animate({ scrollTop: 0 }, 600);
    $("#Page3").show(600)
}

function loadPage(link){
    event.preventDefault();
    linkLocation = link
    $("body").fadeOut(200, redirectPage);
}

function redirectPage() {
    window.location = linkLocation;
}