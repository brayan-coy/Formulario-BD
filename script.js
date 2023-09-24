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

