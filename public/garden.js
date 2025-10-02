const canvas = document.getElementById("garden");
const ctx = canvas.getContext("2d");

let plants = [];

// Dibujar todas las plantas
function drawGarden() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  plants.forEach((plant) => {
    ctx.beginPath();
    ctx.arc(plant.x, plant.y, plant.size, 0, Math.PI * 2);
    ctx.fillStyle = plant.color;
    ctx.fill();
  });
}

// Agregar nueva planta
function addPlant(x, y) {
  const plant = {
    x,
    y,
    size: 10,
    color: "green",
  };
  plants.push(plant);
  drawGarden();
}

// Hacer crecer todas las plantas (regar)
function waterPlants() {
  plants.forEach((plant) => {
    plant.size += 3;
    plant.color = "limegreen";
  });
  drawGarden();
}

window.garden = { addPlant, waterPlants, drawGarden };