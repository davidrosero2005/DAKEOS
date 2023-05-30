
class Juego {
    constructor(nombre, tipoJuego, enlace) {
      this.nombre = nombre;
      this.tipoJuego = tipoJuego;
      this.enlace = enlace;
    }
  }
  
  const juego1 = new Juego("Super Mario Bros", "Plataformas", "https://www.example.com/mario");
  console.log(juego1.nombre); // Output: Super Mario Bros
  console.log(juego1.tipoJuego); // Output: Plataformas
  console.log(juego1.enlace); // Output: https://www.example.com/mario
  