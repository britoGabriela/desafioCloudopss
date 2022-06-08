/* BOTÃO LOGIN/CRIAR CONTA */
let btnLogin = document.querySelector("#login")
let btnCriarconta = document.querySelector("#criar-conta")

let body = document.querySelector("body")

btnLogin.addEventListener("click", function () {
    body.className = "login-js"
})

btnCriarconta.addEventListener("click", function () {
    body.className = "criar-conta-js"
})


/* CONSULTA ENDEREÇO */

let cep = document.querySelector("#cep")
let rua = document.querySelector("#rua")
let bairro = document.querySelector("#bairro")
let cidade = document.querySelector("#cidade")
let estado = document.querySelector("#estado")

cep.value = ''

cep.addEventListener("blur", function(e){
    let cep = e.target.value
    let script = document.createElement('script')
    script.src = 'http://viacep.com.br/ws/'+cep+'/json/?callback=popularForm'
    document.body.appendChild(script)
})

function popularForm(resposta) {
    if('erro' in resposta) {
        alert('CEP não encontrado')
        return
    }

    console.log(resposta)
    rua.value = resposta.logradouro
    bairro.value = resposta.bairro
    cidade.value = resposta.localidade
    estado.value = resposta.uf
}

/* ENVIO DE CURRÍCULO */

let arquivo = document.querySelector("#arquivo")

arquivo.addEventListener("change", function () {
    alert("Arquivo carregado com sucesso!")
})

/* BOTÃO LIMPAR */

function limpar() {
    document.querySelector("#limpar".value='')
}

/* BOTÃO ENVIAR */

function pergunta() {
    if (window.confirm("Tem certeza que deseja enviar?")) {
        window.alert("Cadastro realizado!");
      }    
}

