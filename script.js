const loginBtn = document.querySelector('.login-btn');
const modal = document.getElementById("loginModal");
const closeModal = document.querySelector('.close-modal');

loginBtn.addEventListener('click', () => {
    modal.style.display = "flex";
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});
