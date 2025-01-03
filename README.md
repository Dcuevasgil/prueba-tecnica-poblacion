# Aplicación de Visualización de la Población Mundial

Este proyecto es una aplicación React diseñada para mostrar datos de población de varios continentes y países utilizando gráficos de barras interactivos. También proporciona opciones de filtrado basadas en rangos de población, ofreciendo una experiencia de usuario dinámica y visualmente atractiva.

---

## Tabla de Contenidos

1. [Características](#características)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Configuración e Instalación](#configuración-e-instalación)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Descripción de Componentes](#descripción-de-componentes)
6. [Integración con la API](#integración-con-la-api)
7. [Ejecución y Pruebas](#ejecución-y-pruebas)
8. [Mejoras Futuras](#mejoras-futuras)
9. [Contribuciones](#contribuciones)
10. [Licencia](#licencia)
11. [Contacto](#contacto)

---

## Características

- Muestra datos de población global y datos específicos de continentes.
- Gráficos de barras interactivos con visualización horizontal para mejor legibilidad.
- Filtrado dinámico de rangos de población para una visualización de datos más refinada.
- Barra de navegación responsiva con enlaces a vistas específicas de continentes.

---

## Tecnologías Utilizadas

- **React**: Para construir la interfaz de usuario.
- **Chart.js**: Para crear gráficos de barras.
- **Material-UI (MUI)**: Para estilos y navegación responsiva.
- **Axios**: Para realizar solicitudes a la API.
- **React Router**: Para gestionar la navegación entre páginas.
- **Vite**: Para compilaciones rápidas y desarrollo.

---

## Configuración e Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Dcuevasgil/prueba-tecnica-poblacion
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd prueba-tecnica-poblacion
   ```

3. Instala las dependencias de la carpeta node_modules:
   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre la aplicación en tu navegador en `http://localhost:5173` (puerto predeterminado de Vite).

---

## Estructura del Proyecto

```plaintext
datos-poblacionales
├── node_modules
├── public
├── src
│   ├── components
│   │   ├── BarChart.jsx
│   │   ├── Navigation.jsx
│   ├── pages
│   │   ├── ContinentView.jsx
│   │   ├── Home.jsx
│   ├── utils
│   │   ├── api.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
```

---

## Descripción de Componentes

### 1. `BarChart.jsx`
- **Descripción**: Renderiza un gráfico de barras horizontal utilizando `react-chartjs-2`.
- **Props**:
  - `labels`: Array con nombres de países.
  - `data`: Array con los valores de población correspondientes.

### 2. `Navigation.jsx`
- **Descripción**: Una barra de navegación responsiva construida con Material-UI.
- **Características**:
  - Enlaces a la vista global y vistas específicas de continentes.
  - Resalta el enlace activo.

### 3. `Home.jsx`
- **Descripción**: Muestra datos de población global agrupados por continentes.
- **Características**:
  - Filtro de población.
  - Gráfico de barras dinámico.

### 4. `ContinentView.jsx`
- **Descripción**: Muestra datos de población de países dentro de un continente específico.
- **Características**:
  - Filtro de población.
  - Gráfico de barras dinámico.

### 5. `api.js`
- **Descripción**: Contiene funciones utilitarias para obtener datos de la API REST Countries.
- **Funciones**:
  - `fetchAllCountries()`: Recupera los datos de todos los países.

---

## Integración con la API

La aplicación obtiene datos de la [API REST Countries](https://restcountries.com/). 
Ejemplo de uso:

```javascript
import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1';

export const fetchAllCountries = async () => {
  const response = await axios.get(`${BASE_URL}/all`);
  return response.data;
};
```

---

## Ejecución y Pruebas

1. **Ejecutar Localmente**:
   ```bash
   npm run dev
   ```
2. **Probar**:
   Usa el navegador para navegar por las diferentes vistas y probar las características de filtrado y navegación.

---

## Mejoras Futuras

- Agregar más filtros (por ejemplo, área, PIB).
- Incluir animaciones en los gráficos de barras.
- Mejorar la capacidad de respuesta móvil.
- Mostrar detalles adicionales al pasar el cursor (por ejemplo, bandera, capital).

---

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, envía un pull request o abre un issue para discutir los cambios propuestos.

---

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.

---

## Contacto

Si tienes preguntas o sugerencias, no dudes en ponerte en contacto:

- **Correo electrónico**: [dcuevasgil@gmail.com](mailto:dcuevasgil@gmail.com)
- **GitHub**: [https://github.com/your-repo](https://github.com/your-repo)