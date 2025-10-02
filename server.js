const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Escuchar conexiones de clientes
io.on("connection", (socket) => {
  console.log("Nuevo usuario conectado:", socket.id);

  // Reenviar los "eventos del jardín" a todos los clientes
  socket.on("plantar", (data) => {
    io.emit("plantar", data);
  });

  socket.on("regar", (data) => {
    io.emit("regar", data);
  });

  socket.on("disconnect", () => {
    console.log("Usuario desconectado:", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});