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


function toAcadBack(){
    event.preventDefault();
    $("#Page2").hide(600);
    $("#Page3").hide(600);
    $("html, body").animate({ scrollTop: 0 }, 600);
    $("#Page1").show(600);
    var element = document.getElementById("Academics");
    element.scrollIntoView();
}

function toAchievements(){
    event.preventDefault();
    var element = document.getElementById("Achievements");
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toSkills(){
    event.preventDefault();
    var element = document.getElementById("Skills");
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toProjects(){
    event.preventDefault();
    var element = document.getElementById("Projects");
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toResume(){
    event.preventDefault();
    var element = document.getElementById("Resume");
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toContact(){
    event.preventDefault();
    var element = document.getElementById("footer");
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}



function loadPage(link){
    event.preventDefault();
    linkLocation = link
    $("body").fadeOut(200, redirectPage);
}

function redirectPage() {
    window.location = linkLocation;
}