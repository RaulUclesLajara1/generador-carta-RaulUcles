
function Funcion() {
    
    const numeros = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A']
    const palos = ['♦','♥','♠','♣']

    let icono1_doc = document.getElementById('icono1')
    let icono2_doc = document.getElementById('icono2')
    let numero_doc = document.getElementById('numero')

    let numero = numeros[Math.floor(Math.random()*numeros.length)]
    let palo = palos[Math.floor(Math.random()*palos.length)]

    icono1_doc.innerHTML = palo
    icono2_doc.innerHTML = palo
    numero_doc.innerHTML = numero




    if(palo == '♦'|| palo=='♥'){
        icono1_doc.style.color = 'red'
        icono2_doc.style.color = 'red'
        
    
    }else{
        icono1_doc.style.color = 'black'
        icono2_doc.style.color = 'black'

        
    }




};
let ancho = document.getElementById("ancho")
let alto = document.getElementById("alto")
let carta = document.getElementById("carta-id")

ancho.addEventListener("input", () => {
    carta.style.width = `${ancho.value}px`;
  });

alto.addEventListener("input", () => {
    carta.style.height = `${alto.value}px`;
  });

document.getElementById("boton").addEventListener("click", Funcion);
