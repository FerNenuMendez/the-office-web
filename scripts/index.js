//Frases Random

const divFrases=document.getElementById("random_frase_index")

function shuffleArray(inputArray){
    return inputArray.sort(()=> Math.random() - 0.5);
}
// function findFrase(array){
//     const arrayJSON=JSON.stringify(array)
//     const frase=arrayJSON.filter((frase)=> frase.id===0)
//     return frase;
// }

const frasesRandom=()=>{
    const arraymezclado=[shuffleArray(dunder)]


    //     let divFrase=document.createElement("div")
    //     divFrase.setAttribute("class","div__frase")
    //     divFrases.append(divFrase)
    //     let frase=document.createElement("p")
    //     frase.setAttribute("class","div__frase__frase")
    //     frase.innerText(`${dunder.content}`)
    //     let autor=document.createElement("p")
    //     autor.setAttribute("class","div__frase__autor")
    //     autor.innerText(`${dunder.character.firstname} ${dunder.character.lastname}`)
    //     divFrase.append(frase,autor)
    // })
}
frasesRandom()
function getRandom(min, max) {
    return Math.round((Math.random() * (max - min) + min));
}  
console.log(getRandom(100,142))