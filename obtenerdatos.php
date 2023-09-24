<?php
// Conectar a la base de datos
include('registro.php');
$servername = "localhost"; // Cambia esto si tu servidor de base de datos está en un lugar diferente
$username = "root"; // Cambia esto por tu nombre de usuario de la base de datos
$password = ""; // Cambia esto por tu contraseña de la base de datos
$dbname = "formulario1";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Verificar si se ha enviado una solicitud POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Realizar una consulta SQL para obtener los datos existentes
    $sql = "SELECT nombre, edad, sexo, color_favorito FROM personas";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Crear un array para almacenar los datos
        $datos = array();

        while ($row = $result->fetch_assoc()) {
            // Agregar cada fila de datos al array
            $datos[] = $row;
        }

        // Devolver los datos en formato JSON
        echo json_encode($datos);
    } else {
        echo json_encode(array()); // Si no hay datos, devolver un array vacío
    }
} else {
    echo "Método no permitido"; // Si no se ha enviado una solicitud POST
}
// Cerrar la conexión a la base de datos
$conn->close();
?>