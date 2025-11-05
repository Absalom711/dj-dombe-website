// Intro animation and redirect
document.addEventListener("DOMContentLoaded", () => {
  const introText = document.getElementById("intro-text");
  const djText = document.getElementById("dj-text");

  if (introText && djText) {
    setTimeout(() => {
      introText.style.display = "none";
      djText.classList.remove("hidden");
      djText.style.animation = "fadeInOut 3s ease-in-out forwards";
    }, 3000);

    // Redirect after fade
    setTimeout(() => {
      window.location.href = "home.html";
    }, 6000);
  }
});
