document.addEventListener("DOMContentLoaded", () => {
  const bootText = document.getElementById("boot-text");
  const bootScreen = document.getElementById("boot-screen");
  const terminal = document.getElementById("terminal");

  const lines = [
    "> INIZIALIZZAZIONE SISTEMA...",
    "> VERIFICA MEMORIA...",
    "> ACCESSO AUTORIZZATO: SUBJECT-089",
    "> CARICAMENTO DATI..."
  ];

  let index = 0;

  function typeLine() {
    if (index < lines.length) {
      bootText.textContent += lines[index] + "\n";
      index++;
      setTimeout(typeLine, 1000);
    } else {
      // Dopo l'ultima riga, passa al terminale
      setTimeout(() => {
        bootScreen.classList.add("hidden");
        terminal.classList.remove("hidden");
      }, 1500);
    }
  }

  typeLine();
});
