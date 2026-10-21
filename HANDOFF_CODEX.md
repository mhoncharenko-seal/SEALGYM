# Continuidad SealGym Executive
Proyecto nuevo, estático y sin dependencias runtime. La rama de trabajo GitHub es `codex/executive-training` en `mhoncharenko-seal/SEALGYM`; no reemplazar main ni el proyecto previo sin revisar.

## Implementado
Dashboard táctico, A/B/C, adaptación 1–2, Express, descarga elegible, RIR, doble progresión, temporizador absoluto persistido, calentamiento y plancha cronometrada, alternativas con imágenes SVG propias, historial de series, IndexedDB, medidas/gráficos/fotos, JSON, menú de siete días con raciones/macros/fibra, cambios/favoritos/compra, horarios y exportación ICS, PWA estática offline.

## Archivos
`dist/app.js`: vistas/eventos. `core.js`: entrenamiento, persistencia y temporizador. `exercises.js`: 49 ejercicios, ilustración y planes. `nutrition.js`: alimentos, comidas y cálculos. `sw.js`: caché local. Documentación en docs/.

## Verificación ejecutada
`npm test`: 19 pruebas superadas. `node --check dist/app.js`: correcto. Ver docs/TESTS.md. QA visual bloqueada por política del navegador del entorno, no por un error observado de la app.

## Siguiente trabajo concreto
1. Ejecutar `npm test` y servir `dist/` por HTTPS/local HTTP.
2. Completar QA manual en iPhone: iniciar A, peso/reps, descanso pausa/+30/saltar, alternativa, recarga, finalizar; repetir B/C.
3. Confirmar IndexedDB, exportar/importar JSON, foto, service worker, offline e instalación.
4. Revisar accesibilidad visual y SVG de cada variante con entrenador. Los esquemas representan patrones compartidos, no cada máquina exacta.
5. Probar ICS en Apple Calendar. No prometer push con app cerrada: requiere servicio adicional; actualmente el calendario hace ese trabajo.
6. Mejoras futuras: edición granular de alimentos por alergia, seguimiento más preciso de micronutrientes, sugerencias de volumen adaptadas al historial. Hoy hay exclusiones explícitas de ejercicios y campo de preferencias alimentarias, pero no interpretación clínica automática de texto.

## Despliegue
Subir contenido de dist/ a public_html (Hostinger Premium estático compatible). No npm en servidor. Sources en Sites conservan `.openai/hosting.json`; no cambiar el project_id. La URL provisional se confirma mediante herramientas de despliegue, no por existencia del slug.
