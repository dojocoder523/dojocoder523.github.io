let btn = document.querySelectorAll('.num');
let text = document.querySelector('#n1');
let res;
text.style.font = "200 4vh 'Comfortaa'";
text.value = 0;
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function() {
    text.style.font = "200 4vh 'Comfortaa'";
    text.style.color = "#fff";
   let  dat = this.getAttribute('data');
    if (text.value == 0) {
      text.value = dat;
    }else if (text.value == 'На 0 делить нельзя!' + '\n' + '\n' + '(Нажми кнопку очистки чтобы вернуться назад)') {
      text.value = dat;
    }else {
      text.value += dat;
    }
};
   
}

let equal = document.querySelector('.equal'),
hysBoard = document.querySelector('.hysBoard');
equal.onclick = function () {
  let exp = text.value,
  exp1 = [];
  exp = eval(exp);

  if (exp % 1 != 0) {
    exp = exp.toFixed(2);
  } else {
    exp = exp.toFixed();
  }
  if (exp == undefined) {
    text.value = '';
  }
  if (exp == Infinity) {
    text.style.font = "200 2.5vh 'Comfortaa'";
    text.value = 'На 0 делить нельзя!' + '\n' + '\n' + '(Нажми кнопку очистки чтобы вернуться назад)';
  } else {
    text.style.color = '#0F9B97';
    text.value += ' = ' + exp;
    exp1.push(text.value);
    hysBoard.value += exp1 + '\n';
  }
};
let clr = document.querySelector('.clr');
clr.onclick = function() {
  text.style.color = '#fff';
  if (text.value == 'На 0 делить нельзя!' + '\n' + '\n' + '(Нажми кнопку очистки чтобы вернуться назад)') {
    text.value = 0;
  }else {
    text.value = 0;
  }
};


let bsp = document.querySelector('.backSpace');
bsp.onclick = function() {
  let n = text.value;
  if (text.value == 'На 0 делить нельзя!' + '\n' + '\n' + '(Нажми кнопку очистки чтобы вернуться назад)') {
    text.value = 0;
  }else {
    text.value = n.substring(0, n.length - 1);
  }
};

let prcBtn = document.querySelector('.prc');

prcBtn.onclick = function () {

  if (text.value == 0 || text.value == '') {
    text.value = 0;
  }else {
  text.style.color = '#0F9B97';
  text.value = text.value + ' % ' + eval(text.value)/100;
  }
}

let jurBtn = document.querySelector('.jur'),
jrActive = document.querySelector('#journal'),
clsJur = document.querySelector('.clsJur');

jurBtn.onclick = function () {
  jrActive.classList.add('jrAct');
}

clsJur.onclick = function () {
  jrActive.classList.remove('jrAct');
}

let hysClr = document.querySelector('.hysClr');

hysClr.onclick = function () {
  hysBoard.value = '';
  exp1 = '';
}
let about = document.querySelector('#aboutCont');
let aboutBtn = document.querySelector('.abActive');
let open = document.querySelector('.openActive');

open.onclick = function () {
  about.classList.toggle('active');
}
aboutBtn.onclick = function () {
  about.classList.remove('active');
}

let adOp = document.querySelector('#additionalOper'),
adBtn = document.querySelector('.adBtn');

adBtn.onclick = function () {
  adOp.classList.toggle('adActive');
  document.querySelector('#numBlock').classList.toggle('nbActive');
}
// Тригонометрические операции

function factorial(f) {
  return (f != 1) ? f * factorial(f - 1) : 1;
}

let adBt = document.querySelectorAll('.adBt');

for (let o = 0; o < adBt.length; o++) {
  adBt[o].onclick = function () {
    text.style.color = '#0F9B97';
    let oper = this.getAttribute('data');
    let jr = text.value;
    if (oper == 'pi') {
      if (text.value == 0) {
        text.value = 0;
      }else {
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