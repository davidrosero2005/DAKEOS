class Publicacion {
  constructor(titulo, contenido, autor, fechaPublicacion, imagen, enlace) {
    this.titulo = titulo;
    this.contenido = contenido;
    this.autor = autor;
    this.fechaPublicacion = fechaPublicacion;
    this.imagen = imagen;
    this.enlace = enlace;
    this.reacciones = {
      "Me Enloquece": 0,
      "Me Fascina": 0,
      "Me Caga de Risa": 0,
      "Me Impresiona": 0,
      "Me Tiste": 0,
      "Me Enloca": 0,
    };
    this.compartidos = 0;
  }
}

const publicacion1 = new Publicacion(
  "Título de la publicación",
  "Contenido de la publicación",
  "Autor de la publicación",
  "2023-04-28",
  "imagen.png",
  "https://www.example.com"
);

console.log(publicacion1.titulo); // Output: Título de la publicación
console.log(publicacion1.contenido); // Output: Contenido de la publicación
console.log(publicacion1.autor); // Output: Autor de la publicación
console.log(publicacion1.fechaPublicacion); // Output: 2023-04-28
console.log(publicacion1.imagen); // Output: imagen.png
console.log(publicacion1.enlace); // Output: https://www.example.com
console.log(publicacion1.reacciones); // Output: { "Me Enloquece": 0, "Me Fascina": 0, "Me Caga de Risa": 0, "Me Impresiona": 0, "Me Tiste": 0, "Me Enloca": 0 }
console.log(publicacion1.compartidos); // Output: 0
