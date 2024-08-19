# QR Consumables Manager

QR Consumables Manager es una aplicación web para gestionar consumibles mediante códigos QR. Permite registrar, actualizar, y generar reportes en HTML de los consumibles utilizando una base de datos SQL.

## Estructura del Proyecto

```
qr-consumables-manager/
│
├── public/
│   ├── index.html             # Página principal del frontend
│   └── styles.css             # Estilos CSS (opcional)
│
├── src/
│   ├── routes/
│   │   ├── api.js             # Rutas para la API (endpoints)
│   │
│   ├── controllers/
│   │   ├── consumiblesController.js  # Lógica para manejar solicitudes de consumibles
│   │
│   ├── database/
│   │   ├── db.js              # Configuración de la conexión a la base de datos
│   │
│   ├── index.js              # Archivo principal de configuración del servidor
│
├── .gitignore                 # Archivos y carpetas a ignorar por Git
├── package.json               # Información del proyecto y dependencias
├── README.md                  # Documentación del proyecto
└── LICENSE                    # Licencia del proyecto (opcional)
```

## Instalación

1. **Clona el Repositorio**

   ```bash
   git clone https://github.com/tu-usuario/qr-consumables-manager.git
   cd qr-consumables-manager
   ```

2. **Instala las Dependencias**

   Asegúrate de tener [Node.js](https://nodejs.org/) instalado. Luego, instala las dependencias del proyecto:

   ```bash
   npm install
   ```

3. **Configura la Base de Datos**

   - Instala [MySQL](https://www.mysql.com/) si aún no lo has hecho.
   - Crea una base de datos y una tabla siguiendo el esquema proporcionado:

     ```sql
     CREATE DATABASE consumibles_db;
     USE consumibles_db;

     CREATE TABLE consumibles (
       id INT AUTO_INCREMENT PRIMARY KEY,
       codigo VARCHAR(255),
       lote VARCHAR(255),
       pais VARCHAR(255),
       caducidad VARCHAR(255),
       descripcion TEXT,
       fecha_adicion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );
     ```

4. **Configura la Conexión a la Base de Datos**

   Edita `src/database/db.js` para incluir las credenciales de tu base de datos MySQL:

   ```javascript
   const mysql = require('mysql2');

   const db = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'password',
     database: 'consumibles_db'
   });

   module.exports = db;
   ```

## Uso

1. **Inicia el Servidor**

   Ejecuta el servidor de Express con el siguiente comando:

   ```bash
   npm start
   ```

   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

2. **Accede a la Aplicación**

   Abre tu navegador y ve a [http://localhost:3000](http://localhost:3000) para interactuar con la aplicación.

## Endpoints de la API

- **Obtener el Último Registro de un Código**

  ```http
  GET /ultimo-registro/:codigo
  ```

  **Respuesta**

  ```json
  {
    "id": 1,
    "codigo": "HI 7007L/C",
    "lote": "156",
    "pais": "Rumanía",
    "caducidad": "6/25",
    "descripcion": "HI 7007L/C Solución de Calibración pH 7.01, botella 500 mL",
    "fecha_adicion": "2024-08-18T12:00:00Z"
  }
  ```

- **Obtener Todos los Códigos Únicos**

  ```http
  GET /todos-los-codigos
  ```

  **Respuesta**

  ```json
  [
    "HI 7007L/C",
    "HI 7004L/C",
    "HI 7010L/C"
  ]
  ```

## Contribuciones

¡Las contribuciones son bienvenidas! Si tienes sugerencias o encuentras algún problema, por favor abre un [issue](https://github.com/tu-usuario/qr-consumables-manager/issues) o envía un pull request.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).

## Contacto

Si tienes preguntas o necesitas soporte, puedes contactar a [tu-email@dominio.com](mailto:tu-email@dominio.com).
