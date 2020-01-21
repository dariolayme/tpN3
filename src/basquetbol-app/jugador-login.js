let jugadores = [];

let jugadoresBase = [];
let jugadoresAyudaBase = [];
let jugadoresAla = [];
let jugadoresAlaPivot = [];
let jugadoresPivot = [];


jugadoresAla

let puntajes = [];
var id = 0;

class Jugador {
  //Nombre, Apellido, Posición, edad, altura, peso.
  constructor(unNombre, unApellido, unaPosicion, edad, altura, peso, id) {
    this.nombre = unNombre;
    this.apellido = unApellido;
    this.unaPosicion = unaPosicion;
    this.edad = edad;
    this.altura = altura;
    this.peso = peso;
    this.id = id;

  }
}

class JugadorLogin extends Polymer.Element {
  static get is() { return 'jugador-login'; }

  static get properties() {
    return {
      nombre: String,
      apellido: String,
      edad: Number,
      posicion: {
        type: String,
        value: 'Base'
      },
      altura: Number,
      peso: Number,

    }
  }


  static get template() {
    return Polymer.html`
      
          <p>Nombre:<input type="text" id="nombre" value="{{nombre::input}}"> </p>       
          <p>Apellido:<input type="text" id="apellido" value="{{apellido::input}}"></p>
          

         

          <p>Posicion: <select  value="{{posicion::input}}" id="posicion" >
                <option value="Base">Base</option>
                <option value="Ayuda Base">Ayuda Base</option>
                <option value="Ala">Ala </option>
                <option value="Ala Pivot">Ala Pivot </option>
                <option value="Pivot">Pivot </option>
            </select>
          </p>
          <p>Edad:<input type="number" id="edad" value="{{edad::input}}"></p>
          <p>Altura:<input type="text" id="altura" value="{{altura::input}}"></p>
          <p>Peso:<input type="text" id="peso" value="{{peso::input}}"></p>

          <button on-click="cargar">Cargar Datos</button>
          <button on-click="mostrar"> Datos</button>
          <button on-click="ocultar"> Ocultar</button>
         


          `;

  }
  /*
        ocultar(){
  
          var tag = document.getElementById("asd");
          //tag.innerHTML = "hola ocultar";
          tag.style.display = 'none';
        }
        
   */

  cargar() {

    if (this.llegoAlLimite()) {
      let unJugador = new Jugador(this.nombre, this.apellido, this.posicion, this.edad, this.altura, this.peso, id);
      jugadores.push(unJugador);
      switch (this.posicion) {
        case "Base":
          jugadoresBase.push(unJugador);
          break;

        case "Ayuda Base":
          jugadoresAyudaBase.push(unJugador);
          break;
        case "Ala":
          jugadoresAla.push(unJugador);
          break;
        case "Ala Pivot":
          jugadoresAlaPivot.push(unJugador);
          break;
        case "Pivot":
          jugadoresPivot.push(unJugador);
          break;

        default:
          break;
      }


      id++;
    }
    else {

      alert("No se puede ingresar mas Jugadores");

    }
  }

  llegoAlLimite() {
    return jugadores.length < 20
  }

  mostrar() {

    var div = document.getElementById("datos");
    var arrayLleno = "";
    for (let index = 0; index < jugadores.length; index++) {
      arrayLleno += "<tr><td>" + jugadores[index].nombre + "</td><td>" + jugadores[index].apellido + "</td><td>" + jugadores[index].edad + "</td><td>" + jugadores[index].altura + "</td><td>" + jugadores[index].peso + "</td><td>" + jugadores[index].id + "</td></tr>";

    }
    div.innerHTML = arrayLleno;
    div.style.display = 'block';
  }

  ocultar() {
    document.getElementById("datos").style.display = 'none';

  }




}
window.customElements.define(JugadorLogin.is, JugadorLogin);