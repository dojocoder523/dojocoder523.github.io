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
    document.getElementById("n1").value = exp1 + ' = ' + exp;
    document.getElementById('journal').value += exp1 + ' = ' + exp + '\n';
  }
}

function clr() {
  var n = document.getElementById("n1").value;
  document.getElementById("n1").value = n.substring(0, n.length - 1);
}

function resetButton() {
    document.getElementById("n1").value = "";
}

function menu() {
    $("#nav").toggleClass("active");
    $('#mobileBtn').addClass('btnClose');
}

function menuClose() {
  $("#nav").removeClass("active");
  $('#mobileBtn').removeClass('btnClose');
}

function classremove() {
    $("#nav").removeClass("active");
    $('#mobileBtn').removeClass('btnClose');
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


function bgcolor(c) {
    switch (c) {
        case "d":
            document.getElementById("siteTheme").setAttribute("content", "#212121");
            $("body").css("background-color", "#212121");
            $("#logo").removeClass("logoTheme");
            $("#mobileBtn").removeClass('mbTheme');
            $('.equal').removeClass('eqTheme');
            $('#clbutt').removeClass('clbTheme');
            $('.header').removeClass('hedTheme');
            $(".btn").removeClass('btn_numb_theme');
            $(".clear").removeClass('clTheme');
            $(".textArea").removeClass('taTheme');
            $('#numBlock').removeClass('nbTheme');
            $(".feedback button").css("background-color", "#76FF03");
            $(".feedback button").css("color", "#000");
            $("#settings").removeClass("setTheme");
            $("#settings button").css("background", "#76FF03");
            $("#settings button").css("color", "#000");
            $("#aboutMenu").removeClass("aboutTheme");
            $("#aboutMenu button").css("background", "#76FF03");
            $("#aboutMenu button").css("color", "#000");
            break;
        case "w":
            $("body").css("background-color", "#fff");
            $('#numBlock').addClass('nbTheme');
            $(".btn").addClass('btn_numb_theme');
            $(".clear").addClass('clTheme');
            $('.equal').addClass('eqTheme');
            $('#clbutt').addClass('clbTheme');
            $('.header').addClass('hedTheme');
            $("#logo").addClass("logoTheme");
            $("#mobileBtn").addClass('mbTheme');
            $('.textArea').addClass('taTheme');
            $('#journal').addClass('jTheme');
    }
}

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
	document.getElementById('journal').value = '';
}

function down() {
	document.getElementById('journal').classList.toggle('noteActive');
  $('.fas').toggleClass('fa-chevron-up');
  $('#numBlock').toggleClass('nbActive');
  $('#clbutt').toggleClass('clActive');
  $('#n1').toggleClass('taActive');
  $('.fa').toggleClass('fa-trash-alt');
  $('#bsp').toggleClass('actBsp');
  $('#clnot').toggleClass('clnActive');
}
