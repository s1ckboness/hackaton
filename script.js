document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('donationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que se envíe el formulario automáticamente
        
        const password = document.getElementById('password').value;
        const passwordError = document.getElementById('passwordError');

        if (!validatePassword(password)) {
            passwordError.textContent = 'La contraseña debe tener al menos un carácter especial y una letra mayúscula.';
            passwordError.style.display = 'block';
            return;
        } else {
            passwordError.style.display = 'none';
        }
        
        const formData = new FormData(event.target);
        
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        let donations = JSON.parse(localStorage.getItem('donations')) || [];
        donations.push(data);
        localStorage.setItem('donations', JSON.stringify(donations));

        const resultElement = document.getElementById('result');
        if (resultElement) {
            resultElement.innerText = '¡Gracias por tu donación!';
        } else {
            console.error('Elemento con id "result" no encontrado');
        }

        event.target.reset();
    });

    document.getElementById('clearStorage').addEventListener('click', function() {
        localStorage.removeItem('donations');
        alert('Datos de donaciones borrados.');
    });
});

function validatePassword(password) {
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    const uppercasePattern = /[A-Z]/;
    return specialCharPattern.test(password) && uppercasePattern.test(password);
}
