document.addEventListener('DOMContentLoaded', () => {
    const donateBtn = document.getElementById('donateBtn');
    const donationModal = document.getElementById('donationModal');
    const closeBtn = document.querySelector('.close-btn');
    const contactLink = document.getElementById('contactLink');
    const frequencyButtons = document.querySelectorAll('.frequency-select button');
    const amountButtons = document.querySelectorAll('.amount-buttons button');
    const customAmountInput = document.getElementById('custom-amount');
    const currencySelect = document.querySelector('.currency-select select');
    const nextButton = document.querySelector('.next-btn');
    const commentCheckbox = document.getElementById('comments');
    
    let selectedFrequency = null;
    let selectedAmount = null;

    donateBtn.addEventListener('click', () => {
        donationModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        donationModal.style.display = 'none';
    });

    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contactanos');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });

    function updateFrequencySelection(button) {
        frequencyButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedFrequency = button.textContent;
    }

    function updateAmountSelection(button) {
        amountButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedAmount = button.textContent;
        customAmountInput.value = '';
    }

    frequencyButtons.forEach(button => {
        button.addEventListener('click', () => updateFrequencySelection(button));
    });

    amountButtons.forEach(button => {
        button.addEventListener('click', () => updateAmountSelection(button));
    });

    customAmountInput.addEventListener('input', () => {
        amountButtons.forEach(btn => btn.classList.remove('selected'));
        selectedAmount = customAmountInput.value;
    });

    nextButton.addEventListener('click', () => {
        const currency = currencySelect.value;
        const comment = commentCheckbox.checked ? 'Sí' : 'No';
        const donationAmount = selectedAmount || customAmountInput.value;

        if (!selectedFrequency) {
            alert('Por favor, selecciona una frecuencia de donación.');
            return;
        }

        if (!donationAmount) {
            alert('Por favor, selecciona o ingresa un monto de donación.');
            return;
        }

        const summary = `
            Resumen de Donación:
            Frecuencia: ${selectedFrequency}
            Monto: ${donationAmount}
            Moneda: ${currency}
            Comentario: ${comment}
        `;
        alert(summary);
    });
    
    function updateButtonStyles() {
        frequencyButtons.forEach(button => {
            button.addEventListener('click', function() {
                frequencyButtons.forEach(btn => btn.classList.remove('selected'));
                this.classList.add('selected');
            });
        });

        amountButtons.forEach(button => {
            button.addEventListener('click', function() {
                amountButtons.forEach(btn => btn.classList.remove('selected'));
                this.classList.add('selected');
            });
        });
    }

    updateButtonStyles();
});
