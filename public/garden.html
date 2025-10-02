const socket = io();

// Obtener canvas
const canvas = document.getElementById("spectatorCanvas");
const ctx = canvas.getContext("2d");

let plants = [];

// Dibujar planta
function drawPlant(x, y) {
  ctx.fillStyle = "limegreen";
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fill();
}

// Redibujar todo
function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of plants) {
    drawPlant(p.x, p.y);
  }
}

// Escuchar eventos del servidor
socket.on("plant", (data) => {
  plants.push(data);
  redraw();
});

socket.on("clear", () => {
  plants = [];
  redraw();
});