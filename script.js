document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("miFormulario");

  // Agregar datos predefinidos al formulario (puedes personalizar estos valores)
  formulario.nombre.value = "";
  formulario.edad.value = "";
  formulario.sexo.value = "";
  formulario.color_favorito.value = "";

  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores de los campos
    const nombre = formulario.nombre.value.trim();
    const edad = formulario.edad.value.trim();
    const sexo = formulario.sexo.value.trim();
    const colorFavorito = formulario.color_favorito.value.trim();

    // Validación simple
    if (nombre === "" || edad === "" || sexo === "" || colorFavorito === "") {
      alert("Por favor, complete todos los campos.");
      return;
    }
    // Enviar los datos al servidor utilizando fetch()
    fetch("registro.php", {
      method: "POST",
      body: new FormData(formulario),
    })
      .then((response) => response.text())
      .then((data) => {
        // Limpia los campos del formulario
        formulario.reset();
        // Muestra un mensaje de registro exitoso
        alert("Registro exitoso");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Hubo un error al registrar los datos.");
      });
  });
});

///OBTENER LOS DATOS Y MOSTRARLOS
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("miFormulario");
  const datosExistenes = document.getElementById("datosExistenes");

  // Función para mostrar los datos existentes
  function mostrarDatos() {
    fetch("obtenerdatos.php") // Crea un archivo obtener_datos.php para obtener los datos existentes desde la base de datos
      .then((response) => response.json())
      .then((data) => {
        // Construye una tabla o cualquier formato que desees para mostrar los datos
        const tabla =
          "<table><thead><tr><th>Nombre</th><th>Edad</th><th>Sexo</th><th>Color Favorito</th></tr></thead><tbody>" +
          data
            .map(
              (row) =>
                `<tr><td>${row.nombre}</td><td>${row.edad}</td><td>${row.sexo}</td><td>${row.color_favorito}</td></tr>`
            )
            .join("") +
          "</tbody></table>";
        datosExistenes.innerHTML = tabla;
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }

  // Mostrar datos existentes al cargar la página
  mostrarDatos();

  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // ... Resto de tu código para enviar datos ...

    // Después de enviar datos, actualiza la lista de datos
    mostrarDatos();
  });
});
