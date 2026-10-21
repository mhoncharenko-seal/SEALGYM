# SEALGYM / Executive Training
Primera versión funcional estática, mobile-first, en español. Entrenamiento full body A/B + C opcional, programa de 12 semanas, Express, historial, temporizador persistido con fecha límite, 49 ejercicios ilustrados, menú semanal, raciones y compras, gráficos y fotos locales.

## Ejecutar y desplegar
No hay dependencias de producción ni compilación. Publicar el **contenido de `dist/`** en la raíz de cualquier alojamiento estático HTTPS. `index.html` de la raíz del repositorio, si existe, redirige a `dist/` para facilitar GitHub Pages. Las rutas de recursos son relativas.

Para comprobaciones: Node 20+ y `npm test`. No se necesita Node en el servidor. Para desarrollo estático puede usarse un servidor HTTP local; no abrir mediante `file://` (módulos y service worker lo requieren).

## Uso
1. Ajustes: perfil opcional, tolerancias, material y exclusiones.
2. Empezar entrenamiento: energía, sesión y calentamiento.
3. Introducir kg/reps; opcionalmente RIR y técnica; completar serie inicia descanso.
4. Pausar, continuar, +30 segundos o saltar descanso. Pasar ejercicio al acabar sus series.
5. Máquina ocupada: tres alternativas locales, filtradas por material y exclusiones. Sin historia de esa variante, no se transfiere carga.
6. Nutrición: siete días, cambios y raciones, favoritos, lista de compra y horarios.
7. Exportar JSON periódicamente; el historial no se sincroniza entre dispositivos.

## Datos y privacidad
IndexedDB guarda perfil, sesiones, fotos y recetas en el navegador. No autenticación propia, analítica, IA remota ni envío de datos de salud. El alojamiento Sites provisional tiene su propia puerta de acceso privada. Borrar datos del navegador puede perder todo: exportar copia. Las fotos sí se incluyen en la copia.

## PWA y avisos
Manifest + service worker cachean todos los recursos esenciales. Instalar en iPhone desde Safari / Compartir / Añadir a pantalla de inicio. Primera carga online necesaria. El reloj usa fecha límite absoluta: al volver desde segundo plano se recalcula correctamente, pero el sistema puede suspender sonido/notificación mientras la pantalla está bloqueada.
Avisos de comida: horario editable, notificación con permiso mientras la app está activa, y exportación ICS con 84 repeticiones diarias. Importar ICS en Calendario y revisar alertas permite delegar el recordatorio al sistema operativo. No se promete una alarma web garantizada cuando la app está cerrada.

## Verificación
19 pruebas Node superadas (sesiones A/B/C, reloj, recuperación serializada, progresión, alternativas, nutrición, recursos y plantillas). `docs/TESTS.md` distingue pruebas unitarias de comprobaciones pendientes en dispositivo. La herramienta de navegador bloqueó la URL interna por política; no se simula QA visual ni prueba real de instalación/offline/IndexedDB en iPhone.

## Documentación
- `docs/EVIDENCE.md`: evidencia, decisiones y límites.
- `docs/EXERCISES.md`: ejercicios y volumen.
- `docs/NUTRITION.md`: cálculos, cantidades y limitaciones.
- `HANDOFF_CODEX.md`: continuidad y comprobaciones pendientes.

Sin afiliación con fuerzas armadas estadounidenses. Estética táctica original; no emblemas oficiales.
