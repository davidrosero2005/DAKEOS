<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="css/estilos.css">
    <title>DAKEOS</title>
	<link rel="icon" href="html/logo.ico">
    <!--Iconos-->
<body>
    <h2>REGISTRATE Y CONFIA DE NOSSOTROS</h2>
<div class="container" id="container">
	<div class="form-container sign-up-container">
		<!--Registro-->
		<form action="php/registro_usuario.php" method="POST">
			<h1>Crear una cuenta</h1>
			<div class="social-container">
			</div>
			<input type="nombre" placeholder="Nombre Completo" name="nombre"/>
			<input type="email" placeholder="Correo Electronico" name="correo"/>
			<input type="password" placeholder="Contraseña" name="contrasena"/>
			<button>Registrarse</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<!--Login-->
		<form action="php/login_usuario.php" method="POST">
			<h1>Iniciar sesion</h1>
			<div class="social-container">
			</div>
			<input type="email" placeholder="Correo Electronico" name="correo"/>
			<input type="password" placeholder="Contraseña" name="contrasena"/>
			<a href="#">Olvidaste tu contrasena?</a>
			<button>Iniciar Sesion</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Bienvenido unete a esta comunidad</h1>
				<p>Para mantenerse conectado con nosotros, inicie sesión con su información personal.</p>
				<button class="ghost" id="signIn">Inicia Sesion</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Bienvenidos</h1>
				<p>Ingresa tus datos personales y comienza tu viaje con nosotros</p>
				<button class="ghost" id="signUp">Registrate</button>
			</div>
		</div>
	</div>
</div>
<script src="JS/main.js"></script>
</body>
</html>