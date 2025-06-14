
const jadianDate = new Date("2025-03-28T00:00:00");

function updateTimer() {
    const now = new Date();
    const diff = now - jadianDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    document.getElementById("timeSince").textContent = 
        `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`;
}

setInterval(updateTimer, 1000);
updateTimer();

// Slideshow
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); 
}

showSlides();
