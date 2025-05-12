# Sistema de Información - Frontend

Este proyecto es una aplicación web desarrollada con ReactJS que permite gestionar usuarios a través de un sistema de información. A continuación se detallan las características y cómo ejecutar el proyecto.

## Características

- **CRUD de Usuarios**: Permite crear, leer, actualizar y eliminar usuarios.
- **Inicio de Sesión**: Los usuarios pueden iniciar sesión validando sus credenciales.
- **Activar/Desactivar Usuarios**: Los administradores pueden activar o desactivar usuarios desde una tabla.
- **Interfaz de Usuario**: Utiliza Bootstrap para un diseño responsivo y atractivo.

## Estructura del Proyecto

- `public/`: Contiene los archivos estáticos como `index.html` y el ícono de la aplicación.
- `src/`: Contiene el código fuente de la aplicación.
  - `components/`: Componentes reutilizables como `UserTable` y `UserForm`.
  - `pages/`: Páginas de la aplicación como `LoginPage` y `UsersPage`.
  - `services/`: Servicios para interactuar con la API del backend.
  - `styles/`: Archivos CSS para los estilos de la aplicación.

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   cd sistema-información/frontend
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

## Configuración del Frontend

### Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto y define la URL del backend:
```
REACT_APP_API_URL=http://localhost:4002/api
```

### Ejecución del Proyecto
1. Instala las dependencias:
   ```
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```
   npm start
   ```

### Funcionalidades
- Inicio de sesión con validación de credenciales.
- Gestión de usuarios (crear, editar, eliminar, activar/desactivar).
- Visualización de contraseñas en la tabla de usuarios.

## Ejecución

Para iniciar la aplicación en modo desarrollo, ejecuta:
```
npm start
```

La aplicación estará disponible en `http://localhost:3000`.

## API

La aplicación se comunica con un backend desarrollado en NestJS. Asegúrate de que el backend esté en funcionamiento y configurado correctamente.

## Migraciones y Semillas

Aunque las migraciones y semillas son manejadas principalmente por el backend, es importante asegurarse de que el backend esté configurado correctamente antes de iniciar el frontend. Sigue estos pasos:

1. Verifica que las migraciones y semillas se hayan ejecutado correctamente en el backend.
2. Asegúrate de que el backend esté corriendo y accesible en la URL configurada en el archivo `.env` del frontend.

### Ejemplo de Éxito
1. Backend configurado y migraciones ejecutadas:
   ```
   npm run typeorm migration:run
   npm run seed:run
   ```
   Resultado esperado:
   ```
   Migration 1746716440192-CreateUsersTable.ts has been executed successfully.
   Inserted 10 users successfully.
   ```

2. Frontend conectado correctamente al backend:
   - Accede a `http://localhost:3000`.
   - Inicia sesión con un usuario de prueba generado por las semillas.
   - Visualiza y gestiona los usuarios en la interfaz.

Esto asegura que el sistema esté completamente funcional.

## Documentación

Para más detalles sobre la API, consulta la documentación generada automáticamente con Swagger en el backend.

## Buenas Prácticas

Este proyecto sigue buenas prácticas de desarrollo, incluyendo la separación de preocupaciones, uso de DTOs y validaciones adecuadas.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o un pull request.

