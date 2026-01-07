# SYSTEM_DECODE_MAGIS // v12.0 FLUX

## Overview

This project is a React-based application featuring a Cyberpunk interface. It includes features like Matrix analysis, Deployment analysis, Media Studio, and a Terminal interface.

## Structure

*   `src/`: Contains all source code.
    *   `components/`: React components.
    *   `services/`: Service logic (e.g., API calls, sound).
    *   `styles/`: Global styles (Tailwind CSS).
    *   `App.tsx`: Main application component.
    *   `index.tsx`: Entry point for the full application.
    *   `demo.tsx`: Entry point for the demo version.
*   `index.html`: Main entry HTML.
*   `demo.html`: Demo entry HTML.

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run Development Server:**
    ```bash
    npm run dev
    ```

3.  **Build for Production:**
    ```bash
    npm run build
    ```

## Environment Variables

Create a `.env` file in the root directory and add your keys:

```
GEMINI_API_KEY=your_api_key_here
```

## Deployment

The project is ready for deployment on Vercel.

1.  Push to GitHub.
2.  Import the project in Vercel.
3.  Set the Framework Preset to **Vite**.
4.  Add the `GEMINI_API_KEY` environment variable.

## Entry Points

*   **Full App:** Accessed via `/` (uses `index.html`)
*   **Demo Mode:** Accessed via `/demo.html`
