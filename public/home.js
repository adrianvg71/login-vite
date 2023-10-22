// Al cargar la página y después de verificar el token
const dataUsuario = JSON.parse(localStorage.getItem('usuario'));
console.log(dataUsuario)
if (dataUsuario) {
  // Ahora tienes acceso a todos los datos del usuario
  const nombreUsuario = dataUsuario.nombre;
  // Otros datos del usuario si es necesario

  // Muestra la información del usuario en la página
  document.querySelector('h1').textContent += ` ${nombreUsuario}`;
  document.querySelector('.cerrar-sesion').addEventListener("click", () => {
    localStorage.removeItem('usuario')
    window.location.reload();
  })
} else {
  // No hay sesión iniciada, redirige al usuario al inicio de sesión
  window.location.href = 'login.html';
}