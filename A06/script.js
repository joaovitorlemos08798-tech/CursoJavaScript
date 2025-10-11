// Função para validar o e-mail
function validarEmail() {
    const emailInput = document.getElementById('email');
    const mensagemErroEmail = document.getElementById('mensagemErroEmail');
    const email = emailInput.value.trim();

    const emailRegex = /^[^\s@]+@(gmail\.com|hotmail\.com|outlook\.com)$/;

    if (email === "") {
        mensagemErroEmail.textContent = "Preencha o campo obrigatório.";
    } else if (!emailRegex.test(email)) {
        mensagemErroEmail.textContent = "O e-mail precisa ser do tipo: gmail.com, hotmail.com ou outlook.com.";
    } else {
        mensagemErroEmail.textContent = "";
    }

    habilitarBotao();
}

// Função para validar a senha
function validarSenha() {
    const senhaInput = document.getElementById('senha');
    const mensagemErroSenha = document.getElementById('mensagemErroSenha');
    const senha = senhaInput.value.trim();
    const senhaRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

    if (senha === "") {
        mensagemErroSenha.textContent = "Preencha o campo obrigatório.";
    } else if (!senhaRegex.test(senha)) {
        mensagemErroSenha.textContent = "A senha deve ter pelo menos 6 caracteres, 1 número e 1 letra maiúscula.";
    } else {
        mensagemErroSenha.textContent = "";
    }

    habilitarBotao();
}

// Função para validar confirmação de senha
function validarConfSenha() {
    const senha = document.getElementById('senha').value.trim();
    const confSenha = document.getElementById('confSenha').value.trim();
    const mensagemErroConfSenha = document.getElementById('mensagemErroConfSenha');

    if (confSenha === "") {
        mensagemErroConfSenha.textContent = "Preencha o campo obrigatório.";
    } else if (senha !== confSenha) {
        mensagemErroConfSenha.textContent = "As senhas não coincidem.";
    } else {
        mensagemErroConfSenha.textContent = "";
    }

    habilitarBotao();
}

// Função para validar o CPF
function validarCPF() {
    const cpfInput = document.getElementById('cpf');
    const mensagemErroCPF = document.getElementById('mensagemErroCPF');
    const cpf = cpfInput.value.trim();
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (cpf === "") {
        mensagemErroCPF.textContent = "Preencha o campo obrigatório.";
    } else if (!cpfRegex.test(cpf)) {
        mensagemErroCPF.textContent = "Digite um CPF válido no formato XXX.XXX.XXX-XX.";
    } else {
        mensagemErroCPF.textContent = "";
    }

    habilitarBotao();
}

// Função para habilitar ou desabilitar o botão
function habilitarBotao() {
    const emailValido = document.getElementById('email').value.trim() !== "" && /^[^\s@]+@(gmail\.com|hotmail\.com|outlook\.com)$/.test(document.getElementById('email').value.trim());
    const senhaValida = document.getElementById('senha').value.trim() !== "" && /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/.test(document.getElementById('senha').value.trim());
    const cpfValido = document.getElementById('cpf').value.trim() !== "" && /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(document.getElementById('cpf').value.trim());
    const confSenha = document.getElementById('confSenha').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const confSenhaValida = confSenha !== "" && senha === confSenha;

    const btnEnviar = document.getElementById('btnEnviar');

    btnEnviar.disabled = !(emailValido && senhaValida && cpfValido && confSenhaValida);
}

// Função para salvar os dados no localStorage
function salvarDados() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cpf = document.getElementById('cpf').value;

    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);
    localStorage.setItem('cpf', cpf);
}

// Função para carregar os dados do localStorage
function carregarDados() {
    const email = localStorage.getItem('email');
    const senha = localStorage.getItem('senha');
    const cpf = localStorage.getItem('cpf');

    if (email) document.getElementById('email').value = email;
    if (senha) document.getElementById('senha').value = senha;
    if (cpf) document.getElementById('cpf').value = cpf;

    validarEmail();
    validarSenha();
    validarConfSenha();
    validarCPF();
}

// Chama carregar dados ao carregar a página
window.onload = function () {
    carregarDados();
};

// Função para redirecionar para a página de sucesso após concluir o cadastro
function concluirCadastro(event) {
    event.preventDefault();

    salvarDados();

    window.location.href = "cadastro_concluido.html";
}

