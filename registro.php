<?php
// Verificar si se ha enviado el formulario
 if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //Obtener los datos del formulario

    $nombre = $_POST["nombre"];
    $edad = $_POST["edad"];
    $sexo = $_POST["sexo"];
    $color_favorito = $_POST["color_favorito"];

    // Conectar a la base de datos
/*     $servername = "localhost"; // Cambia esto si tu servidor de base de datos está en un lugar diferente
    $username = "root"; // Cambia esto por tu nombre de usuario de la base de datos
    $password = ""; // Cambia esto por tu contraseña de la base de datos
    $dbname = "formulario1";
 */

    $servername = "sql10.freesqldatabase.com"; // Cambia esto si tu servidor de base de datos está en un lugar diferente
    $username = "sql10648604"; // Cambia esto por tu nombre de usuario de la base de datos
    $password = "xkiGRBQavJ"; // Cambia esto por tu contraseña de la base de datos
    $dbname = "sql10648604";



    
    $conn = new mysqli($servername, $username, $password, $dbname);
  
    // Verificar la conexión
     if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }else{
        echo("Conexion exitosa");
    }
     
    // Preparar la consulta SQL para insertar los datos en la tabla "personas"
    $sql = "INSERT INTO personas (nombre, edad, sexo, color_favorito) VALUES ('$nombre', '$edad', '$sexo', '$color_favorito')";

    if ($conn->query($sql) === TRUE) {
        echo "Datos registrados exitosamente.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }    
    // Cerrar la conexión a la base de datos
    $conn->close();
}
?>