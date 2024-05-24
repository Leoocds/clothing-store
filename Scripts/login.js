// login.js

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const errorMessage = document.getElementById('error-message');

  form.addEventListener('submit', function (e) {
      e.preventDefault(); 

      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();

      if (username === '' || password === '') {
          errorMessage.textContent = 'Preencha todos os campos.';
          return;
      }

      if (username === 'seu_usuario' && password === 'sua_senha') {
          window.location.href = 'pagina_de_sucesso.html';
      } else {
          errorMessage.textContent = 'Nome de usuário ou senha incorretos.';
      }
  });
});
