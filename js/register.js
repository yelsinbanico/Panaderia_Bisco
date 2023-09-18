document.addEventListener("DOMContentLoaded", function () {
  const registerButton = document.getElementById("registerButton");

  registerButton.addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const userName = document.getElementById("userName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const isAdmin = false;

    fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        lastName,
        userName,
        email,
        password,
        isAdmin,
      }),
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
