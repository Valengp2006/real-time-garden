// Nos conectamos al servidor socket.io
const socket = io();

// Obtenemos el canvas y su contexto
const canvas = document.getElementById("garden");
const ctx = canvas.getContext("2d");

// Ajustamos el tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Guardamos las semillas plantadas
let seeds = [];

// Función para dibujar una semilla
function drawSeed(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 8, 0, Math.PI * 2);
  ctx.fillStyle = "limegreen";
  ctx.fill();
  ctx.stroke();
}

// Función para limpiar el jardín
function clearGarden() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  seeds = [];
}

// Evento: click para plantar semilla
canvas.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // Dibujar en este cliente
  drawSeed(x, y);

  // Guardar semilla localmente
  seeds.push({ x, y });

  // Enviar al servidor
  socket.emit("plant", { x, y });
});

// Botón para limpiar el jardín
document.getElementById("clearBtn").addEventListener("click", () => {
  clearGarden();
  socket.emit("clear");
});

// --- Eventos de socket.io ---

// Cuando alguien planta, todos lo ven
socket.on("plant", (data) => {
  drawSeed(data.x, data.y);
  seeds.push(data);
});

// Cuando alguien limpia el jardín
socket.on("clear", () => {
  clearGarden();
});