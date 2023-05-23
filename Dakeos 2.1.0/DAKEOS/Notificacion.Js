class Notificacion {
    constructor(mensaje, fecha, emisor) {
      this.mensaje = mensaje;
      this.fecha = fecha;
      this.emisor = emisor;
      this.leida = false;
    }
  
    marcarComoLeida() {
      this.leida = true;
    }
  
    mostrarInformacion() {
      console.log("Mensaje:", this.mensaje);
      console.log("Fecha:", this.fecha);
      console.log("Emisor:", this.emisor);
      console.log("Leída:", this.leida);
    }
  }
  
  const notificacion1 = new Notificacion("Tienes un nuevo mensaje", "2023-04-28", "Usuario1");
  notificacion1.mostrarInformacion(); // Mostrará la información de la notificación (no leída)
  
  notificacion1.marcarComoLeida();
  notificacion1.mostrarInformacion(); // Mostrará la información de la notificación (leída)