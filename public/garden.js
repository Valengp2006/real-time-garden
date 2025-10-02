// garden.js
(function () {
    const canvas = document.getElementById("garden");
    const ctx = canvas.getContext("2d");
    const plants = [];
  
    function draw() {
      ctx.fillStyle = "#004400";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      plants.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
    }
  
    function addPlant(type, x, y) {
      let plant = { x, y, size: 5, color: "white" };
  
      if (type === "plant") {
        plant.color = "lightgreen";
        plant.size = 6;
      } else if (type === "flower") {
        plant.color = "pink";
        plant.size = 8;
      } else if (type === "tree") {
        plant.color = "brown";
        plant.size = 10;
      }
  
      plants.push(plant);
      draw();
    }
  
    // Exponer funciones globalmente
    window.garden = { addPlant };
  
    // Inicial
    draw();
  
    console.log("✅ garden.js cargado correctamente");
  })();