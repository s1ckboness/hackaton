// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const donateBtn = document.getElementById('donateBtn');
    const donationModal = document.getElementById('donationModal');
    const closeBtn = document.querySelector('.close-btn');
    const contactLink = document.getElementById('contactLink');
    const contactMessage = document.getElementById('contactMessage');
    const frequencyButtons = document.querySelectorAll('.frequency-select button');
    const amountButtons = document.querySelectorAll('.amount-buttons button');
    const customAmountInput = document.getElementById('custom-amount');
    const currencySelect = document.querySelector('.currency-select select');
    const nextButton = document.querySelector('.next-btn');
    const commentCheckbox = document.getElementById('comments');
    
    let selectedFrequency = 'Única';
    let selectedAmount = null;

    // Función para abrir el modal de donación
    donateBtn.addEventListener('click', () => {
        donationModal.style.display = 'block';
    });

    // Función para cerrar el modal de donación
    closeBtn.addEventListener('click', () => {
        donationModal.style.display = 'none';
    });

    // Función para mostrar el mensaje de contacto
    contactLink.addEventListener('click', () => {
        alert("Puedes contactarnos al: 310 6718480 o por correo electrónico a: juandavidpenuelaperez24@gmail.com");
    });

    // Función para actualizar la selección de frecuencia
    function updateFrequencySelection(button) {
        frequencyButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedFrequency = button.textContent;
    }

    // Función para actualizar la selección de cantidad
    function updateAmountSelection(button) {
        amountButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedAmount = button.textContent;
        customAmountInput.value = '';
    }

    // Event listeners para los botones de frecuencia
    frequencyButtons.forEach(button => {
        button.addEventListener('click', () => updateFrequencySelection(button));
    });

    // Event listeners para los botones de cantidad
    amountButtons.forEach(button => {
        button.addEventListener('click', () => updateAmountSelection(button));
    });

    // Event listener para el input de cantidad personalizada
    customAmountInput.addEventListener('input', () => {
        amountButtons.forEach(btn => btn.classList.remove('selected'));
        selectedAmount = customAmountInput.value;
    });

    // Event listener para el botón "Siguiente"
    nextButton.addEventListener('click', () => {
        const currency = currencySelect.value;
        const comment = commentCheckbox.checked ? 'Sí' : 'No';
        const donationAmount = selectedAmount || customAmountInput.value;

        if (!donationAmount) {
            alert('Por favor, selecciona o ingresa un monto de donación.');
            return;
        }

        // Aquí normalmente enviarías los datos a un servidor o pasarías a la siguiente página
        // Por ahora, solo mostraremos un resumen de la donación
        const summary = `
            Resumen de Donación:
            Frecuencia: ${selectedFrequency}
            Monto: ${donationAmount}
            Moneda: ${currency}
            Comentario: ${comment}
        `;
