//alert("Добро пожаловать! Обращаю ваше внимание. В данный момент ведутся работы по оптимизации сайта, поэтому возможны проблемы с отображением контента и работой самого сайта. Спасибо за внимание) Нажмите ОК чтобы открыть сайт.");
function number(n) {
    if (document.getElementById('n1') === '') {
      document.getElementById("n1").value = n;
    }else {
        document.getElementById("n1").value += n;
    }
}

function equal() {
  var exp = document.getElementById("n1").value, exp1;
  exp1 = exp;
  exp = eval(exp);

  if (exp % 1 != 0) {
  		exp = exp.toFixed(2);
  	}else {
  		exp = exp.toFixed();
}
  if (exp == Infinity) {
    alert("На 0 делить нельзя!");
  }else {
    document.getElementById("n2").value = exp;
    document.getElementById('note').value += exp1 + ' = ' + exp + '\n';
  }
}

function clr() {
  var n = document.getElementById("n1").value;
  document.getElementById("n1").value = n.substring(0, n.length - 1);
}

function resetButton() {
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}

function menu() {
    $("#nav").toggleClass("active");
    $(".fas").toggleClass("fa-chevron-circle-right");
}

function classremove() {
    $("#nav").removeClass("active");
}

function aboutme() {
    classremove();
    $("#aboutMenu").toggleClass("aboutActive");
}

function feedback() {
    $(".feedback").toggleClass('activeFeedBack');
    classremove();
}

function push() {
    $(".feedback").removeClass('activeFeedBack');
}

function aboutClose() {
    $("#aboutMenu").removeClass("aboutActive");
}

function start() {
    $("#bodys").toggleClass("load");
}
/*
function bgcolor(c) {
    switch (c) {
        case "colorD":
            document.getElementById("siteTheme").setAttribute("content", "#212121");
            $("body").css("background-color", "#212121");
            $("#logo").removeClass("logoTheme");
            $(".mobileBtn").removeClass('mbTheme');
            $(".btn").removeClass('btn_numb_theme');
            $(".clear").removeClass('clTheme');
            $(".btnNav").removeClass('btnTheme');
            $(".textArea").removeClass('taTheme');
            $(".feedback").removeClass('fbTheme');
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
            $(".mobileBtn").addClass('mbTheme');
            $(".btn").addClass('btn_numb_theme');
            $(".clear").addClass('clTheme');
            $(".btnNav").addClass('btnTheme');
            $(".textArea").addClass('taTheme');
            $(".feedback").addClass('fbTheme');
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
}*/

function setting() {
    $("#settings").toggleClass("setActive");
    classremove();
}

function setClose() {
    $("#settings").removeClass("setActive");
}

function openNote() {
	$('.notes').toggleClass('notesActive');
	$('.fas').toggleClass('fa-chevron-right');
}

function clearNote() {
	document.getElementById('note').value = '';
}
