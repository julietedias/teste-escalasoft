const mensagemErroNome = document.getElementById("erroNomeInvalido");
const mensagemErroEmail = document.getElementById("erroEmailInvalido");
const mensagemErroConfirmacaoSenha = document.getElementById(
  "erroConfirmacaoSenha"
);
const mensagemErroTermoServico = document.getElementById("erroTermoServico");

function validaNome() {
  const inputNome = document.getElementById("nome");

  inputNome.addEventListener("input", () => {
    const nome = inputNome.value.trim();

    if (nome.length < 3) {
      return (mensagemErroNome.innerText =
        "O nome precisa ter no mínimo 3 caracteres.");
    }

    return (mensagemErroNome.innerText = "");
  });
}

function validaEmail() {
  const inputEmail = document.getElementById("email");

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  inputEmail.addEventListener("input", () => {
    const email = inputEmail.value.trim();

    if (!regexEmail.test(email)) {
      return (mensagemErroEmail.innerText =
        "Por favor, insira um e-mail válido.");
    }

    return (mensagemErroEmail.innerText = "");
  });
}

function validaSenha() {
  const inputSenha = document.getElementById("senha");
  const senhaCaracteres = document.getElementById("senhaCaracteres");
  const senhaNumero = document.getElementById("senhaNumero");
  const senhaCaractereEspecial = document.getElementById(
    "senhaCaractereEspecial"
  );

  inputSenha.addEventListener("input", () => {
    const senha = inputSenha.value.trim();

    if (senha.length >= 8) {
      senhaCaracteres.style.color = "green";
    } else {
      senhaCaracteres.style.color = "#e61919";
    }

    if (/\d/.test(senha)) {
      senhaNumero.style.color = "green";
    } else {
      senhaNumero.style.color = "#e61919";
    }

    if (/[^a-zA-Z0-9]/.test(senha)) {
      senhaCaractereEspecial.style.color = "green";
    } else {
      senhaCaractereEspecial.style.color = "#e61919";
    }
  });
}

function validaConfirmacaoSenha() {
  const inputSenha = document.getElementById("senha");
  const inputConfirmacaoSenha = document.getElementById("confirmacaoSenha");
  let timeout;

  inputConfirmacaoSenha.addEventListener("input", () => {
    clearTimeout(timeout);

    setTimeout(() => {
      const confirmacaoSenha = inputConfirmacaoSenha.value.trim();
      const senha = inputSenha.value.trim();

      if (confirmacaoSenha !== senha) {
        return (mensagemErroConfirmacaoSenha.innerText =
          "As senhas devem ser iguais.");
      }

      return (mensagemErroConfirmacaoSenha.innerText = "");
    }, 500);
  });
}

function validaTermosServico() {
  const termosServico = document.getElementById("termosServico");

  if (!termosServico.checked) {
    mensagemErroTermoServico.innerText =
      "Para prosseguir, é necessário aceitar os Termos de Serviço.";
  } else {
    mensagemErroTermoServico.innerText = "";
  }
}

function submit() {
  const form = document.querySelector("form");
  const erroEnvioFormulario = document.getElementById("erroEnvioFormulario");
  const sucessoEnvioFormulario = document.getElementById(
    "sucessoEnvioFormulario"
  );

  form.addEventListener("submit", (event) => {
    // impede o envio padrão do formulário, para simular sucesso no envio:
    event.preventDefault();

    if (
      mensagemErroNome.innerText ||
      mensagemErroEmail.innerText ||
      mensagemErroConfirmacaoSenha.innerText ||
      mensagemErroTermoServico.innerText
    ) {
      return (erroEnvioFormulario.innerText =
        "Por favor, corrija os campos com erro e tente novamente.");
    }

    sucessoEnvioFormulario.style.display = "block";
    return (erroEnvioFormulario.innerText = "");
  });
}

function validacoesFormulário() {
  validaNome();
  validaEmail();
  validaSenha();
  validaConfirmacaoSenha();
  submit();
}

document.addEventListener("DOMContentLoaded", validacoesFormulário());
