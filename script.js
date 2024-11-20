// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('donationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que se envíe el formulario automáticamente
        
        // Obtener los datos del formulario
        const formData = new FormData(event.target);
        
        // Convertir los datos del formulario a un objeto para almacenar
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Almacenar los datos en el almacenamiento local
        let donations = JSON.parse(localStorage.getItem('donations')) || [];
        donations.push(data);
        localStorage.setItem('donations', JSON.stringify(donations));

        // Verificar y establecer el mensaje de resultado
        const resultElement = document.getElementById('result');
        if (resultElement) {
            resultElement.innerText = '¡Gracias por tu donación!';
        } else {
            console.error('Elemento con id "result" no encontrado');
        }

        // Limpiar el formulario
        event.target.reset();
    });
});
