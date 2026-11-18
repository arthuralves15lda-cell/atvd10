function embaralhar(texto) {
    let h = 0;
    for (let i = 0; i < texto.length; i++) {
        h = ((h << 5) - h) + texto.charCodeAt(i);
        h = h & h;
    }
    return h;
}

const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    let usuario = document.getElementById("usuario").value.trim();
    let senha = document.getElementById("senha").value.trim();
    const mensagemErro = document.getElementById("mensagemErro");
    const mensagemCerta = document.getElementById("mensagemCerta");

    mensagemErro.textContent = "";
    mensagemCerta.textContent = "";

    let userCerto = 12433088;
    let senhaCerta = -2069857144;

    if (embaralhar(usuario) == userCerto && embaralhar(senha) == senhaCerta) {
        mensagemCerta.textContent = "Senha e usuário corretos!";
    } else {
        mensagemErro.textContent = "Usuário ou senha incorretos. Tente novamente.";
    }
});
