const pressBtn = document.querySelector('.press'),
     eventKey = document.querySelector('.e-key'),
     eventKeycode = document.querySelector('.e-keycode'),
     eventCode = document.querySelector('.e-code'),
     list = document.querySelector('.key');

window.addEventListener('keydown', (e) => {
    list.classList.add('show');
    pressBtn.classList.add('hide');
    eventKey.innerHTML = e.key;
    eventKeycode.innerHTML = e.keyCode;
    eventCode.innerHTML = e.code;
})