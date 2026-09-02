# Frontend Folder (`resources/`)

This directory contains the **Client-Side (Frontend)** logic of the Task Manager application, built with React and styled with Vanilla CSS.

### Key Components:
- **`js/Pages/`**: Contains your React page components (e.g., `Tasks/Index.jsx`). These are rendered directly by the backend controllers via Inertia.js.
- **`js/app.jsx`**: The main entry point that initializes the React and Inertia application.
- **`css/app.css`**: The main stylesheet containing the premium vanilla CSS design system and aesthetics.
- **`views/app.blade.php`**: The root HTML template that loads the compiled Vite assets and mounts the React app.

> [!TIP]
> When you need to create a new UI component, page, or style, it goes inside this `resources/` directory.
