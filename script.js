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

    // Mostrar el resultado
    document.getElementById('result').innerText = '¡Gracias por tu donación!';
    
    // Limpiar el formulario
    event.target.reset();
});
