/* Sempre ultilizar dos algoritmos para definir oq deveremos fazer no código */

//Pegar os botões do HTML

const botoes = document.querySelectorAll(".botao")
//pegar os personagens
const personagens = document.querySelectorAll(".personagem")


botoes.forEach((botao, i) => {
    botao.addEventListener ("click", () => {
         
        /*remover o botao PreSelecionado*/
        const botaoSelecionado = document.querySelector(".botao.selecionado")
        botaoSelecionado.classList.remove("selecionado")
        
        // remover o personagem preselecionado
        const personagemSelecionado= document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado")

        //Adicionar a classe selecionado no botao
         botao.classList.add("selecionado")

        //adicionar a classe selecionado no personagem
        personagens[i].classList.add("selecionado")
    })
});





