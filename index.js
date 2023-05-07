// Obtener el botón de inicio
const startButton = document.getElementById('startButton');

// Agregar un evento clic al botón de inicio
startButton.addEventListener('click', () => {
  // Solicitar acceso al micrófono del usuario
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      // Crear un objeto de audio
      const audio = new Audio();

      // Establecer el objeto de audio para reproducir la secuencia del micrófono
      audio.srcObject = stream;

      // Reproducir el audio
      audio.play();
    })
    .catch(error => {
      console.error('Error al obtener acceso al micrófono:', error);
    });
});
