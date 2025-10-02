const socket = io();
const canvas = document.getElementById("gardenCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let seeds = [];

// escuchar semillas desde el servidor
socket.on("updateSeeds", (serverSeeds) => {
  seeds = serverSeeds;
  drawGarden();
});

// plantar semilla al hacer clic
canvas.addEventListener("click", (e) => {
  const seed = {
    x: e.clientX,
    y: e.clientY,
    size: 5,
    color: `hsl(${Math.random() * 360}, 80%, 50%)`,
  };
  socket.emit("plantSeed", seed);
});

// empujar semilla al arrastrar
canvas.addEventListener("mousemove", (e) => {
  if (e.buttons === 1) {
    socket.emit("nudgeSeed", { x: e.clientX, y: e.clientY });
  }
});

// dibujar todas las semillas
function drawGarden() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  seeds.forEach((seed) => {
    ctx.beginPath();
    ctx.arc(seed.x, seed.y, seed.size, 0, Math.PI * 2);
    ctx.fillStyle = seed.color;
    ctx.fill();
  });
}