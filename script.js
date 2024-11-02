document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.buy-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert("You are being redirected to Amazon. This is an affiliate link, and we may earn a commission.");
        });
    });
});
