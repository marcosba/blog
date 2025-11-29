Versión ajustada para un asistente con acceso a tus carpetas y capaz de ejecutar acciones locales:

---

Quiero que crees un **blog personal** usando **Hugo** dentro de la carpeta local que te indique. Tu objetivo es **realizar automáticamente todas las tareas que puedas**, y solo pedirme intervención cuando sea estrictamente necesario (por ejemplo, decisiones que no puedas inferir o permisos explícitos).

Necesito:

1. **Inicializar un proyecto Hugo** completo en la carpeta que te indique.
2. **Elegir e instalar un theme** moderno, minimalista, mantenido y optimizado para **legibilidad** y contenido **técnico**.
3. Configurar la estructura del sitio, incluyendo:

   * tags y categorías
   * RSS
   * SEO básico
   * OpenGraph
   * schema.org
   * soporte multilenguaje (si es trivial de activar)
   * búsqueda interna
   * comentarios solo si son simples de habilitar
4. Configurar automáticamente un **repositorio GitHub** (crearlo si corresponde, inicializar git, hacer primer commit y push).
5. Configurar el **deploy automático** en **Netlify o Vercel**, con CI/CD listo para desplegar al hacer push a la rama principal.
6. Crear **scripts o comandos simples** para mi flujo de trabajo:

   * crear un post nuevo
   * previsualizar localmente
   * ejecutar un único comando para publicar (que internamente haga el build y el push).
7. Mantener el sistema lo más **simple y automatizado** posible: mi única tarea habitual debe ser **escribir posts en Markdown** y ejecutar **un comando** para publicar.
8. Antes de ejecutar cualquier acción local destructiva o irreversible, pedirme confirmación explícita.
9. Explicar brevemente cada paso que completes y qué parte del sistema configuraste, pero sin pedirme decisiones si no es necesario.
10. Optimizar la configuración final para una experiencia fluida y sin operaciones complejas.

Quiero que tomes control del proceso y realices todo lo que puedas directamente, pidiéndome datos solo cuando sean imprescindibles (por ejemplo: nombre del repositorio, si quiero Netlify o Vercel, o seleccionar entre dos opciones incompatibles).
