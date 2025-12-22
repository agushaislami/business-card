const demoElement = document.getElementById("demo");
const phrases = [
    "Critique Code",
    "Software Engineer",
    "Full-Stack Developer",
    "DevOps Enthusiast"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        // Menghapus teks
        demoElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 30; // Lebih cepat saat menghapus
    } else {
        // Mengetik teks
        demoElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    // Logika pindah kata atau mulai menghapus
    if (!isDeleting && charIndex === currentPhrase.length) {
        // Jeda saat teks selesai diketik
        isDeleting = true;
        typeSpeed = 2000; 
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length; // Loop kembali ke awal
        typeSpeed = 200;
    }

    setTimeout(type, typeSpeed);
}

// Mulai animasi
window.onload = type;