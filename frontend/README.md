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

## Ejecución

Para iniciar la aplicación en modo desarrollo, ejecuta:
```
npm start
```

La aplicación estará disponible en `http://localhost:3000`.

## API

La aplicación se comunica con un backend desarrollado en NestJS. Asegúrate de que el backend esté en funcionamiento y configurado correctamente.

## Migraciones y Semillas

El backend incluye migraciones y semillas para crear usuarios de prueba. Asegúrate de ejecutar las migraciones antes de iniciar la aplicación.

## Documentación

Para más detalles sobre la API, consulta la documentación generada automáticamente con Swagger en el backend.

## Buenas Prácticas

Este proyecto sigue buenas prácticas de desarrollo, incluyendo la separación de preocupaciones, uso de DTOs y validaciones adecuadas.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o un pull request.

