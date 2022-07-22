/*
quando clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartão  correspondente ao que foi selecionado na listagem 

trabalhar com 2 elementos, -listagem 
-cartao poke

criar 2 var. no js pra trabalhar com os elementos da tela

trabalhar com um evento de clique feito pelo usuario na listagem de pokemons

-remover a classe aberto  só do cartão que está aberto
-ao clica no poke das listagem pegamos o id dele pra saber qual cartão mostrar
-remover a classe ativa que marca o poke selecionado
-adicionar a classe ativo no item da lista selecionado
 */

//criar 2 var. no js pra trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')


const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon => {
    //trabalhar com um evento de clique feito pelo usuario na listagem de pokemons
    pokemon.addEventListener('click', () => {
        
        //remover a classe aberto  só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        //ao clica no poke das listagem pegamos o id dele pra saber qual cartao mostrar
       const idPokemonSelecionado = pokemon.attributes.id.value

       const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
       const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
       cartaoPokemonParaAbrir.classList.add('aberto') 

       //remover a classe ativa que marca o poke selecionado
       const pokemonAtivoNaListagem = document.querySelector('.ativo')
       pokemonAtivoNaListagem.classList.remove('ativo')

       //adicionar a classe ativo no item da lista selecionado
       const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
       pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})