const socket = io();

// Obtener canvas y contexto
const canvas = document.getElementById("gardenCanvas");
const ctx = canvas.getContext("2d");

// Lista de plantas locales
let plants = [];

// Dibujar planta (círculo verde)
function drawPlant(x, y) {
  ctx.fillStyle = "limegreen";
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fill();
}

// Redibujar todas las plantas
function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of plants) {
    drawPlant(p.x, p.y);
  }
}

// Evento click para plantar
canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Enviar planta al servidor
  socket.emit("plant", { x, y });
});

// Botón limpiar
document.getElementById("clearBtn").addEventListener("click", () => {
  socket.emit("clear");
});

// Escuchar eventos desde el servidor
socket.on("plant", (data) => {
  plants.push(data);
  redraw();
});

socket.on("clear", () => {
  plants = [];
  redraw();
});