
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-theme");

    // Change icon
    if (body.classList.contains("light-theme")) {
      toggleBtn.textContent = "🌞";
    } else {
      toggleBtn.textContent = "🌙";
    }
  });

