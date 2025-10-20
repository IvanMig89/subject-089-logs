document.addEventListener("DOMContentLoaded", () => {
  const bootScreen = document.getElementById("boot-screen");
  const bootText = document.getElementById("boot-text");
  const terminal = document.getElementById("terminal");

  const bootLines = [
    "> INIZIALIZZAZIONE SISTEMA...",
    "> VERIFICA MEMORIA...",
    "> ACCESSO AUTORIZZATO: SUBJECT-089",
    "> CARICAMENTO DATI..."
  ];

  let lineIndex = 0;

  function showNextLine() {
    if (lineIndex < bootLines.length) {
      bootText.textContent += bootLines[lineIndex] + "\n";
      lineIndex++;
      setTimeout(showNextLine, 1000);
    } else {
      setTimeout(() => {
        bootScreen.classList.add("hidden");
        terminal.classList.remove("hidden");
      }, 1000);
    }
  }

  showNextLine();
});
