// Contador de visitas (ejemplo básico, usar una base de datos en producción)
let contadorVisitas = document.getElementById('contadorVisitas');
let visitas = localStorage.getItem('visitas');
visitas = visitas ? parseInt(visitas) + 1 : 1;
contadorVisitas.textContent = visitas;
localStorage.setItem('visitas', visitas);
