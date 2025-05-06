

  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-slide");

  function moveSlide(direction) {
    const totalSlides = slides.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;
    document.querySelector(".carousel-track").style.transform = `translateX(${offset}%)`;
  }

