# Sistema de Información - Backend

Este proyecto es un sistema de información que implementa un CRUD de usuarios utilizando NestJS para el backend y ReactJS para el frontend. A continuación se detallan las características y la estructura del backend.

## Características

- **CRUD de Usuarios**: Permite crear, leer, actualizar y eliminar usuarios.
- **Modelo de Usuario**: Incluye las siguientes propiedades:
  - Nombre Completo
  - Correo Electrónico
  - Fecha de Creación
  - Contraseña (cifrada)
  - Activo (true/false)
- **Autenticación**: Implementa un sistema de inicio de sesión que valida las credenciales del usuario y verifica si el usuario está activo.
- **Interfaz de Usuario**: Utiliza Bootstrap para el diseño del frontend.
- **Migraciones y Semillas**: Incluye migraciones para la base de datos y una semilla con usuarios de prueba.
- **Swagger**: Documentación automática de la API utilizando Swagger.
- **Buenas Prácticas**: Se siguen buenas prácticas de desarrollo en la implementación del código.

## Estructura del Proyecto

- **src/**: Contiene el código fuente de la aplicación.
  - **app.module.ts**: Módulo principal de la aplicación.
  - **main.ts**: Punto de entrada de la aplicación.
  - **users/**: Módulo relacionado con la gestión de usuarios.
    - **users.controller.ts**: Controlador para manejar las solicitudes de usuarios.
    - **users.service.ts**: Lógica de negocio para la gestión de usuarios.
    - **users.module.ts**: Módulo de usuarios.
    - **dto/**: Contiene los Data Transfer Objects (DTO) para crear y actualizar usuarios.
    - **entities/**: Define la entidad de usuario.
  - **auth/**: Módulo de autenticación.
    - **auth.controller.ts**: Controlador para manejar el inicio de sesión.
    - **auth.service.ts**: Lógica de negocio para la autenticación.
    - **auth.module.ts**: Módulo de autenticación.
    - **strategies/**: Contiene la estrategia JWT para la autenticación.
  - **database/**: Módulo de base de datos.
    - **database.module.ts**: Configuración de la conexión a la base de datos.
    - **database.providers.ts**: Proveedores de la base de datos.
    - **migrations/**: Archivos de migración para la base de datos.
- **test/**: Contiene pruebas de extremo a extremo.
- **nest-cli.json**: Configuración para el CLI de NestJS.
- **package.json**: Configuración de npm para el backend.
- **tsconfig.json**: Configuración de TypeScript.

## Configuración del Backend

### Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto y define las siguientes variables:
```
JWT_SECRET=your-secret-key
DATABASE_URL=postgres://user:password@localhost:5432/dbname
```

### Ejecución del Proyecto
1. Instala las dependencias:
   ```
   npm install
   ```
2. Inicia el servidor:
   ```
   npm run start:dev
   ```

### Funcionalidades
- Registro de usuarios con contraseñas encriptadas.
- Inicio de sesión con generación de tokens JWT.
- Gestión de usuarios (crear, editar, eliminar, activar/desactivar).

## Migraciones y Semillas

### Migraciones
Las migraciones permiten mantener la estructura de la base de datos actualizada. Para ejecutar las migraciones, utiliza el siguiente comando:
```
npm run typeorm migration:run
```
Esto aplicará todas las migraciones pendientes a la base de datos configurada.

### Semillas
Las semillas permiten poblar la base de datos con datos iniciales o de prueba. Para ejecutar las semillas, utiliza el siguiente comando:
```
npm run seed:run
```
Esto insertará datos de prueba, como usuarios iniciales, en la base de datos.

### Ejemplo de Éxito
1. Ejecuta las migraciones:
   ```
   npm run typeorm migration:run
   ```
   Resultado esperado:
   ```
   Query: CREATE TABLE "users" (...)
   Migration 1746716440192-CreateUsersTable.ts has been executed successfully.
   ```

2. Ejecuta las semillas:
   ```
   npm run seed:run
   ```
   Resultado esperado:
   ```
   Seeding: UserSeeder
   Inserted 10 users successfully.
   ```

## Instalación

1. Clona el repositorio.
2. Navega al directorio `backend`.
3. Ejecuta `npm install` para instalar las dependencias.
4. Configura la base de datos en el archivo de configuración correspondiente.
5. Ejecuta las migraciones y semillas necesarias.
6. Inicia el servidor con `npm run start`.

## Uso

Accede a la API a través de `http://localhost:3000` y utiliza Swagger para explorar los endpoints disponibles.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cambios o mejoras.