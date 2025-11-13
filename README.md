# Kimi K2 Frontend Reference SPA

This is a minimal Single Page Application (SPA) built with React and Vite, designed to interact with the `kimi-k2-sentinel` Cloudflare Worker. It demonstrates tokenless streaming via SSE, session management, and a basic chat interface.

## Features

-   **Tokenless Interaction:** Communicates with the `kimi-k2-sentinel` Worker without requiring any API keys or tokens.
-   **SSE Streaming:** Utilizes Server-Sent Events to receive real-time, tokenized responses from the Kimi K2 model.
-   **Session Management:** Uses `localStorage` to persist chat messages across browser sessions, providing basic continuity.
-   **Minimal UI:** A clean, terminal-style chat interface for asking prompts and displaying Kimi's responses.
-   **Vite Development Server:** Provides a fast development experience with hot module replacement.

## Project Structure

```
kimi-k2-frontend/
├─ public/
│  └─ index.html             # Main HTML file
├─ src/
│  ├─ App.jsx                # Main application component
│  ├─ components/
│  │  ├─ ChatWindow.jsx      # Displays chat messages
│  │  ├─ PromptInput.jsx     # Input field for user prompts
│  │  └─ StatusBar.jsx       # (Not implemented in this minimal version, but placeholder)
│  ├─ utils/
│  │  ├─ kimiApi.js          # API calls to the Cloudflare Worker
│  │  └─ sessionCache.js     # Manages session data in localStorage
│  └─ index.jsx              # React entry point
├─ package.json             # Project dependencies and scripts
├─ vite.config.js           # Vite configuration, including proxy setup
└─ README.md                # This file
```

## Setup and Running

### Prerequisites

-   Node.js (LTS version recommended)
-   `kimi-k2-sentinel` Cloudflare Worker deployed or running locally.
    *   If running locally, ensure it's accessible at `http://127.0.0.1:8787` (the default `wrangler dev` address).

### Installation

1.  **Navigate to the project directory:**
    ```bash
    cd kimi-k2-frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Development

To start the development server:

```bash
npm run dev
```

This will typically start the server at `http://localhost:5173` (or another available port). The `vite.config.js` includes a proxy that redirects requests to `/kimi` to your local `kimi-k2-sentinel` worker.

### Building for Production

To build the application for production:

```bash
npm run build
```

This will create a `dist` directory containing the optimized production build.

### Previewing Production Build

To preview the production build locally:

```bash
npm run preview
```

## Usage

1.  Ensure your `kimi-k2-sentinel` worker is running (either locally via `wrangler dev` or deployed).
2.  Start the frontend development server (`npm run dev`).
3.  Open your browser to the address provided by Vite (e.g., `http://localhost:5173`).
4.  Type a prompt into the input field and click "Send" to interact with Kimi K2.

## Customization

-   **Worker URL:** If your `kimi-k2-sentinel` worker is deployed, you might need to adjust the proxy target in `vite.config.js` or directly update the fetch calls in `src/utils/kimiApi.js` to point to your deployed worker's URL.
-   **Styling:** The current styling is minimal. You can enhance it by modifying the `style` props in the JSX components or by adding a dedicated CSS file.
-   **WebSocket:** The current `kimiApi.js` only uses SSE. You can extend it to include WebSocket functionality for full-duplex communication.
