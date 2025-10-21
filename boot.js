const bootLines = [
  '> ACCESSO AUTORIZZATO: SUBJECT-089',
  '> INIZIALIZZAZIONE SISTEMA...',
  '> RECUPERO DATI MEMORIA...',
  '> ATTENDERE...'
];

const bootText = document.getElementById('boot-text');
const bootScreen = document.getElementById('boot-screen');
const wrap = document.querySelector('.wrap');
const audioEl = document.getElementById('bg-audio');

let i = 0;

function typeLine() {
  if (i >= bootLines.length) {
    setTimeout(() => {
      bootScreen.classList.add('hidden');
      wrap.classList.remove('hidden');
      try {
        audioEl.volume = 0.1;
        audioEl.play().catch(() => {
          const warn = document.createElement('div');
          warn.textContent = '⚠ Audio bloccato. Clicca qui per attivarlo.';
          warn.style.color = '#00ffff';
          warn.style.cursor = 'pointer';
          warn.style.marginTop = '20px';
          warn.onclick = () => {
            audioEl.play();
            warn.remove();
          };
          document.body.appendChild(warn);
        });
      } catch(e) {}
    }, 1000);
    return;
  }
  bootText.textContent += bootLines[i] + '\n';
  i++;
  setTimeout(typeLine, 1000);
}

window.onload = () => {
  typeLine();
};
