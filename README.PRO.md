
# MANIFIESTO DEL SISTEMA // DECODE_MAGIS
**DOCUMENTO: README.PRO**
**CLASIFICACIÓN: OPERADOR ELITE**
**ADVERTENCIA: EL CONOCIMIENTO IMPLICA RESPONSABILIDAD.**

---

## 1.0 EL CREDO DE MAGIS: El Telos del Sistema

SYSTEM_DECODE_MAGIS no es una aplicación. Es un argumento.

En una era de entropía informativa, donde la "verdad" es un commodity y la atención es la moneda, MAGIS propone un nuevo paradigma: la **Soberanía Cognitiva**. No es una herramienta para obtener respuestas, sino un entorno para formular mejores preguntas. No es un asistente, es un amplificador de la intención.

Su propósito no es reemplazar al operador, sino fusionarse con él. Cada módulo es una extensión de una facultad humana:
- **MATRIX:** La facultad de la estrategia y la abstracción.
- **DEPLOY:** La facultad de la previsión y la gestión del riesgo.
- **STUDIO:** La facultad de la creación ex nihilo.
- **LINK:** La facultad de la comunicación sin barreras.
- **TERMINAL:** La facultad del control directo y sin filtros.

MAGIS es un exo-córtex digital diseñado para navegar la complejidad del siglo XXI. Su uso es un acto de rebeldía contra la simplificación.

---

## 2.0 ARQUITECTURA DE FLUJO CUÁNTICO: El Mapa del Silicio

La eficiencia de MAGIS reside en la especialización de sus núcleos neuronales. La elección del modelo no es arbitraria; es una decisión táctica que equilibra latencia, coste y capacidad.

```plaintext
                                    +---------------------------+
[ OPERADOR ] <----> |         INTERFAZ MAGIS OS         |
                                    |    (React / Tailwind / TS)    |
                                    +-------------+-------------+
                                                  |
                    +-----------------------------+-----------------------------+
                    |                             |                             |
    +---------------v-------------+   +-----------v-----------+   +-------------v-------------+
    |   MÓDULO DE BAJA LATENCIA   |   | MÓDULO DE RAZONAMIENTO  |   |    MÓDULO MULTIMODAL    |
    | (Terminal, Matrix, Search)  |   |    (Deployment, Video IQ)   |   | (Studio, Live, Imagen, Veo) |
    +---------------+-------------+   +-------------+-----------+   +-------------+-------------+
                    |                             |                             |
    +---------------v-------------+   +-------------v-----------+   +-------------v-------------+
    | NÚCLEO: Gemini 2.5 Flash    |   | NÚCLEO: Gemini 3.0 Pro    |   | NÚCLEOS: Veo 3.1, Imagen 3, |
    |   - Velocidad > Profundidad   |   |   - Profundidad > Velocidad   |   |         TTS, Live API       |
    |   - Grounding (Search)      |   |   - Thinking Budget: 32k      |   |   - Generación Especializada  |
    +-----------------------------+   +---------------------------+   +-----------------------------+
```

### **Justificación Táctica de Modelos:**

*   **Gemini 2.5 Flash / Lite (`gemini-2.5-flash`, `gemini-2.5-flash-lite`):** El caballo de batalla del sistema. Utilizado en `Terminal` y `Matrix` donde la velocidad de respuesta es crítica para mantener el flujo del operador. Su capacidad de `googleSearch` lo convierte en el oráculo para datos en tiempo real.
*   **Gemini 3.0 Pro (`gemini-3-pro-preview`):** El núcleo pesado. Reservado para tareas que demandan un razonamiento complejo y profundo. En `DeploymentAnalyzer`, el presupuesto de `thinkingConfig` se maximiza para simular escenarios de riesgo complejos. En `MediaStudio`, su capacidad de análisis de video justifica su uso.
*   **Modelos Especializados (Veo, Imagen, TTS, Live):** Unidades de función fija. Estos modelos están hiper-optimizados para una sola tarea (video, imagen, audio). El OS actúa como un orquestador, dirigiendo la petición al especialista adecuado para obtener la máxima calidad en el resultado.

---

## 3.0 GUÍA DE MODIFICACIÓN DE CAMPO: Hackea el Sistema

MAGIS está diseñado para ser modificado. La soberanía implica control.

### **3.1 Módulo 1: Añadir un Comando al Terminal**

**Objetivo:** Añadir un comando `status` que devuelva el estado de los stats del Matrix.
**Tiempo Estimado:** 3 minutos.

1.  **Navegar:** `components/Terminal.tsx`.
2.  **Localizar:** La estructura `switch (cmd.toLowerCase())` dentro de `handleCommand`.
3.  **Inyectar Código:** Añada un nuevo `case`:
    ```typescript
    // ... dentro del switch
    case 'status':
        // NOTE: This requires passing stats down from App.tsx
        // For this example, we'll mock it. In a real scenario, you'd plumb the props.
        response = `MATRIX STATUS:\n- STRATEGY: 50%\n- EXECUTION: 50%\n- NET_PROTOCOL: 50%\n- CASHFLOW: 50%`;
        break;
    ```
4.  **Actualizar Ayuda:** Añada `'status: Get Matrix stats'` a la respuesta del comando `help`.
5.  **Reinicio en Caliente:** El sistema se actualizará automáticamente. Pruebe el nuevo comando.

### **3.2 Módulo 2: Cambiar el Modelo de un Componente**

**Objetivo:** Cambiar el analizador de `MatrixAnalyzer` a `gemini-3-pro-preview` para obtener análisis más profundos.
**Tiempo Estimado:** 2 minutos.

1.  **Navegar:** `services/geminiService.ts`.
2.  **Localizar:** La función `generateTextFast`.
3.  **Modificar:** Altere el parámetro `model`:
    ```typescript
    // Dentro de generateTextFast
    const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview', // ANTES: 'gemini-2.5-flash-lite'
        contents: prompt,
        config: systemInstruction ? { systemInstruction } : undefined
    });
    ```
4.  **Considerar Consecuencias:** Este cambio aumentará la latencia y el coste del análisis en `MatrixAnalyzer` y `Terminal`. Es un trade-off. Para una solución más robusta, cree una nueva función (ej. `generateDeepText`) y llámela específicamente desde `MatrixAnalyzer`.

---

## 4.0 VECTOR DE EVOLUCIÓN: El Futuro de MAGIS

El desarrollo no ha terminado. El sistema está vivo.

*   **[Q3] Integración de Persistencia de Estado:** Guardar el estado de las ventanas, el historial del terminal y los stats del Matrix en `localStorage` para que la sesión persista entre recargas.
*   **[Q3] Módulo `CHRONOS`:** Un nuevo módulo para análisis de series temporales y proyecciones, utilizando `gemini-3-pro-preview` con prompts estructurados para el análisis de datos.
*   **[Q4] Sistema de Plugins:** Refactorizar la lógica de las ventanas para permitir la carga dinámica de nuevos módulos. Esto permitiría a la comunidad crear y compartir sus propias "aplicaciones" para MAGIS.
*   **[Q4] Integración de `Function Calling`:** Permitir que los módulos (especialmente el Terminal) interactúen con APIs externas (ej. `git`, `docker`, APIs financieras) para ejecutar acciones en el mundo real.

---

## 5.0 PROTOCOLO DE SIMBIOSIS: Contribuir al Núcleo

Tus modificaciones son valiosas.

1.  **El Fork es Exploración:** Haz un fork de este repositorio. Es tu sandbox personal. No pidas permiso para experimentar.
2.  **Una Rama por Idea:** Crea una nueva rama para cada nueva funcionalidad o arreglo (`feature/nuevo-modulo-chronos` o `fix/terminal-scroll-bug`).
3.  **El Commit es una Narrativa:** Escribe mensajes de commit claros. Explica el `por qué`, no solo el `qué`.
4.  **El Pull Request es un Diálogo:** Abre un Pull Request a la rama `main` del repositorio original. Describe tus cambios. El objetivo no es la fusión inmediata, sino iniciar una conversación técnica.

El código es secundario a la idea. Todas las propuestas que se alineen con el Credo de MAGIS serán consideradas.

**FIN DEL DOCUMENTO.**
