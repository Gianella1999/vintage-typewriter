import './style.css'

//create keyboard
const keyboardLayout = [
  ['1','2','3','4','5','6','7','8','9','0','-','+'],
  ['Q','W','E','R','T','Y','U','I','O','P','.', '→'],
  ['A','S','D','F','G','H','J','K','L',':', '"'],
  ['Z','X','C','V','B','N','M',';','.','?'],
  [''] // backspace
];

const container = document.querySelector('.typewriter_keyboard');

  keyboardLayout.forEach(row => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'keys_row';
    row.forEach(key => {
      const btn = document.createElement('button');
      if(key === ''){
        btn.className = "key-space"
      }else {
      btn.className = 'key';
      btn.textContent = key;
      }
      // data-char guarda el valor real (ej: para '⌫' guardamos 'backspace')
      const charValue = (key === '⌫') ? 'backspace' : key;
      btn.dataset.char = charValue;
      rowDiv.appendChild(btn);
    });
    container.appendChild(rowDiv);
  });

