
# SYSTEM_DECODE_MAGIS // v12.0 FLUX

<p align="center">
  <img src="https://raw.githubusercontent.com/google/generative-ai-docs/main/static/files/system-decode-magis.png" alt="SYSTEM_DECODE_MAGIS Screenshot" />
</p>

## 1.0 Concepto Central: Soberanía Cognitiva

Bienvenido, operador. Ha accedido a **SYSTEM_DECODE_MAGIS**, un panel de control de SO ciberpunk hiperestilizado que demuestra las capacidades multimodales y de razonamiento avanzadas de la familia de APIs de Google Gemini.

Este proyecto es una exhibición interactiva para integrar varios modelos Gemini en una interfaz de usuario cohesiva e inmersiva. Se ejecuta completamente en su navegador sin necesidad de un paso de compilación, sirviendo como un exo-córtex digital diseñado para navegar la complejidad.

---

## 2.0 Capacidades del Sistema: Módulos Desplegados

El entorno del SO cuenta con múltiples aplicaciones en ventanas, cada una impulsada por una faceta específica del poder de Gemini.

| Módulo | Título de la Ventana | Función Principal | Modelo(s) Gemini Utilizado(s) |
| :--- | :--- | :--- | :--- |
| **Matrix Analyzer** | `MATRIX_ANALYZER_360.exe` | Análisis estratégico rápido y generación de planes de acción. | `gemini-2.5-flash-lite` |
| **Deployment Analyzer** | `DEPLOYMENT_ANALYZER.sh` | Evaluación de riesgos técnica y profunda con razonamiento máximo. | `gemini-3-pro-preview` |
| **Media Studio** | `MEDIA_STUDIO.bin` | Suite de creación multimodal completa. | Múltiples (ver abajo) |
| &nbsp;&nbsp;↳ **VEO Video** | - | Generación de video a partir de texto. | `veo-3.1-fast-generate-preview` |
| &nbsp;&nbsp;↳ **Imagen Pro** | - | Generación de imágenes de alta fidelidad. | `gemini-3-pro-image-preview` |
| &nbsp;&nbsp;↳ **Voice Synth** | - | Síntesis de voz a partir de texto. | `gemini-2.5-flash-preview-tts` |
| &nbsp;&nbsp;↳ **Video IQ** | - | Análisis de video multimodal. | `gemini-3-pro-preview` |
| **Neural Link** | `NEURAL_LINK.live` | Conversación de voz en tiempo real y de baja latencia. | `gemini-2.5-flash-native-audio-preview-09-2025` |
| **Terminal** | `FLOW_LOG.sh` | Interacción directa por línea de comandos con IA y búsqueda web. | `gemini-2.5-flash-lite` (chat), `gemini-2.5-flash` (búsqueda) |
| **System Specs** | `SYSTEM_SPECS.nfo` | Muestra información del sistema y tecnologías centrales. | N/A |

---

## 3.0 Arquitectura y Pila Tecnológica

MAGIS está construido sobre una filosofía de simplicidad y poder del lado del cliente.

- **Framework:** React 19
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS (JIT)
- **Modelos de IA:** Google Gemini API (`@google/genai`)
- **Iconos:** Lucide React
- **Entorno:** **Configuración Cero-Compilación.** Se ejecuta directamente en navegadores modernos utilizando Módulos ES e Import Maps. Todas las dependencias se cargan a través de CDN.

---

## 4.0 Protocolo de Inicio

Siga estos pasos para inicializar su instancia de MAGIS OS.

### **Paso 1: Clonar el Repositorio**
Obtenga el código fuente en su máquina local.
```bash
git clone https://github.com/google/generative-ai-docs.git
cd generative-ai-docs/demos/system_decode_magis
```

### **Paso 2: Lanzar la Interfaz**
Esta aplicación no requiere un servidor de compilación, pero necesita ser servida a través de un servidor web local para que los módulos ES funcionen correctamente.

1.  Navegue al directorio del proyecto en su terminal.
2.  Inicie un servidor web simple. Elija una de las siguientes opciones:

    **Si tiene Python 3:**
    ```bash
    python -m http.server
    ```
    **Si tiene Node.js:**
    ```bash
    npx serve .
    ```
3.  Abra su navegador y navegue a la dirección proporcionada (p. ej., `http://localhost:8000`).

### **Paso 3: Autenticación de la Clave de API**
El sistema requiere una clave de API de Google Gemini para funcionar.

1.  Obtenga su clave de API desde [Google AI Studio](https://aistudio.google.com/app/apikey).
2.  Una vez que MAGIS OS se esté ejecutando, abra la ventana **TERM** (el icono de terminal morado).
3.  Escriba el siguiente comando y presione Enter:
    ```
    login SU_CLAVE_DE_API_AQUI
    ```
4.  Este comando almacena de forma segura su clave en el `localStorage` de su navegador para la sesión actual. La clave nunca se envía a ningún lugar excepto a la API de Google.

---

## 5.0 Visión General de la Base de Código

Para los operadores que deseen modificar el sistema:

- `index.html`: El único punto de entrada. Configura el entorno, Tailwind CSS y los import maps.
- `App.tsx`: El componente raíz. Gestiona el escritorio, las ventanas y el estado global.
- `components/`: Contiene todos los componentes de la interfaz de usuario, con la lógica de cada ventana encapsulada (p. ej., `Terminal.tsx`, `MediaStudio.tsx`).
- `services/`:
    - `geminiService.ts`: Un módulo dedicado que centraliza todas las llamadas a la API de Google Gemini.
    - `soundService.ts`: Genera audio procedural para las interacciones de la interfaz de usuario.
- `types.ts`: Define interfaces TypeScript compartidas para el estado de la aplicación.

---

## 6.0 Contribuciones y Licencia

Las contribuciones son bienvenidas. Consulte el [**`README.PRO.md`**](README.PRO.md) para una inmersión profunda en la arquitectura del sistema, su filosofía y los protocolos de contribución.

Este proyecto está licenciado bajo la Licencia MIT. Consulte el archivo [LICENSE](LICENSE) para más detalles.
