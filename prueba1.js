const toggle = document.querySelector('.toggle')
const enlaces = document.querySelector('.enlaces')

const contenedorTarjetas = document.getElementById("contenedor-de-tarjetas")
let personajes = []
let opcionDePersonajes
let inputIzuku
let inputKatsuki
let inputShoto
let inputToshinori


toggle.addEventListener("click", () => {
    toggle.classList.toggle("rotar")
    enlaces.classList.toggle("active")
})




class personaje {
    constructor(nombre, foto, id) {
        this.nombre = nombre
        this.foto = foto
        this.id = id
    }
}

let izukuMidoriya = new personaje('Izuku Midoriya', './izuku.png', 'izuku')
let katsukiBakugo = new personaje('Katsuki Bakugo', './katsuki.png', 'katsuki')
let shotoTodoroki = new personaje('Shoto Todoroki', './shoto.png', 'shoto')
let toshinoriYagi = new personaje('Toshinori Yagi', './toshinori.png', 'toshinori')

personajes.push(izukuMidoriya, katsukiBakugo, shotoTodoroki, toshinoriYagi)

function iniciarPagina() {
personajes.forEach((personaje) => {
    opcionDePersonajes = `
        <input type="radio" name="personaje" id=${personaje.id} />
        <label class="tarjeta-de-personaje" for=${personaje.id}>
            <div class="nombre-personaje">
                <p>${personaje.nombre}</p>  
            </div>
            <div class="cajaFoto">
                <img src=${personaje.foto} class=${personaje.id} alt=${personaje.nombre}>
            </div>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDePersonajes
})

}
window.addEventListener("load", iniciarPagina)