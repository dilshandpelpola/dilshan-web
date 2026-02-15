document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("line-bg");
  const quantity = 50;

  if (!container) return;

  for (let i = 0; i < quantity; i++) {
    const firefly = document.createElement("div");
    firefly.className = "firefly";

    firefly.style.left = Math.random() * 100 + "%";
    firefly.style.top = Math.random() * 100 + "%";

    // Randomize the "Flash" timing for each firefly
    const flashDuration = (Math.random() * 3000 + 4000) + "ms"; // 4-7 seconds
    const flashDelay = Math.random() * 5 + "s";
    const moveDuration = (Math.random() * 10 + 15) + "s";

    // This applies the unique timing to the yellow flash
    firefly.innerHTML = `<style>.firefly:nth-child(${i+1})::before { 
      animation-duration: ${flashDuration}; 
      animation-delay: ${flashDelay}; 
    }</style>`;

    firefly.style.animation = `move-random ${moveDuration} linear infinite`;
    
    container.appendChild(firefly);
  }
});