document.addEventListener("DOMContentLoaded", () => {
  const bootScreen = document.getElementById("boot-screen");
  const mainContent = document.getElementById("main-content");
  const staticAudio = document.getElementById("static-audio");

  function startAudio() {
    staticAudio.volume = 0.1;
    staticAudio.play().catch(() => {
      console.warn("Autoplay bloccato. L'audio partirà al primo input.");
      document.addEventListener("click", () => staticAudio.play(), { once: true });
    });
  }

  startAudio();

  const text = bootScreen.textContent.trim();
  bootScreen.textContent = "";
  let i = 0;
  const typing = setInterval(() => {
    bootScreen.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(typing);
      setTimeout(() => {
        bootScreen.classList.add("hidden");
        mainContent.classList.remove("hidden");
      }, 5000);
    }
  }, 80);
});
