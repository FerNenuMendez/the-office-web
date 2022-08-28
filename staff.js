const fotoMichael=document.getElementById("michael")
const fotoJim=document.getElementById("jim")
const fotoDwight=document.getElementById("dwight")
const fotoPam=document.getElementById("pam")
const fotoAndy=document.getElementById("andy")
const fotoOscar=document.getElementById("oscar")
const fotoKevin=document.getElementById("kevin")
const fotoAngela=document.getElementById("angela")


fotoMichael.onclick=()=>{
    const options = {
                method: 'GET',
                headers: {
                'X-RapidAPI-Key': '574503d75dmsh0a60ed0cec6ee38p13ac27jsn315ca6abe10e',
                'X-RapidAPI-Host': 'the-office.p.rapidapi.com'
            }
        };
        fetch('https://the-office.p.rapidapi.com/1', options)
        .then( respuesta => respuesta.json())
        .then( data => {
            console.log(data)
            swal({
                title: `Actor: ${data.realname}`,
                text: `Temporadas: ${data.seasons}`
            })
        })
        .catch( () => console.log("Error de Personaje"))
}
fotoJim.onclick=()=>{
    const options = {
                method: 'GET',
                headers: {
                'X-RapidAPI-Key': '574503d75dmsh0a60ed0cec6ee38p13ac27jsn315ca6abe10e',
                'X-RapidAPI-Host': 'the-office.p.rapidapi.com'
            }
        };
        fetch('https://the-office.p.rapidapi.com/2', options)
        .then( respuesta => respuesta.json())
        .then( data => {
            console.log(data)
            swal({
                title: `Actor: ${data.realname}`,
                text: `Temporadas: ${data.seasons}`
            })
        })
        .catch( () => console.log("Error de Personaje"))
}
fotoDwight.onclick=()=>{
    const options = {
                method: 'GET',
                headers: {
                'X-RapidAPI-Key': '574503d75dmsh0a60ed0cec6ee38p13ac27jsn315ca6abe10e',
                'X-RapidAPI-Host': 'the-office.p.rapidapi.com'
            }
        };
        fetch('https://the-office.p.rapidapi.com/3', options)
        .then( respuesta => respuesta.json())
        .then( data => {
            console.log(data)
            swal({
                title: `Actor: ${data.realname}`,
                text: `Temporadas: ${data.seasons}`
            })
        })
        .catch( () => console.log("Error de Personaje"))
}
fotoPam.onclick=()=>{
    const options = {
                method: 'GET',
                headers: {
                'X-RapidAPI-Key': '574503d75dmsh0a60ed0cec6ee38p13ac27jsn315ca6abe10e',
                'X-RapidAPI-Host': 'the-office.p.rapidapi.com'
            }
        };
        fetch('https://the-office.p.rapidapi.com/5', options)
        .then( respuesta => respuesta.json())
        .then( data => {
            console.log(data)
            swal({
                title: `Actor: ${data.realname}`,
                text: `Temporadas: ${data.seasons}`
            })
        })
        .catch( () => console.log("Error de Personaje"))
}
fotoAndy.onclick=()=>{
    const options = {
                method: 'GET',
                headers: {
                'X-RapidAPI-Key': '574503d75dmsh0a60ed0cec6ee38p13ac27jsn315ca6abe10e',
                'X-RapidAPI-Host': 'the-office.p.rapidapi.com'
            }
        };
        fetch('https://the-office.p.rapidapi.com/7', options)
        .then( respuesta => respuesta.json())
        .then( data => {
            console.log(data)
            swal({
                title: `Actor: ${data.realname}`,
                text: `Temporadas: ${data.seasons}`
            })
        })
        .catch( () => console.log("Error de Personaje"))
}
fotoOscar.onclick=()=>{
    const options = {
                method: 'GET',
                headers: {
                'X-RapidAPI-Key': '574503d75dmsh0a60ed0cec6ee38p13ac27jsn315ca6abe10e',
                'X-RapidAPI-Host': 'the-office.p.rapidapi.com'
            }
        };
        fetch('https://the-office.p.rapidapi.com/16', options)
        .then( respuesta => respuesta.json())
        .then( data => {
            console.log(data)
            swal({
                title: `Actor: ${data.realname}`,
                text: `Temporadas: ${data.seasons}`
            })
        })
        .catch( () => console.log("Error de Personaje"))
}
fotoKevin.onclick=()=>{
    const options = {
                method: 'GET',
                headers: {
                'X-RapidAPI-Key': '574503d75dmsh0a60ed0cec6ee38p13ac27jsn315ca6abe10e',
                'X-RapidAPI-Host': 'the-office.p.rapidapi.com'
            }
        };
        fetch('https://the-office.p.rapidapi.com/11', options)
        .then( respuesta => respuesta.json())
        .then( data => {
            console.log(data)
            swal({
                title: `Actor: ${data.realname}`,
                text: `Temporadas: ${data.seasons}`
            })
        })
        .catch( () => console.log("Error de Personaje"))
}
fotoAngela.onclick=()=>{
    const options = {
                method: 'GET',
                headers: {
                'X-RapidAPI-Key': '574503d75dmsh0a60ed0cec6ee38p13ac27jsn315ca6abe10e',
                'X-RapidAPI-Host': 'the-office.p.rapidapi.com'
            }
        };
        fetch('https://the-office.p.rapidapi.com/9', options)
        .then( respuesta => respuesta.json())
        .then( data => {
            console.log(data)
            swal({
                title: `Actor: ${data.realname}`,
                text: `Temporadas: ${data.seasons}`
            })
        })
        .catch( () => console.log("Error de Personaje"))
}