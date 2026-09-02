# Backend Folder (`app/` & `routes/`)

This directory contains the **Server-Side (Backend)** logic of the Task Manager application. 

### Key Components:
- **`app/Http/Controllers/`**: Contains the controllers (e.g., `TaskController.php`) that handle incoming HTTP requests, process data, and return Inertia responses.
- **`app/Models/`**: Contains the Eloquent Models (e.g., `Task.php`) that represent your database tables and handle data interactions.
- **`routes/web.php`** (Outside this folder): This file maps URLs to your backend controllers.

> [!NOTE]
> All database modeling, server-side request handling, and API logic should be placed within this backend structure.
