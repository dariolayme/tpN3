//import defaultExport  from "jugador-login.js";
class Puntaje {
    constructor(id, puntaje) {
        this.id = id;
        this.puntaje = puntaje;
    }
}

var i = 0;

class PuntajeLogin extends Polymer.Element {
 static get properties() {
        return {
            id: Number,
            puntaje: Number,
        }
    }
    static get template() {
        return Polymer.html`
      
        
      
      <button  on-click="cargarPuntajes">Cargar Puntajes</button>
      <button  id="sgt" style="display: none;" on-click="cargarPuntaje">siguiente Puntaje</button>
      
      
      `;
    }
    

    static get is() { return 'puntaje-login'; }

    
   

    cargarPuntajes() {
        //cerramos el login
        document.getElementById("botonfresh").style.display='none';
        document.getElementById("loginJugador").style.display = 'none';
        var datoslog = document.getElementById("loginPuntaje");
        //datoslog.style.display = 'block';//
        //
        var lineaNueva = document.createElement("div");
        var contenido = document.createTextNode(jugadores[i].nombre + " " + jugadores[i].apellido+ " " + jugadores[i].edad+ " " + jugadores[i].altura+ " " + jugadores[i].peso+ " " + jugadores[i].id /*/+ " " + puntajes[rel].puntaje*/);
        lineaNueva.appendChild(contenido);

        datoslog.appendChild(lineaNueva);
//
        var botonAgregarPuntaje = document.createElement("button");
        botonAgregarPuntaje.addEventListener("click", this.cargarPuntaje, true);
        botonAgregarPuntaje.appendChild(document.createTextNode("botonAgregarPuntaje"));


        datoslog.appendChild(lineaNueva);

        datoslog.appendChild(botonAgregarPuntaje);
        datoslog.style.display = 'block';
        botonAgregarPuntaje.style.display = 'none';


       
        botonAgregarPuntaje.style.display = 'block';

        //this.cargarPuntaje();
        
      

    }
    cargarPuntaje() {

        if (jugadores.length > i) {
            var datoslog = document.getElementById("loginPuntaje");
            datoslog.style.display = 'block';
            //while (i <= 20 ) {
            var lineaNueva = document.createElement("div");
            console.log(puntajes);
            //var rel = jugadores[i].id;
            var contenido = document.createTextNode(jugadores[i].nombre + " " + jugadores[i].apellido+ " " + jugadores[i].edad+ " " + jugadores[i].altura+ " " + jugadores[i].peso+ " " + jugadores[i].id /*/+ " " + puntajes[rel].puntaje*/);
            var valorPt = document.getElementById("puntos").value;
            alert(valorPt);
            //para agregar puntaje
            //var inputPuntajes = document.getElementById("puntaje");
            
           


            //agregando al div
            lineaNueva.appendChild(contenido);

            datoslog.appendChild(lineaNueva);

            
            //variable puntajeNew
            let puntajeNuevo = new Puntaje(i,valorPt);
            puntajes.push(puntajeNuevo); 
            
        }
        else {
            console.log(puntajes);
            alert("ya no ghay jugadores");
            //boton de mostrar top 3 jugadores  
        }//alert("cargo");
        
        i++;
    }

    tomarPuntaje(){

    }


    validarCuposCompletos() {
        return jugadores.length >= 1;
    }

    mostrarPuntajes() {
        if (this.validarCuposCompletos()) {
            alert("entro ");
            //document.getElementById("loginJugador").style.display = 'none';
            //document.getElementById("loginPuntaje").style.display = 'block';
        }
        else {
            alert("No se completo la lista de 20 jugadores");
        }


    }



}

window.customElements.define(PuntajeLogin.is, PuntajeLogin);