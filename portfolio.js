// Theme toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

// Reveal hidden info
const revealBtn = document.getElementById("revealBtn");
const hiddenInfo = document.getElementById("hiddenInfo");

revealBtn.addEventListener("click", () => {
    hiddenInfo.classList.toggle("visible");

    if (hiddenInfo.classList.contains("visible")) {
        revealBtn.textContent = "Hide Info";
    } else {
        revealBtn.textContent = "Show Hidden Info";
    }
});
