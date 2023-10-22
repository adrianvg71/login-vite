// Estilos del formulario
const container = document.getElementById("container")
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login")

registerBtn.addEventListener("click", () => {
  container.classList.add("active")
})

loginBtn.addEventListener("click", () => {
  container.classList.remove("active")
})

// Cargamos los usuarios del JSON
let users = [];
async function cargarUsuarios() {
  const response = await fetch('./data/users.json');
  const data = await response.json();
  data.users.forEach(usuario => {
    users.push(usuario)
  })
}
async function iniciarApp() {
  try {
    await cargarUsuarios();
    console.log(users);

    // Continúa con el resto de tu código aquí.
    if (users) {
      // Tu código para trabajar con los usuarios.
    }
  } catch (error) {
    console.error('Error al cargar usuarios:', error);
  }
}

iniciarApp();
let formulario = document.querySelector(".formulario")

document.querySelector(".signUp").addEventListener("click", async () => {
  let nombreR = document.querySelector("input[id=nombreR]").value;
  let correoR = document.querySelector("input[id=correoR]").value;
  let contraseñaR = document.querySelector("input[id=contraseñaR]").value;
  
  const data = {
    nombre: nombreR,
    correo: correoR,
    contraseña: contraseñaR
  }

  console.log(data)

  try {
    const response = await fetch('http://localhost:5173/registro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      // El usuario se registró con éxito
      console.log('Usuario registrado con éxito');
    } else {
      console.error('Error al registrar usuario');
    }
    formulario.reset();
    localStorage.setItem('usuario', JSON.stringify(data));
    window.location.href = 'index.html';
  } catch (error) {
    console.error('Error de red:', error);
  }
});

/*
async function register(correo, nombre, contraseña) {
  // Crear un nuevo objeto de usuario
  const nuevoUsuario = {
    correo: correo,
    nombre: nombre,
    contraseña: contraseña
  };

  // Agregar el nuevo usuario a la matriz
  users.push(nuevoUsuario);

  // Guardar la matriz actualizada de usuarios en el archivo JSON
  await guardarUsuariosEnJSON();

  // Opcional: Puedes realizar otras acciones después del registro si es necesario.
  // Por ejemplo, redirigir al usuario a la página de inicio después de registrarse.
}

async function guardarUsuariosEnJSON() {
  // Guarda la matriz actualizada de usuarios en el archivo JSON
  const dataToSave = { users: users };
  const jsonData = JSON.stringify(dataToSave);

  fs.writeFile('users.json', jsonData, 'utf8', (err) => {
    if (err) {
      console.error('Error al guardar usuarios en el archivo JSON:', err);
    } else {
      console.log('Usuario registrado exitosamente');
    }
  });
}*/