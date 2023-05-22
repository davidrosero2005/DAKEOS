// Datos de ejemplo para usuarios y publicaciones
var usersData = [
    {
      id: 1,
      name: "Usuario 1",
      email: "usuario1@example.com",
      password: "123456"
    },
    {
      id: 2,
      name: "Usuario 2",
      email: "usuario2@example.com",
      password: "abcdef"
    },
    // Agrega más usuarios aquí si es necesario
  ];
  
  var postsData = [
    {
      id: 1,
      userId: 1,
      content: "¡Hola, mundo!"
    },
    {
      id: 2,
      userId: 2,
      content: "Estoy disfrutando de esta red social."
    },
    // Agrega más publicaciones aquí si es necesario
  ];
  
  // Función para obtener un usuario por ID
  function getUserById(id) {
    return usersData.find(function(user) {
      return user.id === id;
    });
  }
  
  // Función para obtener todas las publicaciones de un usuario
  function getPostsByUserId(userId) {
    return postsData.filter(function(post) {
      return post.userId === userId;
    });
  }
  
  // Ejemplos de uso
  var userId = 1;
  var user = getUserById(userId);
  if (user) {
    console.log("Nombre de usuario:", user.name);
    var posts = getPostsByUserId(userId);
    console.log("Publicaciones:");
    posts.forEach(function(post) {
      console.log("ID:", post.id, "Contenido:", post.content);
    });
  } else {
    console.log("Usuario no encontrado.");
  }
  