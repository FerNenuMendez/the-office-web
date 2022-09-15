let carrito=document.getElementById("carrito__final")
let divSuma= document.getElementById("carrito__final__p")

const bajarCarrito=()=>{
    const arrayBajadoLs=localStorage.getItem("Carrito")
    const parseoLs=JSON.parse(arrayBajadoLs)

    const carritoEnDom=()=>{
        parseoLs.forEach((element) => {
        let div= document.createElement("div")
        div.setAttribute("class","div__carrito")
        carrito.append(div)
        let nombre= document.createElement("h4")
        nombre.innerText= `${element.producto}`
        nombre.setAttribute("class","productos__papel__h4")
        let precio= document.createElement("p")
        precio.innerText= `Precio por Resma: $${element.precio}`
        div.append(nombre,precio)
        });
    } 
    carritoEnDom()
    const totalPrecio=()=>{
        let suma=0
        parseoLs.map((element)=>{
            suma=suma+element.precio
        })

        let pSuma=document.createElement("p")
        pSuma.setAttribute("class","p__suma")
        pSuma.innerText=(`El Total de su compra es : $${suma}`)
        let btnSuma= document.createElement("button")
        btnSuma.innerText=("Finalizar Compra")
        btnSuma.setAttribute("class","btn__suma")
        divSuma.append(pSuma,btnSuma)
        btnSuma.onclick=()=>{
            swal({
                title:"Su compra finalizo con exito, gracias!",
                icon:"success"
            })
            .then(() => {
                localStorage.clear
                window.location.href='productos.html'
            });
        }
    }
    totalPrecio()
}
bajarCarrito()
