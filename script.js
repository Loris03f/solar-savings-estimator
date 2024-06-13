document.addEventListener('DOMContentLoaded', function() {
    var estimatePriceBtn = document.getElementById('estimatePriceBtn');
    var bookCallBtn = document.getElementById('bookCallBtn');
    var estimatePriceForm = document.getElementById('estimatePriceForm');
    var bookCallForm = document.getElementById('bookCallForm');
    var whyFreeBtn = document.getElementById('whyFreeBtn');
    var contactBtn = document.getElementById('contactBtn');
    var whyFreeModal = document.getElementById('whyFreeModal');
    var contactModal = document.getElementById('contactModal');
    var closeModal = document.getElementsByClassName('close');

    // Show the Estimate Price form by default
    estimatePriceForm.classList.add('active');
    estimatePriceBtn.classList.add('active');

    // Toggle between forms
    estimatePriceBtn.addEventListener('click', function() {
        estimatePriceForm.classList.add('active');
        bookCallForm.classList.remove('active');
        estimatePriceBtn.classList.add('active');
        bookCallBtn.classList.remove('active');
    });

    bookCallBtn.addEventListener('click', function() {
        bookCallForm.classList.add('active');
        estimatePriceForm.classList.remove('active');
        bookCallBtn.classList.add('active');
        estimatePriceBtn.classList.remove('active');
    });

    // Show modal
    whyFreeBtn.addEventListener('click', function() {
        whyFreeModal.style.display = 'block';
    });

    contactBtn.addEventListener('click', function() {
        contactModal.style.display = 'block';
    });

    // Close modal
    Array.from(closeModal).forEach(function(element) {
        element.addEventListener('click', function() {
            element.parentElement.parentElement.style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target == whyFreeModal) {
            whyFreeModal.style.display = 'none';
        }
        if (event.target == contactModal) {
            contactModal.style.display = 'none';
        }
    });

    // Form submit handler
    var forms = document.querySelectorAll('form');
    forms.forEach(function(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for submitting the form!');
        });
    });

    // Email sending handler
    var contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var email = document.getElementById('contactEmail').value;
        var subject = document.getElementById('contactSubject').value;
        var message = document.getElementById('contactMessage').value;
        window.location.href = `mailto:ramon.ferrari.solar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(email)}`;
    });
});