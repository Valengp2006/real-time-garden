const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));

let seeds = [];
let nextId = 1;

io.on('connection', (socket) => {
  console.log('Usuario conectado:', socket.id);

  socket.emit('seedsUpdate', seeds);

  socket.on('plant', (pos) => {
    const seed = {
      id: nextId++,
      x: pos.x, y: pos.y,
      size: 5 + Math.random() * 8,
      age: 0,
      color: { r: Math.random()*255|0, g: Math.random()*255|0, b: Math.random()*255|0 }
    };
    seeds.push(seed);
    io.emit('seedsUpdate', seeds);
  });

  socket.on('nudge', (data) => {
    const s = seeds.find(se => se.id === data.id);
    if (s) {
      s.x += (data.nx - s.x) * 0.25;
      s.y += (data.ny - s.y) * 0.25;
      io.emit('seedsUpdate', seeds);
    }
  });

  socket.on('clearGarden', () => {
    seeds = [];
    io.emit('seedsUpdate', seeds);
  });

  socket.on('disconnect', () => {
    console.log('Usuario desconectado:', socket.id);
  });
});

setInterval(() => {
  seeds.forEach(s => {
    s.age++;
    if (s.size < 40) s.size += 0.2;
  });
  io.emit('seedsUpdate', seeds);
}, 1000);

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
