alert("Добро пожаловать! Обращаю ваше внимание. В данный момент ведутся работы по оптимизации сайта, поэтому возможны проблемы с отображением контента и работой самого сайта. Спасибо за внимание) Нажмите ОК чтобы открыть сайт.");
function number(n) {
    let num = document.getElementById("nb1");
    if (num.innerHTML == 'Поле ввода...') {
        num.innerHTML = n;
    }else {
        num.innerHTML += n;
    }
};
function equal() {
    let expression;
    expression = document.getElementById("nb1").innerHTML;
    expression = eval(expression);
    if (expression % 1 !== 0) {
        expression.toFixed(2);
    }else {
        expression.toFixed();
    }
    if (expression == Infinity) {
        document.getElementById("nb2").innerHTML = "На 0 делить нельзя!";
    }else {
        document.getElementById("nb2").innerHTML = expression;
    }
};
function clr() {
    let nex = document.getElementById("nb1").innerHTML;
    document.getElementById("nb1").innerHTML = nex.substring(0, nex.length - 1);
    if (document.getElementById("nb1").innerHTML == '') {
        document.getElementById("nb1").innerHTML = 'Поле ввода...';
    }
};
function resetButton() {
    document.getElementById("nb1").innerHTML = "Поле ввода...";
    document.getElementById("nb2").innerHTML = "Результат";
};
function menu() {
    $("#nav").toggleClass("active");
    $("#form").toggleClass("activeForm");
};
function classremove() {
    $("#nav").removeClass("active");
    $("#form").removeClass("activeForm");
};
function aboutme() {
    classremove();
    $("#aboutMenu").toggleClass("aboutActive");
    $(".layer").toggleClass('activeLayer');
};
function feedback() {
    $(".feedback").toggleClass('activeFeedBack');
    $(".layer").toggleClass('activeLayer');
    classremove();
};
function push() {
    $(".feedback").removeClass('activeFeedBack');
    $(".layer").removeClass('activeLayer');
};
function aboutClose() {
    $("#aboutMenu").removeClass("aboutActive");
    $(".layer").removeClass('activeLayer');
};
function start() {
    $("#bodys").toggleClass("load");
};
function bgcolor(c) {
    switch (c) {
        case "colorD":
            document.getElementById("siteTheme").setAttribute("content", "#263238");
            $("body").css("background-color", "#263238");
            $("#logo").removeClass("logoTheme");
            $("#mobileNav button").css("color", "#ffffff");
            $("#numBlock button").css("background", "#76FF03");
            $("#numBlock input").css("background", "#E65100");
            $("#nav ul li a").css("background-color", "rgba(0,0,0,0.5)");
            $("#nav ul li a").css("color", "#fff");
            $(".wrapper").css("background", "#fff");
            $(".feedback").css("background-color", "rgba(0,0,0,0.8)");
            $(".feedback h2").css("color", "#fff");
            $(".feedback button").css("background-color", "#76FF03");
            $(".feedback button").css("color", "#000");
            $("#settings").removeClass("setTheme");
            $("#settings button").css("background", "#76FF03");
            $("#settings button").css("color", "#000");
            $("#aboutMenu").removeClass("aboutTheme");
            $("#aboutMenu button").css("background", "#76FF03");
            $("#aboutMenu button").css("color", "#000");
            break;
        case "colorW":
            document.getElementById("siteTheme").setAttribute("content", "#ffffff");
            $("body").css("background-color", "#ffffff");
            $("#logo").addClass("logoTheme");
            $("#mobileNav button").css("color", "#1E88E5");
            $("#numBlock button").css("background", "#1E88E5");
            $("#numBlock input").css("background", "#E53935");
            $("#nav ul li a").css("background-color", "#673AB7");
            $("#nav ul li a").css("color", "#fff");
            $(".wrapper").css("background", "#1E88E5");
            $(".feedback").css("background-color", "#fff");
            $(".feedback h2").css("color", "#000");
            $(".feedback button").css("background-color", "#673AB7");
            $(".feedback button").css("color", "#fff");
            $("#settings").addClass("setTheme");
            $("#settings button").css("background", "#673AB7");
            $("#settings button").css("color", "#fff");
            $("#aboutMenu").addClass("aboutTheme");
            $("#aboutMenu button").css("background", "#673AB7");
            $("#aboutMenu button").css("color", "#fff");
    }
};
function setting() {
    $("#settings").toggleClass("setActive");
    classremove();
};
function setClose() {
    $("#settings").removeClass("setActive");
};
