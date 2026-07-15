// Login
const form = document.getElementById('loginForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const role = document.getElementById('role').value;
    const email = document.getElementById('email').value.trim();
    const pass = document.getElementById('password').value.trim();
    const err = document.getElementById('err');
    if (!role || !email || !pass) { err.textContent = 'Please fill all fields'; err.classList.add('show'); return; }
    localStorage.setItem('stackly_user', JSON.stringify({ role, email, name: email.split('@')[0] }));
    window.location.href = role === 'admin' ? './dashboard-admin.html' : './dashboard-user.html';
  });
}
// Register
const rform = document.getElementById('registerForm');
if (rform) {
  rform.addEventListener('submit', (e) => {
    e.preventDefault();
    const role = document.getElementById('role').value;
    const email = document.getElementById('email').value.trim();
    const name = document.getElementById('name').value.trim();
    const pass = document.getElementById('password').value.trim();
    const err = document.getElementById('err');
    if (!role || !email || !name || !pass) { err.textContent = 'Please fill all fields'; err.classList.add('show'); return; }
    localStorage.setItem('stackly_user', JSON.stringify({ role, email, name }));
    window.location.href = role === 'admin' ? './dashboard-admin.html' : './404.html';
  });
}
