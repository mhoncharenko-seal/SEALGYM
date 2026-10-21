# Biblioteca Executive Training

49 ejercicios y variantes, con esquemas SVG originales generados localmente por `illustration(exercise, phase)`. Fase 0 = posición inicial; fase 1 = movimiento. No dependen de proveedores externos ni utilizan imágenes protegidas. Los esquemas representan el patrón y no sustituyen una demostración individual ni reproducen cada modelo comercial de máquina. Variantes de un mismo patrón comparten esquema; consultar sus instrucciones específicas. La plancha es isométrica y las dos fases conservan postura.

Cada registro contiene nombre, grupo principal, patrón, material, tres instrucciones, posición inicial, movimiento, respiración, errores, tres alternativas, dificultad y etiquetas de limitación. Las etiquetas son filtros conservadores, no un diagnóstico ni autorización médica. Ante lesión declarada, confirmar la selección con un profesional; no considerar una alternativa segura solo por compartir patrón.

## Programa

Calentamiento: cinco minutos de bicicleta/cinta y aproximaciones ligeras de los primeros ejercicios, no incluidas como series efectivas.

A: pecho 3, jalón 3, prensa 2, femoral 2, hombro 2, elevación lateral 2, curl 2, crunch 2. Total 18.

B: press inclinado 3, remo 3, curl femoral 2, extensión de piernas 2, elevación lateral 2, tríceps 2, curl 2, plancha 2, puente de glúteos 2. Total 20. Se reduce tríceps de 3 a 2 para limitar duración/fatiga.

C opcional: inclinado 2, remo apoyado 2, laterales 2, martillo 2, tríceps 2, prensa 2, puente de glúteos 2, crunch 1. Total 15. Volumen reducido respecto al borrador original; el puente aporta extensión de cadera.

Descansos: 120 s en compuestos principales, 75–90 s accesorios y 60 s abdomen. Una sesión requiere además tiempo real de ejecución, aproximación, cambios de estación y espera; no prometer duración exacta. Permitir alargar descanso si falta recuperación.

En semanas iniciales y fatiga, reducir series antes que descanso necesario. A/B tienen 6 series directas de pecho y espalda por semana: dosis inicial conservadora; no equivale a afirmar que ya sea el volumen máximo de hipertrofia. Los compuestos también estimulan brazos y hombros, pero el registro por grupo principal no duplica esas series.

## Sustitución

Tres opciones disponibles por registro. Deben filtrarse/ordenarse por material, limitaciones y dificultad. Sin historial específico de una variante no transferir kilos entre máquinas: comenzar con aproximación ligera y elegir una carga que deje repeticiones en reserva. Cambios de unilateral a bilateral o a peso corporal requieren revisar unidades y completar ambos lados donde se indica. Una alternativa puede cubrir el grupo con patrón no idéntico (ej. sentadilla para extensión de piernas); se muestra explícitamente el patrón/material.

## Interfaz del módulo

- `exercises`: objeto indexado por id.
- `plans`: objeto con A/B/C, arrays de `{id,sets,min,max,rest}`; rest en segundos.
- `illustration(exerciseOrId, phase=0)`: SVG inline accesible; phase 0 o 1.
- `timed`: true para planchas; `unit` s o reps.

Comprobación ejecutada: importación Node del módulo; 49 registros con tres alternativas e ilustración SVG generable. No equivale a revisión biomecánica presencial ni a prueba de cada equipo.
