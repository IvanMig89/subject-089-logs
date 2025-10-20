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

  const typingSound = new Audio("https://cdn.pixabay.com/audio/2022/03/15/audio_38d4f5b58f.mp3");
  typingSound.volume = 0.2;

  let lineIndex = 0;

  function typeLine(line, callback) {
    let i = 0;
    const interval = setInterval(() => {
      bootText.textContent += line.charAt(i);
      typingSound.currentTime = 0;
      typingSound.play();
      i++;
      if (i >= line.length) {
        clearInterval(interval);
        bootText.textContent += "\n";
        setTimeout(callback, 400);
      }
    }, 40);
  }

  function showNextLine() {
    if (lineIndex < bootLines.length) {
      typeLine(bootLines[lineIndex], () => {
        lineIndex++;
        showNextLine();
      });
    } else {
      setTimeout(() => {
        bootScreen.classList.add("hidden");
        terminal.classList.remove("hidden");
      }, 1000);
    }
  }

  showNextLine();
});
