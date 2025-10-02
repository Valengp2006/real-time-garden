const socket = io();
const canvas = document.getElementById("spectatorCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let seeds = [];

// recibir semillas desde el servidor
socket.on("updateSeeds", (serverSeeds) => {
  seeds = serverSeeds;
  drawGarden();
});

function drawGarden() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  seeds.forEach((seed) => {
    ctx.beginPath();
    ctx.arc(seed.x, seed.y, seed.size, 0, Math.PI * 2);
    ctx.fillStyle = seed.color;
    ctx.fill();
  });
}