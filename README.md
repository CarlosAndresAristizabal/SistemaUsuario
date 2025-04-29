# Sistema de Información

Este proyecto es un sistema de información que implementa un CRUD de usuarios utilizando NestJS para el backend y ReactJS para el frontend. A continuación se detallan las características y la estructura del proyecto.

## Características

- **Backend**: 
  - Desarrollado en NestJS.
  - Implementa un CRUD para gestionar usuarios.
  - Autenticación de usuarios con validación de credenciales.
  - Uso de SQL Server Express como base de datos.
  - Migraciones y semillas para la base de datos.
  - Documentación automática con Swagger.

- **Frontend**:
  - Desarrollado en ReactJS.
  - Interfaz de usuario con Bootstrap.
  - Vista de tabla para listar usuarios con opciones para activar/desactivar.
  - Página de inicio de sesión.

## Estructura del Proyecto

```
sistema-información
├── backend
│   ├── src
│   │   ├── app.module.ts
│   │   ├── main.ts
│   │   ├── users
│   │   │   ├── users.controller.ts
│   │   │   ├── users.service.ts
│   │   │   ├── users.module.ts
│   │   │   ├── dto
│   │   │   │   ├── create-user.dto.ts
│   │   │   │   ├── update-user.dto.ts
│   │   │   └── entities
│   │   │       └── user.entity.ts
│   │   ├── auth
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.module.ts
│   │   │   └── strategies
│   │   │       └── jwt.strategy.ts
│   │   └── database
│   │       ├── database.module.ts
│   │       ├── database.providers.ts
│   │       └── migrations
│   ├── test
│   │   └── app.e2e-spec.ts
│   ├── nest-cli.json
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── public
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src
│   │   ├── components
│   │   │   ├── UserTable.js
│   │   │   └── UserForm.js
│   │   ├── pages
│   │   │   ├── LoginPage.js
│   │   │   └── UsersPage.js
│   │   ├── services
│   │   │   ├── api.js
│   │   │   └── userService.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles
│   │       └── App.css
│   ├── package.json
│   ├── webpack.config.js
│   └── README.md
├── docker-compose.yml
└── README.md
```

## Instalación

1. Clona el repositorio.
2. Navega a la carpeta `backend` y ejecuta `npm install` para instalar las dependencias del backend.
3. Navega a la carpeta `frontend` y ejecuta `npm install` para instalar las dependencias del frontend.
4. Configura la base de datos en el archivo de configuración correspondiente.
5. Ejecuta las migraciones para crear las tablas necesarias.
6. Inicia el backend y el frontend.

## Uso

- Accede a la aplicación a través de la URL proporcionada en la configuración.
- Utiliza el formulario de inicio de sesión para acceder al sistema.
- Administra los usuarios desde la vista de tabla, donde puedes crear, editar, activar o desactivar usuarios.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o un pull request.

