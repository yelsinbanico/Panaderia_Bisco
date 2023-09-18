document.addEventListener("DOMContentLoaded", function () {
  const registerButton = document.getElementById("registerButton");

  registerButton.addEventListener("click", function () {
    const nombre = document.getElementById("name").value;
    const apellido = document.getElementById("lastName").value;
    const usuario = document.getElementById("userName").value;
    const correo = document.getElementById("email").value;
    const contrasena = document.getElementById("password").value;

    fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, lastName, userName, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Redirigir al usuario a la página de inicio de sesión o al dashboard
          window.location.href = "/login.html"; // Cambia esto a la página a la que quieras redirigir
        } else {
          // Mostrar mensaje de error
          alert("Error al registrarse");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});
