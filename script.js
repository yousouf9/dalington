// Add a simple animation for testimonials
const testimonials = document.querySelectorAll('.testimonial');
let index = 0;

function animateTestimonial() {
    testimonials[index].style.opacity = '1';
    setTimeout(() => {
        testimonials[index].style.opacity = '0';
        index = (index + 1) % testimonials.length;
        animateTestimonial();
    }, 3000); // Change testimonial every 3 seconds
}

animateTestimonial();
