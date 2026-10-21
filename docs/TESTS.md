# Verificación / 21 octubre 2026

`node --test tests/*.test.js`: 19/19 pruebas superadas, sin dependencias externas.
- Sesiones A, B, C completas mediante motor: contadores, fin, peso/repeticiones.
- Temporizador con reloj inyectado: pausa/reanudar/salto temporal largo.
- Serialización/restauración de sesión y fecha límite.
- Alternancia A/B sin interferencia de C; Express y adaptación/descarga/exclusiones.
- Progresión condicionada a RIR/técnica; historial separado por variante.
- 49 ejercicios con tres alternativas y SVG generable en ambas fases.
- Sustitución conserva series y permite historial de variante.
- Siete menús personalizados: sumas de macros, sustituciones y compra coherentes.
- Perfiles nutricionales inválidos y alimentos excluidos.
- Rechazo básico de importación inválida.
- Manifest, iconos y rutas cacheadas existen.
- Ausencia de recursos de terceros y generación de las seis plantillas reales con entorno DOM mínimo de prueba.

La primera ejecución detectó un campo `group: undefined` en registros serializados. Corregido a null; las posteriores ejecuciones completas superan todas las pruebas.

## Pendiente, no afirmado como probado
El navegador remoto rechazó la URL de QA interna por política. No se intentó eludir la restricción.
- Validación visual en móvil/iPhone real, VoiceOver y contraste con herramientas.
- Clics de entrenamiento completo en navegador.
- Escritura y recuperación real IndexedDB en Safari.
- Instalación PWA, service worker y navegación offline real.
- Sonido/vibración y notificaciones con bloqueo de pantalla (no garantizadas por diseño).
- Importación de ICS en Calendario, alertas y zonas horarias del dispositivo.
- Importación/exportación real desde selector de archivos y foto.

Las pruebas de serialización, motor y existencia de archivos no equivalen a estas comprobaciones.
