
document.addEventListener("DOMContentLoaded", () => {
    const bootText = document.getElementById("boot-text");
    const terminal = document.getElementById("terminal");
    const bootScreen = document.getElementById("boot-screen");

    const audioAmbient = new Audio("audio/ambient.mp3");
    audioAmbient.loop = true;
    audioAmbient.volume = 0.2;

    const typeSound = new Audio("audio/type.mp3");

    const lines = [
        "> INIZIALIZZAZIONE SISTEMA...",
        "> VERIFICA MEMORIA...",
        "> ACCESSO AUTORIZZATO: SUBJECT-089",
        "> CARICAMENTO DATI..."
    ];

    let i = 0;

    function playTyping(line) {
        let index = 0;
        const interval = setInterval(() => {
            bootText.textContent += line[index];
            typeSound.currentTime = 0;
            typeSound.play();
            index++;
            if (index >= line.length) {
                clearInterval(interval);
                bootText.textContent += "\n";
                i++;
                if (i < lines.length) {
                    setTimeout(() => playTyping(lines[i]), 500);
                } else {
                    setTimeout(() => {
                        bootScreen.classList.add("hidden");
                        terminal.classList.remove("hidden");
                        audioAmbient.play();
                    }, 1000);
                }
            }
        }, 60);
    }

    playTyping(lines[i]);
});
