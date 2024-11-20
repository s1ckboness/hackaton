document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente
    
    const formData = new FormData(event.target);

    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Almacenar los datos en el almacenamiento local
    let donations = JSON.parse(localStorage.getItem('donations')) || [];
    donations.push(data);
    localStorage.setItem('donations', JSON.stringify(donations));

    document.getElementById('result').innerHTML = '¡Gracias por tu donación!';
    
    event.target.reset();
});
