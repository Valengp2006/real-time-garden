const socket = io();
const canvas = document.getElementById("garden");

// Cuando hago clic en el jardín, planto una semilla
canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  socket.emit("plantar", { x, y });
});

// Cuando hago clic en regar, mando evento a todos
document.getElementById("regar").addEventListener("click", () => {
  socket.emit("regar", {});
});

// Escuchar eventos desde el servidor
socket.on("plantar", (data) => {
  window.garden.addPlant(data.x, data.y);
});

socket.on("regar", () => {
  window.garden.waterPlants();
});