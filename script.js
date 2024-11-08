document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

const buttonAnimation = document.querySelectorAll('.button');
buttonAnimation.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});


function openForm() {
    document.getElementById("appointmentModal").style.display = "block";
}


function closeForm() {
    document.getElementById("appointmentModal").style.display = "none";
}


window.onclick = function(event) {
    const modal = document.getElementById("appointmentModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}