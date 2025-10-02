# Real Time Garden

## Descripción

🌱 Real Time Garden

Un jardín interactivo en tiempo real donde los usuarios pueden plantar semillas 🌱 y limpiar el jardín 🧹.
Además, existe un modo espectador 👀 para ver cómo otros interactúan.

Construido con:
	•	Node.js
	•	Express
	•	Socket.IO
	•	HTML5 Canvas

## Objetivos

- Explorar la comunicación en tiempo real cliente-servidor.
- Crear un entorno colaborativo donde las acciones de un usuario afectan a todos.
- Diseñar una experiencia **original e interactiva**, más allá de solo cambiar apariencia.

## Concepto

- **Plantador (garden.html)** → Puede plantar semillas con clic, o empujarlas manteniendo clic y arrastrando.  
- **Espectador (spectator.html)** → Solo observa el jardín en tiempo real, ideal para presentaciones.

### Dinámica

- Cada semilla tiene atributos:
  - **Tamaño** → Crece con el tiempo.
  - **Color** → Cambia lentamente con la edad y al ser empujada.
  - **Movimiento** → Puede ser empujada (nudge) y “rebotar” en los bordes.
- Todos los cambios se sincronizan con todos los usuarios conectados.

## Instalación y ejecución

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Valengp2006/real-time-garden.git
   cd real-time-garden
  ```

	2.	Instalar dependencias:
```bash
npm install
```

	3.	Ejecutar el servidor:
```bash
node server.js
```

	4.	Abrir en navegador:
  
	•	Plantador: http://localhost:3000/garden.html
	•	Espectador: http://localhost:3000/spectator.html

## Ideas futuras

- Diferentes tipos de semillas (colores y tamaños).
- Animaciones de crecimiento 🌳.
- Usuarios con nombres o avatares.
- Jardín persistente (guardar estado en una base de datos).

✨ ¡Ahora ya tienes tu propio jardín ecológico interactivo!

## Autora

Proyecto desarrollado por Valentina G.P.
Curso: Sistemas Físicos Interactivos 1
