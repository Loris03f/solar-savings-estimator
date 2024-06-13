document.addEventListener("DOMContentLoaded", function() {
    var howItWorksBtn = document.getElementById("howItWorksBtn");
    var whyFreeBtn = document.getElementById("whyFreeBtn");
    var contactBtn = document.getElementById("contactBtn");
    var howItWorksModal = document.getElementById("howItWorksModal");
    var whyFreeModal = document.getElementById("whyFreeModal");
    var contactModal = document.getElementById("contactModal");
    var closeButtons = document.getElementsByClassName("close");
    var estimatePriceBtn = document.getElementById("estimatePriceBtn");
    var bookCallBtn = document.getElementById("bookCallBtn");
    var estimatePriceForm = document.getElementById("estimatePriceForm");
    var bookCallForm = document.getElementById("bookCallForm");

    // Modal handling
    howItWorksBtn.onclick = function() {
        howItWorksModal.style.display = "block";
    }

    whyFreeBtn.onclick = function() {
        whyFreeModal.style.display = "block";
    }

    contactBtn.onclick = function() {
        contactModal.style.display = "block";
    }

    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function() {
            this.parentElement.parentElement.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == howItWorksModal) {
            howItWorksModal.style.display = "none";
        }
        if (event.target == whyFreeModal) {
            whyFreeModal.style.display = "none";
        }
        if (event.target == contactModal) {
            contactModal.style.display = "none";
        }
    }

    // Form switching
    estimatePriceBtn.onclick = function() {
        estimatePriceForm.classList.add("active");
        bookCallForm.classList.remove("active");
        estimatePriceBtn.classList.add("active");
        bookCallBtn.classList.remove("active");
    }

    bookCallBtn.onclick = function() {
        bookCallForm.classList.add("active");
        estimatePriceForm.classList.remove("active");
        bookCallBtn.classList.add("active");
        estimatePriceBtn.classList.remove("active");
    }
});
