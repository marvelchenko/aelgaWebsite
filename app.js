let slideIndex = 0;
showSlides();

function showSlides(){
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5500);
}

function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}

document.addEventListener('DOMContentLoaded', function() {
    const executiveBtn = document.getElementById('executiveBtn');
    const legislativeBtn = document.getElementById('legislativeBtn');
    const executiveDetails = document.getElementById('executiveDetails');
    const legislativeDetails = document.getElementById('legislativeDetails');

    function toggleDetails(showElement, hideElement) {
        showElement.style.display = 'block';
        hideElement.style.display = 'none';
    }

    executiveBtn.addEventListener('click', function() {
        toggleDetails(executiveDetails, legislativeDetails);
    });

    legislativeBtn.addEventListener('click', function() {
        toggleDetails(legislativeDetails, executiveDetails);
    });
});