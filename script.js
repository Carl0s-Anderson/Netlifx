// Função para alternar entre dark e light mode
const themeToggle = document.getElementById('theme-toggle');

function updateButton() {
  if (document.body.classList.contains('light-mode')) {
    themeToggle.innerHTML = '🌙'; // Lua para voltar ao dark
  } else {
    themeToggle.innerHTML = '☀️'; // Sol para light
  }
}

// Inicializar
updateButton();

themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('light-mode');
  updateButton();
});