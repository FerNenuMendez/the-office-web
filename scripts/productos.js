//productos
const productos=[{
    id:"1",
    name:"Papel A4",
    price:100,
    img:"../recursos/Papel de Impresion A4.jpg"
},
{
    id:"2",
    name:"Papel Carta",
    price:100,
    img:"../recursos/Papel de Impresion A4.jpg"
},
{
    id:"3",
    name:"Papel Auto Adhesivo",
    price:200,
    img:"../recursos/Papel de Impresion A4.jpg"
},
{
    id:"4",
    name:"Papel Rustico",
    price:250,
    img:"../recursos/Papel de Impresion A4.jpg"
},
{
    id:"5",
    name:"Papel Premiun",
    price:300,
    img:"../recursos/Papel de Impresion A4.jpg"
},
{
    id:"6",
    name:"Papel Carta Premiun",
    price:350,
    img:"../recursos/Papel de Impresion A4.jpg"
},]
console.log(productos)
//Carrito
let carrito=[]
class Producto{
    constructor(producto,precio){
    this.producto=producto;
    this.precio=precio;
    }
}

let divHTML=document.getElementById('productos')
const btnIrCarrito=document.getElementById("btnCarrito")

const irCarrito=()=>{
    if(carrito.length===0){
        btnIrCarrito.style.display="none"
    }
}
irCarrito()

const subirArray=(array)=>{
    const arrayJSON=JSON.stringify(array)
    localStorage.setItem("Carrito",arrayJSON)
}

const productoEnDom=()=>{
    productos.forEach((producto)=>{
        let div= document.createElement("div")
        div.setAttribute("class","productos__papel")
        divHTML.append(div)
        let img= document.createElement("img")
        img.setAttribute("src",producto.img)
        img.setAttribute("class","productos__papel__img")
        let nombre= document.createElement("h4")
        nombre.innerText= `Tipo: ${producto.name}`
        nombre.setAttribute("class","productos__papel__h4")
        let precio= document.createElement("p")
        precio.innerText= `Precio por Resma: $${producto.price}`
        let btn= document.createElement("button")
        btn.innerText=("Agregar al Carrito")
        btn.setAttribute("class","productos__papel__btn")
        div.append(img,nombre,precio,btn)

        btn.onclick=()=>{
            carrito.push(new Producto(producto.name,producto.price))
            swal({
                title:`Agregaste al Carrito ${producto.name}`,
                icon:"success"
            })
            subirArray(carrito)
            const irCarrito=()=>{
                if(carrito.length>0){
                    btnIrCarrito.style.display="flex"
                }
            }
            irCarrito()
            btnIrCarrito.onclick=()=>{
                window.location.href='carrito.html'
            }
            console.log(carrito)
        }
    })
    
}
productoEnDom()





