import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(express.static('public'));
app.use('/data', express.static('data'));

// Configura CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Reemplaza 'dist' con la carpeta correcta en la que se generan los archivos de construcción.
app.use(express.static('dist'));

// Configura Express para servir index.html como la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para el registro de usuarios
app.post('/registro', (req, res) => {
  const { correo, nombre, contraseña } = req.body;

  try {
    // Leer el archivo JSON existente
    const data = fs.readFileSync('./data/users.json', 'utf8');
    const users = JSON.parse(data);

    // Agregar el nuevo usuario a la matriz de usuarios
    users.users.push({ correo, nombre, contraseña });

    // Guardar la matriz actualizada en el archivo JSON (usa la misma ruta)
    fs.writeFileSync('./data/users.json', JSON.stringify(users, null, 2), 'utf8');

    res.status(200).json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ message: 'Error al registrar usuario' });
  }
});

app.listen(3000, () => {
  console.log('Servidor en ejecución en https://rt3x1jtj-3000.uks1.devtunnels.ms/');
});