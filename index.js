//criar uma função que sorteie uma senha aleatória
//obter o valor do input 
//mostrar a senha no input 
//personalizar o tamanho da senha 

const msgForca = document.querySelector('#msgForca');

function forcaSenha(senhaGerada){
const tamanho = senhaGerada.length;

if(tamanho <=10){
    msgForca.textContent = 'Senha fraca';
    msgForca.style.color = 'red';
}
else if(tamanho >= 10 && tamanho <= 20){
    msgForca.textContent = 'Senha mediana';
    msgForca.style.color = 'yellow';
}
else if(tamanho > 20){
    msgForca.textContent = 'Senha forte';
    msgForca.style.color = 'green';
};
    //tamnho da frase
    msgForca.style.fontSize = '16px';
    msgForca.style.fontWeight = 'bold'
    //a mensagem irá sumir depois de um tempo
    setTimeout(()=>{
         msgForca.textContent =''; //limpa a mensagem de copiado
    }, 5000);
};

const tamanhoSenha = document.querySelector('#tamanho')
const botaoTamanho = document.querySelector('#gerarTamanho');
const inputSenha = document.querySelector('#senha');

botaoTamanho.addEventListener('click', function(){
    const tamanho = Number(tamanhoSenha.value) || 15;
    if(tamanho > 100 || tamanho < 4){
        alert('O tamanho da senha não está entre 4 e 100 caracteres.')
        return;
    }
    let senhaGerada = gerarSenha(tamanho);
    inputSenha.value = senhaGerada

    //veriocar força da senha
    forcaSenha(senhaGerada);
});


    function gerarSenha( tamanho = 15){
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*-_.,:;?/';
    let senha = '';
    
    for (let i = 0; i < tamanho; i++){
        const random = Math.floor(Math.random()* caracteres.length);
        senha += caracteres[random];
    }
    return senha;
}


const botaoCopiar =document.querySelector('#copiar');
const msgCopiada = document.querySelector('.MsgCopiada');
botaoCopiar.addEventListener('click', function(){
    navigator.clipboard.writeText(inputSenha.value);
    msgCopiada.textContent = 'Copiado com sucesso!'
    msgCopiada.style.color = 'lightgreen';
    msgCopiada.style.fontWeight = 'bold';
    msgCopiada.style.fontSize = '16px';
    msgCopiada.style.margin = '10px';

    setTimeout(()=>{
         msgCopiada.textContent =''; //limpa a mensagem de copiado
    }, 2000);
});