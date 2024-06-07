


/* tomar cuidado novamente com o window, sem ele nao funciona  */
var filtro = window.document.getElementById(`filtro`)
var cards = window.document.getElementsByClassName("card")


filtro.addEventListener(`input`, filtercard)


function filtercard(){
    if(filtro != `` ){
        var filtertext = filtro.value.toLowerCase()
        for(let card of cards){

            var tituloElement = card.querySelector(`h1`)

            var titulo = tituloElement.innerText.toLowerCase()
            

             if(!titulo.includes(filtertext)){

                card.style.display = `none`


            } else{
                card.style.display = `block`



            }
           
        }
    }
}