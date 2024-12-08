document.addEventListener('DOMContentLoaded', () => {
    // Obtener la fecha actual en formato YYYY-MM-DD
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const currentDate = `${year}-${month}-${day}`;
  
    // Elementos del DOM
    const dailyImage = document.getElementById('dailyImage');
    const dailyAudio = document.getElementById('dailyAudio');
  
    // Cargar el JSON
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        // Verificar si la fecha actual existe en el objeto
        if (data[currentDate]) {
          const { image, audio } = data[currentDate];
          dailyImage.src = image;
          dailyAudio.src = audio;
        } else {
          // Si no hay contenido para esa fecha, puedes mostrar un mensaje o un contenido por defecto
          dailyImage.src = 'https://via.placeholder.com/300x200?text=No+hay+contenido+para+hoy';
          dailyAudio.remove();
        }
      })
      .catch(error => {
        console.error('Error al cargar el JSON:', error);
      });
  });
  