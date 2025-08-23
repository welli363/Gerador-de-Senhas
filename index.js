//criar uma função que sorteie uma senha aleatória
//obter o valor do input 
//mostrar a senha no input 
const inputSenha = document.querySelector('#senha');
const botaoGerar = document.querySelector('#gerador');

function gerarSenha( tamanho = 15){
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
    let senha = '';
    
    for (let i = 0; i < tamanho; i++){
        const random = Math.floor(Math.random()* caracteres.length);
        senha += caracteres[random];
    }
    return senha;
}
botaoGerar.addEventListener('click', function(){
    senhaGerada = gerarSenha();
    inputSenha.value = senhaGerada;
});