async function criptografar(texto) {
    let encoder = new TextEncoder()
    let data = encoder.encode(texto)
    let hashBuffer = await crypto.subtle.digest("SHA-256", data)
    let hashArray = Array.from(new Uint8Array(hashBuffer))
    return hashArray.map(b => b.toString(16).padStart(2, "0")).join("")
}

const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", async function (event) {
    event.preventDefault();

    let usuario = document.getElementById("usuario").value.trim()
    let senha = document.getElementById("senha").value
    const mensagemErro = document.getElementById("mensagemErro");
    const mensagemCerta = document.getElementById("mensagemCerta");

    mensagemErro.textContent = "";
    mensagemCerta.textContent = "";

    const userCerto = "704542030b731a666b3a17284086475894f63274616655a931802f704c9c3305"
    const senhaCerta = "e8699640119070720028492b846f7661347910035378061c591025673469609c"

    let userDigitado = await criptografar(usuario)
    let senhaDigitada = await criptografar(senha)

    if (userDigitado == userCerto && senhaDigitada == senhaCerta) {
        mensagemCerta.textContent = "Senha e usuário corretos!";
    } else {
        mensagemErro.textContent = "Usuário ou senha incorretos. Tente novamente.";
    }
});
