document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmar-senha');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); 

        if (nomeInput.value.trim() === '' || emailInput.value.trim() === '' || senhaInput.value === '' || confirmarSenhaInput.value === '') {
            alert('Preencha todos os campos.');
            return;
        }

        if (senhaInput.value !== confirmarSenhaInput.value) {
            alert('As senhas não coincidem.');
            return;
        }

        this.submit();
    });
});
