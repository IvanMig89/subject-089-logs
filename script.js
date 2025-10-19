// Effetto di digitazione tipo terminale
function typeEffect(element, speed) {
  const text = element.innerText;
  element.innerText = "";
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerText += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// Attiva l'effetto digitazione al caricamento
window.addEventListener("load", () => {
  document.querySelectorAll(".typing").forEach(el => typeEffect(el, 15));
});
