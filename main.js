let btn = document.querySelectorAll('.num');
let text = document.querySelector('#n1');

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
       let dat = this.getAttribute('data');
        if (text.value == ''){
            text.value = dat;
        }
        else {
            text.value += dat;
        }
          
    }
}

let jrActive = document.querySelector('#journal');
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
     
        exp1.push(text.value);
        jrActive.value += exp1 + '\n';
         
         
      }
        
}
let journal = document.querySelector('.jur'),
panel = document.querySelector('#pan');
journal.onclick = function () {
   jrActive.classList.toggle('activeJur');
   panel.classList.toggle('panActive');
   text.classList.toggle('n1Active');
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
let del = document.querySelector('.del');
del.onclick = function () {
    exp1 = '';
    jrActive.value = exp1;
}

let mBtn = document.querySelector('.menuBtn');
let mMenu = document.querySelector('#mMenu');
let cont = document.querySelector('#container');
mBtn.onclick = function () {
    mMenu.classList.add('menuActive');
    cont.classList.add('conActive');
}
let clBtn = document.querySelector('.closeBtn');

clBtn.onclick = function () {
    mMenu.classList.remove('menuActive');
    cont.classList.remove('conActive');
}
let setActive = document.querySelector('#settings'), setBtn = document.querySelector('.setAct'); 
setBtn.onclick = function () {
    setActive.classList.add('setActive');
    
}

let setClose = document.querySelector('.setClose');

setClose.onclick = function () {
    setActive.classList.remove('setActive');
}
let about = document.querySelector('#aboutMe'),
    abBtn = document.querySelector('.abAct'),
    abClose = document.querySelector('.abClose');
abBtn.onclick = function () {
    about.classList.add('aboutAct');
}
abClose.onclick = function () {
    about.classList.remove('aboutAct');
}
