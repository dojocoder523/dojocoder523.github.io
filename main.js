let btn = document.querySelectorAll('.num');
let text = document.querySelector('#n1');

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
       let dat = this.getAttribute('data');
        if (text.value === ' '){
            text.value = dat;
        }
        else {
            text.value += dat;
        }
          
    }
}


let equal = document.querySelector('.equal');
equal.onclick = function () {
      let exp = text.value, exp1 = [];
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
          alert('На 0 делить нельзя!');
          text.value = '';
      } else {
          text.value += ' = ' + exp;
      }
        
}
let clr = document.querySelector('.clr');
clr.onclick = function () {
    text.value = '';
}
let bsp = document.querySelector('.backSpace');
bsp.onclick = function () {
    let n = text.value;
    text.value = n.substring(0, n.length - 1);
}

let numPerc = document.querySelector('#number');
let percent = document.querySelector('#percent');
let result = document.querySelector('#result'),
ok = document.querySelector('.ok');


ok.onclick = function () {
  let pd = numPerc.value*percent.value/100;
  result.value = pd;
} 

let prcCalc = document.querySelector('#percentCalc'), prcBtn = document.querySelector('.prc'),
clsPerc = document.querySelector('.clsPerc');

prcBtn.onclick = function () {
  prcCalc.classList.add('percAct');
}

clsPerc.onclick = function () {
  prcCalc.classList.remove('percAct');
}

let prBtn = document.querySelectorAll('.perBtn'),
numBtn = document.querySelector('.numIn')
numBoard = document.querySelector('#number');

numBtn.onclick = function numInBoard () {
  numBoard.value = '0';
  for (let a = 0; a < prBtn.length; a++) {
    prBtn[a].onclick = function () {
      let dat1 = this.getAttribute('data');
        if (numBoard.value == '0') {
          numBoard.value = dat1;
        }else {
          numBoard.value += dat1;
        }
    }
  }
}

let perCalc = document.querySelector('.per')
perBoard = document.querySelector('#percent');

perCalc.onclick = function () {
  perBoard.value = '0';
  for (let a = 0; a < prBtn.length; a++) {
    prBtn[a].onclick = function () {
      let dat1 = this.getAttribute('data');
      if (perBoard.value == '0' ) {
        perBoard.value = dat1;
      }else {
        perBoard.value += dat1;
      }
    }
  }
}

let prClr = document.querySelector('.prClr');

prClr.onclick = function () {
  numBoard.value = '';
  perBoard.value = '';
  result.value = '';
}