class Comentario {
    constructor(comentarios) {
      this.comentarios = comentarios || [];
    }
  }
  
  const comentarios1 = new Comentario(["Comentario 1", "Comentario 2"]);
  console.log(comentarios1.comentarios); // Output: ["Comentario 1", "Comentario 2"]
  
  const comentarios2 = new Comentario();
  console.log(comentarios2.comentarios); // Output: []
  