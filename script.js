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

// Armazenar o perfil selecionado no localStorage
document.querySelectorAll('.perfil a').forEach(link => {
  link.addEventListener('click', function(event) {
    const nome = this.querySelector('.nome').textContent;
    const imagemSrc = this.querySelector('img').src;
    
    localStorage.setItem('perfilAtivoNome', nome);
    localStorage.setItem('perfilAtivoImagem', imagemSrc);
  });
});