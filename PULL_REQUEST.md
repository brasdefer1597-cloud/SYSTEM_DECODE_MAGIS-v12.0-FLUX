# Pull Request: Chalamandra Magistral DecoX Architecture Implementation

## 📝 Descripción
Este Pull Request transforma el repositorio en el sistema **Chalamandra Magistral DecoX**, implementando una arquitectura modular, escalable y "viva". Se ha reestructurado el código base para seguir los principios de SRAP (Symmetry, Resilience, Adaptability, Performance).

## 🏗️ Cambios Realizados

### 1. Arquitectura Modular (The Chalamandra Way)
Se ha migrado de una estructura plana a una basada en módulos temáticos:
- **CHOLA** (`/src/modules/Chola`): Infraestructura y Terminal.
- **FRESA** (`/src/modules/Fresa`): Media Studio y UX Visual.
- **MALANDRA** (`/src/modules/Malandra`): Lógica de Negocio y Análisis (Matrix/Deployment).
- **BALLERINA** (`/src/modules/Ballerina`): Componentes UI y Sistema de Ventanas.
- **BALLET** (`/src/modules/Ballet`): Core de la aplicación (aunque `App.tsx` permanece en `src/` por convención de Vite, su lógica consume estos módulos).
- **FOLKLÓRICO** (`/src/modules/Folklorico`): Comunicación y Voz.

### 2. Configuración y Limpieza
- **.gitignore**: Actualizado para excluir archivos de sistema, logs, cobertura y dependencias de Vercel.
- **Vite Config**: Optimización de build mediante `manualChunks` para separar dependencias del core (`@google/genai`, `react`).
- **ESLint**: Configuración robusta para mantener la calidad del código.

### 3. Documentación
- **README.md**: Reescrito completamente con narrativa Chalamandra, instrucciones de despliegue y diagramas Mermaid.
- **Diagramas**: Flujo de datos y estructura modular visualizados.

## ✅ Verificación

- [x] **Instalación de Dependencias**: `npm install` exitoso.
- [x] **Linting**: `eslint` y `tsc` pasan sin errores.
- [x] **Build**: `vite build` genera los assets correctamente en `dist/` con chunks optimizados.
- [x] **Estructura**: Verificada la integridad de los imports tras la migración.

## 🚀 Próximos Pasos (Pendiente de Input de Usuario)
Para finalizar la personalización visual ("Fresa"), se requiere:
- [ ] Paleta de colores Hex específica (si difiere del Neon Gold actual).
- [ ] Assets gráficos (SVGs, Logos) para los iconos de escritorio.
- [ ] Configuración de prompts específicos para la personalidad de la IA en `geminiService`.

## 🛡️ Seguridad y Performance
- **Seguridad**: No se han commiteado secretos (`.env` en gitignore). Dependencias auditadas.
- **Performance**: Code splitting implementado.

---
**Estado**: Listo para Merge y Despliegue en Vercel.
**Autor**: Jules (AI Engineer)
