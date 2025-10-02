// espectador.js
const socket = io();
console.log("✅ espectador.js cargado correctamente");

// Recibir eventos del servidor
socket.on("new-plant", (data) => {
  console.log("🌱 Nueva planta recibida:", data);
  window.garden.addPlant(data.type, data.x, data.y);
});

// Conectar botones
document.getElementById("plantBtn").addEventListener("click", () => {
  socket.emit("plant", { type: "plant", x: randX(), y: randY() });
});

document.getElementById("flowerBtn").addEventListener("click", () => {
  socket.emit("plant", { type: "flower", x: randX(), y: randY() });
});

document.getElementById("treeBtn").addEventListener("click", () => {
  socket.emit("plant", { type: "tree", x: randX(), y: randY() });
});

// Helpers
function randX() { return Math.random() * 600; }
function randY() { return Math.random() * 400; }