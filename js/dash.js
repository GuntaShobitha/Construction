const user = JSON.parse(localStorage.getItem('stackly_user') || 'null');
if (!user) window.location.href = './login.html';
const nameEl = document.getElementById('userName');
if (nameEl && user) nameEl.textContent = user.name;

// Sidebar nav switching
document.querySelectorAll('.dash-nav a[data-target]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.dash-nav a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
    document.querySelectorAll('.dash-section').forEach(s => s.classList.remove('active'));
    document.getElementById(link.dataset.target).classList.add('active');
    const title = document.getElementById('pageTitle');
    if (title) title.textContent = link.textContent.trim();
    document.querySelector('.dash-side')?.classList.remove('open');
  });
});
// Logout
document.getElementById('logout')?.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.removeItem('stackly_user');
  window.location.href = './login.html';
});
// Mobile toggle
document.querySelector('.dash-toggle')?.addEventListener('click', () => {
  document.querySelector('.dash-side').classList.toggle('open');
});
