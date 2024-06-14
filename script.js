document.addEventListener("DOMContentLoaded", function() {
    const estimatePriceBtn = document.getElementById("estimatePriceBtn");
    const bookCallBtn = document.getElementById("bookCallBtn");
    const estimatePriceForm = document.getElementById("estimatePriceForm");
    const bookCallForm = document.getElementById("bookCallForm");

    estimatePriceBtn.addEventListener("click", function() {
        estimatePriceForm.classList.add("active");
        bookCallForm.classList.remove("active");
        estimatePriceBtn.classList.add("active");
        bookCallBtn.classList.remove("active");
    });

    bookCallBtn.addEventListener("click", function() {
        bookCallForm.classList.add("active");
        estimatePriceForm.classList.remove("active");
        bookCallBtn.classList.add("active");
        estimatePriceBtn.classList.remove("active");
    });

    // Modal functionality
    const modals = document.querySelectorAll('.modal');
    const modalBtns = document.querySelectorAll('.info-btn');
    const closeBtns = document.querySelectorAll('.close');

    modalBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            modals[i].style.display = 'block';
        });
    });

    closeBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            modals[i].style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
});