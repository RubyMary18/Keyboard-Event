const pressBtn = document.querySelector('.press');
const eventKey = document.querySelector('.e-key');
const eventKeycode = document.querySelector('.e-keycode');
const eventCode = document.querySelector('.e-code');
const list = document.querySelector('.key');

window.addEventListener('keydown', (e) => {
    list.classList.add('show');
    pressBtn.classList.add('hide');
    eventKey.innerHTML = e.key;
    eventKeycode.innerHTML = e.keyCode;
    eventCode.innerHTML = e.code;
})