let texto = document.querySelector("#texto");
texto.textContent = "Josiane";

let nome = prompt("Qual seu nome?");
texto.textContent = nome;

if (nome ==null){
    texto.textContent = "Seja bem-vindo(a)";

}
else{
    texto.textContent = nome;
}