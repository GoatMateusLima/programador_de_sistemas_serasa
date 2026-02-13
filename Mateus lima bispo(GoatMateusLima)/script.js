const menuContact = document.getElementById("contact");



menuContact.addEventListener("click", () => {

    alert("Não tem nada aqui")
});


//GET pega e SET coloca
let email = '';
/*
function setEmail(value){
    email = value;
    console.log( email)

}*/

function setEmail(event) {
    if (event.key.length == 1) {
        email = event.target.value + event.key
    } else if (event.key == 'Backspace') {
        email = event.target.value.slice(0, -1)

    }
    console.log(email)
}

function handleRegister() {
    if (email.length == 0) {
        showToast("Digite seu email")
    } else {
        showToast("Email cadastrado com sucesso")
    }
}


function showToast(msg) {
    const toast = document.getElementsByClassName('toast')[0];

    toast.classList.remove('hidden');

    const pToast = document.getElementById("toast");
    pToast.textContent = msg;

    //Funcao e depois tempo, a setTimeout cria o tempo para elementos
    setTimeout(() => {
        toast.classList.add('hidden')
        pToast.textContent = '';
    }, 5000);
}



let portifolio = [
    {
        titulo: "Full-Stack Developer",
        Description: "Desenvolvedor Front-End e Back-End"
    },
    {
        nome: "Mateus Lima Bispo",
        idade: 18,
        EnsinoMedio: "Tecnico - Concluido",
        EnsinoSuperior: "Tecnologo - Cursando"

    },
    {
        Frameworks: "React, Flask, Angular",
        Linguagens: "JavaScript, Python, PHP, C",
        ferramentas: "Render, Vercel, CI/CD"
    }
]


function listPortifolio() {
    const divPortifolio = document.getElementById('my-Portifolio')

    portifolio.map(
        p => {
            let div = document.createElement("div");
            
            
            let h3 = document.createElement("h3");
            let paragrafo = document.createElement("p");

            let nome = document.createElement("h3");
            let idade = document.createElement("p");
            let EnsinoMedio = document.createElement("p");
            let EnsinoSuperior = document.createElement("p");


            let Frameworks = document.createElement("p");
            let Linguagens = document.createElement("p");
            let ferramentas = document.createElement("p");

            Frameworks.textContent = p.Frameworks
            h3.textContent = p.title;
            paragrafo.textContent = p.Description
            ferramentas.textContent = p.ferramentas
            idade.textContent = p.idade
            nome.textContent = p.nome
            Linguagens.textContent = p.Linguagens
            EnsinoSuperior.textContent = p.EnsinoSuperior
            EnsinoMedio.textContent = p.EnsinoMedio

            div.appendChild(Frameworks)
            div.appendChild(Linguagens)
            div.appendChild(ferramentas)
            div.appendChild(nome)
            div.appendChild(idade)
            div.appendChild(EnsinoMedio)
            div.appendChild(EnsinoSuperior)
            div.appendChild(paragrafo)
            divPortifolio.appendChild(div)


        });
}

listPortifolio()