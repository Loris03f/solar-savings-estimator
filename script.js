document.addEventListener("DOMContentLoaded", function() {
    var howItWorksBtn = document.getElementById("howItWorksBtn");
    var whyFreeBtn = document.getElementById("whyFreeBtn");
    var contactBtn = document.getElementById("contactBtn");
    var howItWorksModal = document.getElementById("howItWorksModal");
    var whyFreeModal = document.getElementById("whyFreeModal");
    var contactModal = document.getElementById("contactModal");
    var closeButtons = document.getElementsByClassName("close");

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
});
