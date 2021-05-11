let btn = document.querySelectorAll('.num');
let text = document.querySelector('#n1');
let res;
text.style.font = "400 4vh 'Roboto Condensed', sans-serif";
text.style.color = "#fff";
text.value = '';
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function() {
    text.style.font = "400 4vh 'Roboto Condensed', sans-serif";
    text.style.color = "#fff";
    let dat = this.getAttribute('data');
    if (text.value === '') {
      text.value = dat;
    } else if (text.value == 'На 0 делить нельзя!' + '\n' + '\n' + '(Нажми кнопку очистки чтобы вернуться назад)') {
      text.value = dat;
    } else {
      text.value += dat;
    }
  };

}

let equal = document.querySelector('.equal'),
  hysBoard = document.querySelector('.hysBoard');
equal.onclick = function() {
  let exp = text.value,
    exp1 = [];
  exp = eval(exp);

  if (exp % 1 !== 0) {
    exp = exp.toFixed(2);
  } else {
    exp = exp.toFixed();
  }

  if (exp === 'undefined') {
    text.value = '';
  }
  if (exp == 'Infinity' || exp == 'NaN') {
    text.style.font = "400 2.5vh 'Roboto Condensed', sans-serif";
    text.value = 'На 0 делить нельзя!' + '\n' + '\n' + '(Нажми кнопку очистки чтобы вернуться назад)';
  } else {
    text.style.color = '#00cc6a';
    text.value += ' = ' + exp;
    exp1.push(text.value);
    hysBoard.value += exp1 + '\n';
  }
};
let clr = document.querySelector('.clr');
clr.onclick = function() {
  text.style.color = '#fff';
  if (text.value === 'На 0 делить нельзя!' + '\n' + '\n' + '(Нажми кнопку очистки чтобы вернуться назад)') {
    text.value = '';
  } else {
    text.value = '';
  }
};


let bsp = document.querySelector('.backSpace');
bsp.onclick = function() {
  let n = text.value;
  if (text.value === 'На 0 делить нельзя!' + '\n' + '\n' + '(Нажми кнопку очистки чтобы вернуться назад)') {
    text.value = '';
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
  numBtn.style.color = "#00cc6a";
  numBoard.style.color = "#00cc6a";
  perCalc.style.color = "#fff";
  perBoard.style.color = "#fff";
  for (let a = 0; a < prBtn.length; a++) {
    prBtn[a].onclick = function() {
      let dat1 = this.getAttribute('data');
      if (numBoard.value == '0') {
        numBoard.value = dat1;
      } else {
        numBoard.value += dat1;
      }
    }
  }
};

let perCalc = document.querySelector('.p')
perBoard = document.querySelector('#percent');

perCalc.onclick = function() {
  perBoard.value = '0';
  perCalc.style.color = "#00cc6a";
  perBoard.style.color = "#00cc6a";
  numBtn.style.color = "#fff";
  numBoard.style.color = "#fff";
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
    numBoard.value = '0';
    perBoard.value = '0';
    result.value = '0';
  }else {
    result.value = pd;
    perBoard.value += '%';
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

		if (this.style.color == "#00cc6a") {
			this.style.color = "#fff";
		} else {
			for (el of panBtn) {
				el.style.color = "#fff";
			}
			this.style.color = "#00cc6a";

		};


	});

}


let adOp = document.querySelector('#additionalOper'),
  adBtn = document.querySelector('.adBtn'),
  ioBoard = document.querySelector('#ioBoard');

adBtn.onclick = function() {
  adOp.classList.toggle('adActive');
  ioBoard.style.zIndex = '2';
}
// Тригонометрические операции

function factorial(f) {
  return (f != 1) ? f * factorial(f - 1) : 1;
}

let adBt = document.querySelectorAll('.adBt');

for (let o = 0; o < adBt.length; o++) {
  adBt[o].onclick = function() {
    text.style.color = '#00d16c';
    let oper = this.getAttribute('data');
    let jr = text.value;
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
