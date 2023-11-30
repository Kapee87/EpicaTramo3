# Plataforma Interactiva de Viajes - Backend

Bienvenido al repositorio del backend de la Plataforma Interactiva de Viajes. Este proyecto tiene como objetivo proporcionar a los amantes de los viajes un espacio en línea para compartir y descubrir experiencias únicas. Aquí encontrarás las instrucciones para configurar el proyecto localmente y contribuir al desarrollo.

- [Plataforma Interactiva de Viajes - Backend](#plataforma-interactiva-de-viajes---backend)
  - [Descripción del Proyecto](#descripción-del-proyecto)
  - [Criterios de Evaluación](#criterios-de-evaluación)
    - [Funcionalidad](#funcionalidad)
    - [Modelo de Datos](#modelo-de-datos)
    - [Visualización de Datos](#visualización-de-datos)
    - [Uso de Tecnologías](#uso-de-tecnologías)
    - [Estilo Personalizado](#estilo-personalizado)
    - [Documentación](#documentación)
    - [Repositorio en GitHub](#repositorio-en-github)
    - [Entrega](#entrega)
  - [Instrucciones para Ejecutar Localmente](#instrucciones-para-ejecutar-localmente)
    - [Configuración del Entorno](#configuración-del-entorno)
    - [Configuración del Backend](#configuración-del-backend)
    - [Enlaces Útiles](#enlaces-útiles)
    - [Contribuir](#contribuir)
  - [¡Diviértete programando! 😄🚀](#diviértete-programando-)

## Descripción del Proyecto

Desarrollamos una plataforma web centrada en experiencias de viajes que permite a los usuarios registrarse, iniciar sesión, crear publicaciones y comentar en las experiencias de otros viajeros. Utilizamos tecnologías como Node.js, Express, MongoDB y Mongoose para garantizar una interfaz intuitiva, funcional y con persistencia de datos.

## Criterios de Evaluación

### Funcionalidad

1. **Registro y Login:** Los usuarios pueden registrarse e iniciar sesión de manera efectiva.
2. **Creación de Posteos y Comentarios:** Los usuarios pueden crear posteos y comentarios correctamente.
3. **Restricciones de Acceso:** Las restricciones de acceso se aplican según las especificaciones.

### Modelo de Datos

4. **Utilización del Modelo Especificado:** Implementación correcta del modelo de datos especificado.

### Visualización de Datos

5. **Ruta Pública de Posteos:** La ruta que muestra los posteos es accesible públicamente.
6. **Visualización Adecuada:** Los posteos y comentarios se muestran de manera legible y ordenada.

### Uso de Tecnologías

7. **Correcta Utilización de Tecnologías:** Node.js, Express, MongoDB y Mongoose se utilizan correctamente.
8. **Integración con React:** Integración sin problemas entre el backend y el frontend.
9. **Implementación de Middlewares:** Correcta implementación y configuración de los Middlewares.

### Estilo Personalizado

10. **Diseño Atractivo:** Se valora un diseño atractivo y amigable para el usuario.
11. **Consistencia Estilística:** Mantener un estilo coherente en toda la aplicación.

### Documentación

12. **Implementación de Comentarios:** El código está bien comentado, explicando funciones, rutas y partes críticas.
13. **Calidad del Código Desarrollado:** Se evalúa la legibilidad, modularidad y eficiencia del código.

### Repositorio en GitHub

14. **Nombre del Repositorio:** Debe seguir la estructura "comision-X-juan-perez".
15. **Visibilidad Pública:** El repositorio es público.
16. **Configuración del .gitignore:** Asegurarse de que el .gitignore esté configurado correctamente.
17. **Presencia de .env:** Verificar que haya un archivo .env y proporcionar el archivo .envexample o .exampleenv correctamente configurado.
18. **Estructura del Repositorio:** Verificar que el enlace del repositorio de GitHub adjunto contenga tanto las carpetas del frontend como del backend.

### Entrega

19. **Entrega en Tiempo y Forma:** La entrega del trabajo debe realizarse dentro del plazo establecido.

## Instrucciones para Ejecutar Localmente

### Configuración del Entorno

1. Instalar Node.js y NPM en la máquina si aún no se ha hecho.
2. En la terminal, navegar al directorio donde deseas crear tu proyecto.

### Configuración del Backend

3. Ejecutar `npm init` y configurar el archivo package.json según sea necesario.
4. Instalar las dependencias esenciales como Express, Cors, Dotenv, Helmet, Morgan.
5. Configurar los Middlewares necesarios.
6. Configurar la conexión a la base de datos utilizando Mongoose.
7. Crear y configurar un archivo `.env` para implementar variables de entorno.
8. Crear modelos para Usuario, Posteo y Comentario utilizando Mongoose con las relaciones necesarias.
9. Implementar controladores y rutas en Express para gestionar usuarios, posteos y comentarios.
10. Crear middlewares para autenticación y autorización.
11. Implementar validaciones en el backend.

### Enlaces Útiles

- [Documentación de MongoDB](https://docs.mongodb.com/)
- [Documentación de Mongoose](https://mongoosejs.com/docs/)
- [Documentación de Express](https://expressjs.com/)
- [Cómo crear un archivo .env](https://www.npmjs.com/package/dotenv)

### Contribuir

1. Realizar un fork del repositorio.
2. Crear una rama para tu nueva funcionalidad: `git checkout -b nueva-funcionalidad`.
3. Realizar tus cambios y hacer commit: `git commit -m 'Añade nueva funcionalidad'`.
4. Hacer push a la rama: `git push origin nueva-funcionalidad`.
5. Abrir un pull request.

## ¡Diviértete programando! 😄🚀

---

_Este proyecto es parte del Tramo III - Lenguajes de Programación II de Argentina Programa._
