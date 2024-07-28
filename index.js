let currentIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (index >= slides.length) {
        currentIndex = 0;
    }
    if (index < 0) {
        currentIndex = slides.length - 1;
    }

    slides.forEach((slide, i) => {
        slide.style.display = i === currentIndex ? 'block' : 'none';
    });

    dots.forEach((dot, i) => {
        dot.className = dot.className.replace(' active', '');
        if (i === currentIndex) {
            dot.className += ' active';
        }
    });
}

function nextSlide() {
    currentIndex++;
    showSlides(currentIndex);
}

function currentSlide(index) {
    currentIndex = index - 1;
    showSlides(currentIndex);
}

showSlides(currentIndex);
const doctors = [
    "Dr. PM. Ravi Kumar",
    "Dr. Anjali Menon",
    "Dr. Ravi Tharakan"
];

const specializations = [
    "Physician",
    "Dermatologist",
    "Cardiologist"
];

let currentDoctorIndex = 0;
let currentSpecializationIndex = 0;

function updateDoctorAndSpecialization() {
    currentDoctorIndex = (currentDoctorIndex + 1) % doctors.length;
    currentSpecializationIndex = (currentSpecializationIndex + 1) % specializations.length;

    document.getElementById("doctor-name").textContent = doctors[currentDoctorIndex];
    document.getElementById("specialization").textContent = specializations[currentSpecializationIndex];
}

function countUp(target, elementId, duration) {
    let start = 0;
    let end = target;
    let current = start;
    let increment = end > start ? 1 : -1;
    let range = Math.abs(end - start);
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(elementId);

    let timer = setInterval(function() {
        current += increment;
        obj.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

document.addEventListener("DOMContentLoaded", function() {
    let targetNumber = 11489;
    let duration = 5000;
    countUp(targetNumber, 'counter', duration);
});


function openSidebar() {
    document.getElementById('sidebar').classList.add('show');
    document.querySelector('.overlay').style.display = 'block';
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('show');
    document.querySelector('.overlay').style.display = 'none';
}


