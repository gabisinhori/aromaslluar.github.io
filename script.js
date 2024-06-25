function toggleContent(event) {
    var button = event.target;
    var targetId = button.getAttribute('data-target');
    var content = document.getElementById(targetId);

    if (content.style.height === "0px" || content.style.height === "") {
        content.style.height = content.scrollHeight + "px";
        content.classList.add('open');
         targetId.slice(-1);
    } else {
        content.style.height = "0px";
        content.classList.remove('open');
         targetId.slice(-1);
    }
}

// Initialize the content to ensure it's collapsed on load
document.addEventListener("DOMContentLoaded", function() {
    var contents = document.querySelectorAll('.content-texto');
    contents.forEach(function(content) {
        content.style.height = "0px";
    });

    var buttons = document.querySelectorAll('.toggle-button');
    buttons.forEach(function(button) {
        button.addEventListener('click', toggleContent);
    });
});

// function sendWhatsApp() {
//     console.log('funçãoi chamada');
//     var whatsappUrl = "https://wa.me/4497575374/?text=Chá%20branco"
//     window.open(whatsappUrl, '_blank');
// }

// document.getElementById('WhatsApplink').addEventListener("click", function() {
//     sendWhatsApp();
//     console.log('feipe');   
// });