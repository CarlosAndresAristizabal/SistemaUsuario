# Sistema de Gestión de Usuarios

Este proyecto es una aplicación completa para la gestión de usuarios, que incluye un backend desarrollado con NestJS y un frontend con React.

## Características
- **Backend**:
  - Registro e inicio de sesión con JWT.
  - Contraseñas encriptadas.
  - CRUD de usuarios.
- **Frontend**:
  - Inicio de sesión.
  - Gestión de usuarios (crear, editar, eliminar, activar/desactivar).
  - Visualización de contraseñas.

## Configuración
### Backend
Sigue las instrucciones en el archivo `backend/README.md`.

### Frontend
Sigue las instrucciones en el archivo `frontend/README.md`.

## Ejecución con Docker
1. Construye y levanta los contenedores:
   ```
   docker-compose up --build
   ```
2. Accede al frontend en `http://localhost:3000` y al backend en `http://localhost:4002`.

