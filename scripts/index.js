//Frases Random

const divFrases=document.getElementById("random_frase_index")

function mezclarArray(inputArray){
    inputArray.sort(()=> Math.random() - 0.5)
    return inputArray[0];
}

const frase=[mezclarArray(dunder)]
console.log(frase)

const fraseDom=()=>{
    frase.forEach((frase)=>{
        let h4=document.createElement("h4")
        h4.innerText=(frase.content)
        h4.setAttribute("class","frase__h4")
        let p=document.createElement("p")
        p.innerText=(frase.character.firstname)
        p.setAttribute("class","frase__p")
        let p2=document.createElement("p")
        p2.innerText=(frase.character.lastname)
        p2.setAttribute("class","frase__p")
        divFrases.append(h4,p,p2)
    })
}
fraseDom()