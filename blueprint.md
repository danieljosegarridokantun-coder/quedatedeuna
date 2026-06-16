# Visión General

"Quédate de Una" es una plataforma educativa comercial diseñada para vender cursos de preparación para los exámenes de admisión a la carrera de ingeniería. La plataforma ofrecerá guías de estudio, ejercicios prácticos y lecciones en video. Está construida con Next.js y Firebase.

# Plan de Migración v0

El plan fue migrar el diseño existente desde v0 al nuevo proyecto de Next.js.

## Pasos de Migración

1.  **Actualizar la descripción del proyecto:** Corregir el `blueprint.md` para reflejar que el proyecto es una plataforma educativa. (Hecho)
2.  **Recrear componentes:** Crear los archivos y el código correspondiente en la estructura del proyecto de Next.js (`/src/components/`, `/src/app/page.tsx`, etc.). (Hecho)
3.  **Estilo y diseño:** Aplicar los estilos globales y específicos para que coincidan con el diseño de v0. (Hecho)

# Plan de Despliegue en Firebase App Hosting

El objetivo es desplegar la aplicación web en Firebase App Hosting.

## Pasos del Despliegue

1.  **Subir código a GitHub:** Crear un repositorio en GitHub y subir el código del proyecto. (Hecho)
2.  **Crear Backend en App Hosting:**
    *   Ir a la Consola de Firebase.
    *   Navegar a la sección "Build > App Hosting".
    *   Crear un nuevo "backend".
3.  **Conectar Repositorio de GitHub:**
    *   Autorizar la conexión con GitHub.
    *   Seleccionar el repositorio `danieljosegarridokantun-coder/quedatedeuna`.
4.  **Configurar y Desplegar:**
    *   Confirmar la configuración de despliegue (rama `main`, directorio raíz `/`).
    *   Iniciar el despliegue.
5.  **Verificar Despliegue:**
    *   Una vez completado, acceder a la URL proporcionada por Firebase para ver la aplicación en vivo.
