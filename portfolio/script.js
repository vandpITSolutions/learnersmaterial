// Dark / Light Mode Toggle
const toggleButton = document.getElementById('modeToggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Basic Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  if (!email.includes('@')) {
    alert('Please enter a valid email.');
    return;
  }

  alert('Thanks for reaching out!');
  this.reset();
});
