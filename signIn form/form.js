const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validation logic here
  // Example: Check if name is empty
  if (name === '') {
    alert('Please enter your name');
    return false;
  }

  // If validation passes, submit the form
  alert('Form submitted successfully!');
});
