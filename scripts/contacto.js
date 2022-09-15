const fotoKelly=document.querySelector("#kelly")
const fotoToby=document.querySelector("#toby")


fotoKelly.onclick=()=>{
    const options = {
                method: 'GET',
                headers: {
                'X-RapidAPI-Key': '574503d75dmsh0a60ed0cec6ee38p13ac27jsn315ca6abe10e',
                'X-RapidAPI-Host': 'the-office.p.rapidapi.com'
            }
        };
        fetch('https://the-office.p.rapidapi.com/14', options)
        .then( respuesta => respuesta.json())
        .then( data => {

            swal({
                title: `Actor: ${data.realname}`,
                text: `Temporadas: ${data.seasons}`
            })
        })
        .catch( () => console.log("Error de Personaje"))
}
fotoToby.onclick=()=>{
    const options = {
                method: 'GET',
                headers: {
                'X-RapidAPI-Key': '574503d75dmsh0a60ed0cec6ee38p13ac27jsn315ca6abe10e',
                'X-RapidAPI-Host': 'the-office.p.rapidapi.com'
            }
        };
        fetch('https://the-office.p.rapidapi.com/4', options)
        .then( respuesta => respuesta.json())
        .then( data => {

            swal({
                title: `Actor: ${data.realname}`,
                text: `Temporadas: ${data.seasons}`
            })
        })
        .catch( () => console.log("Error de Personaje"))
}