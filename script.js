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
    const contactModal = document.getElementById("contactModal");
    const howItWorksModal = document.getElementById("howItWorksModal");
    const whyFreeModal = document.getElementById("whyFreeModal");

    const contactBtn = document.getElementById("contactBtn");
    const howItWorksBtn = document.getElementById("howItWorksBtn");
    const whyFreeBtn = document.getElementById("whyFreeBtn");

    const closeButtons = document.querySelectorAll(".close");

    contactBtn.addEventListener("click", function() {
        contactModal.style.display = "block";
    });

    howItWorksBtn.addEventListener("click", function() {
        howItWorksModal.style.display = "block";
    });

    whyFreeBtn.addEventListener("click", function() {
        whyFreeModal.style.display = "block";
    });

    closeButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            btn.parentElement.parentElement.style.display = "none";
        });
    });

    window.addEventListener("click", function(event) {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    });
});