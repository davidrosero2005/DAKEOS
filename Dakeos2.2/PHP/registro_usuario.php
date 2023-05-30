<?php

    include 'conexion.php';

    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];
    $contrasena = hash ('sha512', $contrasena); //vamos a incriptar la contraseña, el algoritmo de incriptamiento es 'sha512' 
    
    $query = "INSERT INTO usuarios(nombre, correo, contrasena)
              VALUES ('$nombre','$correo','$contrasena')";

        //Verificar que no se repita el correo en la base de datos
    
    $verificar_correo = mysqli_query( $conexion , "SELECT * FROM usuarios WHERE correo ='$correo'");
    
    
    if(mysqli_num_rows($verificar_correo) > 0){
        echo '
            <script>
                alert("Este correo ya esta resgitrado, inicia con otro correo")
                window.location = "../index.php"
            </script>';
        exit();
    }

    $ejecutar = mysqli_query($conexion, $query);


    if($ejecutar){
        echo '
            <script>
                alert("Usuario registrado exitosamente")
                window.location = "../index.php"
            </script>
        ';
    }else{
        echo '
            <script>
                alert("Intentelo de nuevo, Usuario no registrado")
                window.location = "../index.php"
            </script>
        ';
    }

    mysqli_close($conexion)
?>