class Búsqueda {
  constructor(usuarios) {
    this.usuarios = usuarios;
  }

  buscarPorNombre(nombre) {
    if (typeof nombre !== 'string') {
      throw new Error('El nombre debe ser una cadena de texto.');
    }

    return this.usuarios.filter(usuario =>
      usuario.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
  }

  buscarPorEdad(edad) {
    if (typeof edad !== 'number') {
      throw new Error('La edad debe ser un número.');
    }

    return this.usuarios.filter(usuario =>
      Number(usuario.edad) === Number(edad)
    );
  }

  buscarPorGenero(genero) {
    if (typeof genero !== 'string') {
      throw new Error('El género debe ser una cadena de texto.');
    }

    return this.usuarios.filter(usuario =>
      usuario.genero.toLowerCase() === genero.toLowerCase()
    );
  }
}
