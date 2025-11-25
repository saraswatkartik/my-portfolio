// <!-- js start -->
// for dropdown menu
const toggleBtn = document.querySelector('.toggle-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');

toggleBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('top-16');
});


// for name animation
var typed = new Typed('#type-name', {
    strings: ['Kartik Saraswat', 'Web Developer', 'Web Designer'],
    typeSpeed: 100,
    loop: true,
});


// <!-- js end -->