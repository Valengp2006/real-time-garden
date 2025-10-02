// server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

// servir archivos estáticos
app.use(express.static("public"));

// lista de semillas compartidas
let seeds = [];

// lógica de comunicación en tiempo real
io.on("connection", (socket) => {
  console.log("✅ Nuevo usuario conectado:", socket.id);

  // enviar las semillas actuales al nuevo usuario
  socket.emit("updateSeeds", seeds);

  // cuando un usuario planta semilla
  socket.on("plantSeed", (seed) => {
    seeds.push(seed);
    io.emit("updateSeeds", seeds);
  });

  // cuando un usuario empuja (nudge) una semilla
  socket.on("nudgeSeed", (point) => {
    seeds = seeds.map((seed) => {
      const dx = seed.x - point.x;
      const dy = seed.y - point.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 50) { // rango de influencia
        return {
          ...seed,
          x: seed.x + dx * 0.1,
          y: seed.y + dy * 0.1,
          color: `hsl(${Math.random() * 360}, 80%, 50%)`
        };
      }
      return seed;
    });

    io.emit("updateSeeds", seeds);
  });

  // cuando un usuario se desconecta
  socket.on("disconnect", () => {
    console.log("Usuario desconectado:", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`🌱 Server running on http://localhost:${PORT}`);
});