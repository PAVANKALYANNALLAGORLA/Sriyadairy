// Scroll animation
document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.scroll-animate');
  window.addEventListener('scroll', function() {
    elements.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 80) {
        el.classList.add('visible');
      }
    });
  });
  // trigger on load
  window.dispatchEvent(new Event('scroll'));
});

// Cart functionality (static demo)
let cart = [];
function addToCart(productName) {
  cart.push(productName);
  alert(productName + " added to cart!");
  // you could store in localStorage or show in cart page
}
