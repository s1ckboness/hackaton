// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const frequencyButtons = document.querySelectorAll('.frequency-select button');
    const amountButtons = document.querySelectorAll('.amount-buttons button');
    const customAmountInput = document.getElementById('custom-amount');
    const currencySelect = document.querySelector('.currency-select select');
    const nextButton = document.querySelector('.next-btn');
    const commentCheckbox = document.getElementById('comments');

    let selectedFrequency = 'One-time';
    let selectedAmount = null;

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

    // Event listener para el botón "Next"
    nextButton.addEventListener('click', () => {
        const currency = currencySelect.value;
        const comment = commentCheckbox.checked ? 'Yes' : 'No';
        const donationAmount = selectedAmount || customAmountInput.value;

        if (!donationAmount) {
            alert('Please select or enter a donation amount.');
            return;
        }

        // Aquí normalmente enviarías los datos a un servidor o pasarías a la siguiente página
        // Por ahora, solo mostraremos un resumen de la donación
        const summary = `
            Donation Summary:
            Frequency: ${selectedFrequency}
            Amount: ${donationAmount}
            Currency: ${currency}
            Comment: ${comment}
        `;
        alert(summary);
    });

    // Función para actualizar el estilo de los botones seleccionados
    function updateButtonStyles() {
        const buttons = document.querySelectorAll('.frequency-select button, .amount-buttons button');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                this.style.backgroundColor = '#ff6b6b';
                this.style.color = '#fff';
            });
        });
    }

    updateButtonStyles();
});
