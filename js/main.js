let btn = document.querySelectorAll('.num');
let text = document.querySelector('#n1');
let res;
const ERR_DIV_MESS = 'Warning: "You cannot divide by zero!"' + '\n' + '\n' + '(Press the clear button to go back)';
const BIG_FONT_SIZE = "400 4vh 'Roboto Condensed', sans-serif";
const SMALL_FONT_SIZE = "400 3vh 'Roboto Condensed', sans-serif";
const GREEN = '#00cc6a', WHITE = '#fff';
text.style.font = BIG_FONT_SIZE;
text.style.color = WHITE;
text.value = '';

// Функция ввода данных в текстовое поле

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function() {
    text.style.font = BIG_FONT_SIZE;
    text.style.color = WHITE;
    let dat = this.getAttribute('data');
    if (text.value === '') {
      text.value = dat;
    } else if (text.value == ERR_DIV_MESS) {
      text.value = dat;
      text.style.textAlign = "right";
    } else {
      text.value += dat;
    }
  };

}

let equal = document.querySelector('.equal'),
  hysBoard = document.querySelector('.hysBoard');
  
/*
 Данная функция получает выражение 
 из текстового поля и производит
 вычисление, результат записывается 
 в переменную exp, после нескольких 
 проверок, если все хорошо, результат 
 плюсуется к выражению и выводится в 
 текстовое поле. После чего выведенная
 строка добавляется к массиву exp1 и 
 происходит обновление журнала.
*/

equal.onclick = function() {
  let exp = text.value, exp1 = [];
  exp = eval(exp);
  
  // Проверка, является ли результат выражения вещественным числом, если да то сократить до сотых, если нет, то до целых.
  
  exp % 1 !== 0 
     ? exp = exp.toFixed(2) 
     : exp = exp.toFixed();
     
// Защиты от дураков: 

  if (exp === 'undefined') { text.value = ''; }
  
  if (exp == 'Infinity' || exp == 'NaN') {
    text.style.font = SMALL_FONT_SIZE;
    text.value = ERR_DIV_MESS;
    text.style.textAlign = "center";
  } else {
    text.style.color = GREEN;
    text.value += '=' + exp;
    exp1.push(text.value);
    hysBoard.value += exp1 + '\n';
  }
};
let clr = document.querySelector('.clr');
clr.onclick = function() {
  text.style.color = WHITE;
  if (text.value == ERR_DIV_MESS || text.value) {
    text.value = '';
    text.style.textAlign = "right";
  }
};

let bsp = document.querySelector('.backSpace');
bsp.onclick = function() {
  let n = text.value;
  if (text.value == ERR_DIV_MESS) {
    text.value = '';
    text.style.textAlign = "right";
  } else {
    text.value = n.substring(0, n.length - 1);
  }
};

let jurBtn = document.querySelector('.jur'),
  jrActive = document.querySelector('#journal'),
  clsJur = document.querySelector('.clsJur');

jurBtn.onclick = function() {
  jrActive.classList.add('jrAct');
}

clsJur.onclick = function() {
  jrActive.classList.remove('jrAct');
}

let hysClr = document.querySelector('.hysClr');

hysClr.onclick = function() {
  hysBoard.value = '';
  exp1 = '';
}

let numPerc = document.querySelector('#number');
let percent = document.querySelector('#percent');
let result = document.querySelector('#result'),
  ok = document.querySelector('.ok');

let prcCalc = document.querySelector('#percentCalc'),
  prcBtn = document.querySelector('.prc'),
  clsPerc = document.querySelector('.clsPerc');

prcBtn.onclick = function() {
  prcCalc.classList.add('percAct');
};

clsPerc.onclick = function() {
  prcCalc.classList.remove('percAct');
};

let prBtn = document.querySelectorAll('.perBtn'),
  numBtn = document.querySelector('.n'),
numBoard = document.querySelector('#number');

numBtn.onclick = function numInBoard() {
  numBoard.value = '0';
  numBtn.style.color = GREEN;
  numBoard.style.color = GREEN;
  perCalc.style.color = WHITE;
  perBoard.style.color = WHITE;
  for (let a = 0; a < prBtn.length; a++) {
    prBtn[a].onclick = function() {
      let dat1 = this.getAttribute('data');
      numBoard.value == '0' ? 
      numBoard.value = dat1
      : numBoard.value += dat1;
    }
  }
};

let perCalc = document.querySelector('.p')
perBoard = document.querySelector('#percent');

perCalc.onclick = function() {
  perBoard.value = '0';
  perCalc.style.color = GREEN;
  perBoard.style.color = GREEN;
  numBtn.style.color = WHITE;
  numBoard.style.color = WHITE;
  for (let a = 0; a < prBtn.length; a++) {
    prBtn[a].onclick = function() {
      let dat1 = this.getAttribute('data');
      if (perBoard.value == '0') {
        perBoard.value = dat1;
      } else {
        perBoard.value += dat1;
      }
    }
  }
};

ok.onclick = function() {
  let pd = numPerc.value * percent.value / 100;
  if ((numBoard.value == '0' || numBoard.value == '') || (perBoard.value == '0' || perBoard.value == '')) {
    result.value = '0';
  }else {
    if (percent.value > 100){
      result.value = '% > 100';
    }else {
      result.value = pd;
    }
  }
};

let prClr = document.querySelector('.prClr');

prClr.onclick = function() {
  numBoard.value = '';
  perBoard.value = '';
  result.value = '';
};

let menu = document.querySelector('#appMenu');
let menuBtn = document.querySelector('.openActive');


menuBtn.onclick = function () {
  menu.classList.add('menuActive');
}

let menuCloseBtn = document.querySelector('.menuClose');

menuCloseBtn.onclick = function () {
  menu.classList.remove('menuActive');
}


const accord = document.querySelectorAll('.accordion-item');

for (item of accord) {
	item.addEventListener('click', function() {

		if (this.classList.contains('active')) {
			this.classList.remove('active');
		} else {
			for (el of accord) {
				el.classList.remove('active');
			}
			this.classList.add('active');

		};


	});

}

let panBtn = document.querySelectorAll('.panBtn');

for (item of panBtn) {
	item.addEventListener('click', function() {

		if (this.style.color == GREEN) {
			this.style.color = WHITE;
		} else {
			for (el of panBtn) {
				el.style.color = WHITE;
			}
			this.style.color = GREEN;

		};

	});

}


let adOp = document.querySelector('#additionalOper'),
  adBtn = document.querySelector('.adBtn'),
  ioBoard = document.querySelector('#ioBoard');

adBtn.onclick = function() {
  adOp.classList.toggle('adActive');
}
// Тригонометрические операции

function factorial(f) {
  return (f != 1) ? f * factorial(f - 1) : 1;
}

let adBt = document.querySelectorAll('.adBt');

for (let o = 0; o < adBt.length; o++) {
  adBt[o].onclick = function() {
    text.style.font = BIG_FONT_SIZE;
    let oper = this.getAttribute('data');
    let jr = text.value;
    if (text.value == ERR_DIV_MESS) {
      text.value = '0';
      text.style.textAlign = "right";
    }
    if (oper == 'pi') {
      if (text.value === 0) {
        text.value = 0;
      } else {
        text.value = text.value + Math.PI.toFixed(2);
      }
    }
    if (oper == 'sqrt') {
      text.value = Math.sqrt(eval(text.value)).toFixed(2);
    }
    if (oper == 'x^2') {
      text.value = Math.pow(eval(text.value), 2).toFixed(2);
    }
    if (oper == 'x^-1') {
      text.value = Math.pow(eval(text.value), -1).toFixed(2);
    }
    if (oper == 'x!') {
      text.value = factorial(+eval(text.value));
    }
    if (oper == 'lg') {
      text.value = Math.log10(eval(text.value)).toFixed(2);
    }
    if (oper == 'ln') {
      text.value = Math.log(eval(text.value)).toFixed(2);
    }
  }

}
