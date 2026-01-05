
# SYSTEM_DECODE_MAGIS // v12.0 FLUX

Welcome, operator. You've accessed SYSTEM_DECODE_MAGIS, a hyper-stylized, cyberpunk OS dashboard demonstrating the advanced multimodal and reasoning capabilities of the Google Gemini API family.

![SYSTEM_DECODE_MAGIS Screenshot](https://raw.githubusercontent.com/google/generative-ai-docs/main/static/files/system-decode-magis.png)

## Core Mandate

This project serves as an interactive showcase for integrating various Gemini models into a cohesive, immersive user interface. It moves beyond simple chat prompts to create a functional, thematic desktop environment where each application is powered by a specific facet of Gemini's power.

---

## Deployed Modules & Neural Cores

The OS environment features multiple windows, each acting as a standalone application powered by Gemini.

*   **CHALAMANDRA_CORE:** The central hub, providing access to all other system modules.
*   **MATRIX_ANALYZER:** A strategic planning interface using `gemini-2.5-flash-lite` for rapid analysis and action plan generation based on user-defined metrics.
*   **DEPLOYMENT_ANALYZER:** A deep-dive diagnostic tool that leverages the maximum reasoning capacity of `gemini-3-pro-preview` (with a 32k token thinking budget) to perform complex risk assessments.
*   **MEDIA_STUDIO:** A complete multimodal creation suite:
    *   **VEO VIDEO:** Generates 720p video from text prompts using the `veo-3.1-fast-generate-preview` model.
    *   **IMAGEN PRO:** Creates high-fidelity images up to 4K using `gemini-3-pro-image-preview`.
    *   **VOICE SYNTH:** Synthesizes speech with `gemini-2.5-flash-preview-tts`.
    *   **VIDEO IQ:** Analyzes video files with the multimodal understanding of `gemini-3-pro-preview`.
*   **NEURAL_LINK:** A real-time, low-latency voice conversation module using the `gemini-2.5-flash-native-audio-preview-09-2025` model via the Live API.
*   **FLOW_LOG (Terminal):** A command-line interface for direct interaction with `gemini-2.5-flash-lite`, including Google Search grounding for up-to-date information.
*   **SYSTEM_SPECS:** An 'About' window detailing the models and technologies powering the OS.

---

## System Architecture

*   **Framework:** React 19 (via CDN importmap)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (JIT via CDN)
*   **AI:** Google Gemini API (`@google/genai`)
*   **Icons:** Lucide React
*   **Environment:** No build step required; runs directly in modern browsers that support import maps.

---

## Access & Installation Protocol

This project is designed to run directly in the browser without a package manager or build process.

### Step 1: Clone Repository

Clone this repository to your local machine.

```bash
git clone https://github.com/your-username/system-decode-magis.git
cd system-decode-magis
```

### Step 2: API Key Configuration

The system requires a Google Gemini API key to function. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

For security, the application is designed to use an environment variable. However, for ease of local testing, you can also set it via the in-app terminal.

1.  **Primary Method (Recommended):** Set up a local `.env` file (this is gitignored) with your key. You will need a local server that can inject this variable.
2.  **Local Testing Method:**
    *   Launch the application.
    *   Open the **TERM** window.
    *   Type the following command and press Enter:
        ```
        login YOUR_API_KEY_HERE
        ```
    *   This will store the key in your browser's `localStorage` for the current session.

### Step 3: Launch Interface

Since there's no build server, you need to serve the files using a simple local web server.

If you have Python 3 installed:
```bash
python -m http.server
```

If you have Node.js installed, you can use `serve`:
```bash
npx serve .
```

Navigate to `http://localhost:8000` (or the port specified by your server) in your browser.

---

## License

This project is distributed under the MIT License. See the `LICENSE` file for more information.
