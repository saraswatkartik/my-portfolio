// <!-- js start -->

const toggleBtn = document.querySelector('.toggle-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');

toggleBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('top-16');
});

// <!-- js end -->