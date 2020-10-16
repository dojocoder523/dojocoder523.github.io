let btn = document.querySelectorAll('.num');
let text = document.querySelector('#n1');
let res;
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function() {
    text.style.font = "200 4vh 'Comfortaa'";
    text.style.color = "#fff";
    dat = this.getAttribute('data');
    if (text.value == '') {
      text.value = dat;
    }else if (text.value == 'На 0 делить нельзя!' + '\n' + '\n' + '(Нажми кнопку очистки чтобы вернуться назад)') {
      text.value = dat;
    }else {
      text.value += dat;
    }
};
   
}

let equal = document.querySelector('.equal');
equal.onclick = function () {
  let exp = text.value;
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
    text.style.color = '#1ABC9C';
    text.value += ' = ' + exp;
    
    
  }
};
let clr = document.querySelector('.clr');
clr.onclick = function() {
  if (text.value == 'На 0 делить нельзя!' + '\n' + '\n' + '(Нажми кнопку очистки чтобы вернуться назад)') {
    text.value = '';
  }else {
    text.value = '';
  }
};


let bsp = document.querySelector('.backSpace');
bsp.onclick = function() {
  let n = text.value;
  if (text.value == 'На 0 делить нельзя!' + '\n' + '\n' + '(Нажми кнопку очистки чтобы вернуться назад)') {
    text.value = '';
  }else {
    text.value = n.substring(0, n.length - 1);
  }
};

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
  numBtn.style.color = "#1ABC9C";
  numBoard.style.color = "#1ABC9C";
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
  perCalc.style.color = "#1ABC9C";
  perBoard.style.color = "#1ABC9C";
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
  result.value = pd;
  perBoard.value += '%';
};

let prClr = document.querySelector('.prClr');

prClr.onclick = function() {
  numBoard.value = '';
  perBoard.value = '';
  result.value = '';
};

let about = document.querySelector('#aboutCont');
let aboutBtn = document.querySelector('.abActive');
let open = document.querySelector('.openActive');

open.onclick = function () {
  about.classList.toggle('active');
}
aboutBtn.onclick = function () {
  about.classList.remove('active');
}
let chInd = document.querySelector('.fa-bolt'),
chPr = document.querySelector('.chPerc'),
batteryLevel = document.querySelector('#batteryCharge');
navigator.getBattery().then(function (battery) {
  function updateAllBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
  }
  updateAllBatteryInfo();
  
  battery.addEventListener('chargingchange', function() {
    updateChargeInfo();
  });
  
  function updateChargeInfo() {
    console.log(battery.charging);
    if (battery.charging) {
      chInd.style.visibility = 'visible';
      batteryLevel.classList.add('chargeActive');
    }else {
      chInd.style.visibility = 'hidden';
      batteryLevel.classList.remove('chargeActive');
    }
  }
  battery.addEventListener('levelchange', updateLevelInfo);
  function updateLevelInfo() {
    let chLev = battery.level*100;
    chLev = chLev.toFixed();
    chPr.innerHTML = chLev + '%';
    batteryLevel.style.height = chLev + '%';
  }
});
