# Lista de Tareas en React

## Descripción del proyecto

Aplicación web interactiva de gestión de tareas (To-Do List) desarrollada con React y Vite. Permite a los usuarios crear, gestionar y organizar sus tareas pendientes de manera eficiente con una interfaz  responsiva.

## Características

- **Agregar tareas**: crea nuevas tareas con título y descripción detallada.
- **Eliminar tareas**: borra las tareas que ya no necesites.
- **Marcar como completadas**: cambia el estado de las tareas entre pendiente y finalizada.
- **Persistencia de datos**: las tareas se guardan automáticamente en localStorage.
- **Validación de formularios**: validación en tiempo real del título y descripción de las tareas.
- **Diseño responsivo**: interfaz adaptable a diferentes tamaños de pantalla.

## Tecnologías utilizadas

- **React 19.2.0** - biblioteca de JavaScript para construir interfaces de usuario.
- **Vite 7.2.4** - herramienta de construcción y servidor de desarrollo.
- **CSS3** - estilos personalizados para la interfaz.

## Instalación

1. Clona el repositorio:
```bash
git clone git@github.com:hannapoli/todo-list.git
cd todo-list
```

2. Instala las dependencias:
```bash
yarn install
```

3. Inicia el servidor de desarrollo:
```bash
yarn dev
```

4. Abre tu navegador en `http://localhost:5173`

## Scripts disponibles

- `yarn dev` - Inicia el servidor de desarrollo
- `yarn build` - Construye la aplicación para producción
- `yarn preview` - Previsualiza la versión de producción
- `yarn lint` - Ejecuta el linter para verificar el código

## Estructura del proyecto

```
src/
├── components/       # Componentes de React
│   ├── TodoList.jsx  # Componente principal de la lista
│   ├── TaskForm.jsx  # Formulario para agregar tareas
│   ├── TaskList.jsx  # Lista de tareas
│   ├── Task.jsx      # Componente individual de tarea
│   ├── Header.jsx    # Encabezado de la aplicación
│   ├── Footer.jsx    # Pie de página
│   └── Error.jsx     # Componente para mostrar errores
├── hooks/           # Custom hooks
│   ├── useTodoList.js     # Hook principal para gestión de tareas
│   ├── useTodoReducer.js  # Hook del reducer (deprecated)
│   └── useValidate.js     # Hook para validación de formularios
├── reducers/        # Reducers para gestión de estado
│   └── todoReducer.js     # Reducer de tareas
├── App.jsx          # Componente principal
└── main.jsx         # Punto de entrada de la aplicación
```

## Funcionalidades principales

### Validación de tareas
- **Título**: solo acepta letras (incluyendo acentos) y espacios.
- **Descripción**: debe tener entre 10 y 200 caracteres.

### Gestión de estado
- Utiliza `useReducer` para gestionar el estado de las tareas.
- Implementa acciones para agregar, eliminar y cambiar el estado de tareas.

### Almacenamiento local
- Las tareas se guardan automáticamente en localStorage.
- Se recuperan al cargar la aplicación.

## Uso

1. **Agregar una tarea**: rellena el formulario con el título y descripción, luego haz clic en "Añadir tarea".
2. **Marcar como completada**: haz clic en el botón "Pendiente" para cambiar el estado a "Finalizada".
3. **Eliminar una tarea**: haz clic en el botón "Eliminar" para borrar la tarea.