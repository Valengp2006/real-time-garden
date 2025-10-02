# Real Time Garden

## Descripción

**Real Time Garden** (Jardín Ecológico) es una aplicación interactiva en tiempo real donde múltiples usuarios pueden colaborar para **plantar semillas**, observar cómo crecen y empujarlas para alterar su evolución.  

Es un experimento de **simulación emergente y colaborativa**, usando **Node.js + Express + Socket.IO** para sincronizar todos los clientes conectados.

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

	2.	Instalar dependencias:

npm install

	3.	Ejecutar el servidor:

node server.js


	4.	Abrir en navegador:
  
	•	Plantador: http://localhost:3000/garden.html
	•	Espectador: http://localhost:3000/spectator.html

### Autora

Proyecto desarrollado por Valentina G.P.
Curso: Sistemas Físicos Interactivos 1
