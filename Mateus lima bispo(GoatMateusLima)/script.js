const menuContact = document.getElementById("contact")


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

function setEmail(event){
    if(event.key.length == 1){
        email = event.target.value + event.key
    }else if(event.key == 'Backspace'){
        email = event.target.value.slice(0, -1)

    }
    console.log(email)
}

function handleRegister(){
    if(email.length == 0){
        console.log("Digite seu email")
    } else{
        console.log("Digite seu email")
    }
}

