// Importar dependencias
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

// Inicializar app y servidor
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Servir archivos estáticos desde /public
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "garden.html"));
});

// Manejo de conexiones con socket.io
io.on("connection", (socket) => {
  console.log("Nuevo usuario conectado:", socket.id);

  // Cuando alguien planta una semilla
  socket.on("plant", (data) => {
    console.log("Plantar recibido:", data);
    io.emit("plant", data); // se reenvía a todos los clientes
  });

  // Cuando alguien limpia el jardín
  socket.on("clear", () => {
    console.log("Jardín limpiado por:", socket.id);
    io.emit("clear");
  });

  // Cuando alguien se desconecta
  socket.on("disconnect", () => {
    console.log("Usuario desconectado:", socket.id);
  });
});

// Iniciar servidor
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});