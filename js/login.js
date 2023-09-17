document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("loginButton");

  loginButton.addEventListener("click", function () {
    const username = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          // Guardar el token y redirigir al usuario
          localStorage.setItem("token", data.token);
          window.location.href = "/dashboard.html"; // Cambia esto a la página a la que quieras redirigir
        } else {
          // Mostrar mensaje de error
          alert("Error al iniciar sesión");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});
