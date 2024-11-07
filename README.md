# Rick and Morty  

Este proyecto consiste en una aplicación web interactiva que permite a los usuarios explorar el universo de **Rick y Morty** a través de tres componentes principales: **Personajes**, **Locaciones**, y **Episodios**. Cada componente presenta una interfaz amigable donde se muestran imágenes y datos relevantes, facilitando la navegación y la interacción.

## Características Principales

1. **Visualización de Datos**:
   - **Ventana de Personajes**: Muestra una lista de personajes con tresa datos.
   - **Ventana de Locaciones**: Presenta las locaciones.
   - **Ventana de Episodios**: Enumera los episodios con su respectiva informacion.

2. **Paginación**:
   - Se implementa paginación para manejar grandes volúmenes de datos, permitiendo a los usuarios navegar a través de múltiples páginas de resultados sin sobrecargar la interfaz.

3. **Gestión de Favoritos**:
   - Los usuarios pueden seleccionar personajes como favoritos. Esta selección se mantiene a lo largo del flujo de la aplicación utilizando **Zustand** para el manejo del estado.
   - Además, se proporciona la opción de guardar todos los favoritos en una base de datos (SQL o NoSQL).

4. **Backend en Node.js**:
   - Se ha desarrollado un backend utilizando Node.js que se conecta a una base de datos para almacenar los favoritos seleccionados por los usuarios. Esto permite una gestión eficiente y segura de los datos.

5. **Detalles Adicionales**:
   - Al hacer clic en el boton more details, se presenta una vista detallada con información adicional.

## Conclusión

Este proyecto no solo proporciona una experiencia divertida e interactiva para los fans de Rick y Morty, sino que también demuestra habilidades en el uso de tecnologías modernas como React, Zustand para el manejo del estado, y Node.js para el backend. La implementación de paginación y almacenamiento persistente mejora significativamente la usabilidad y funcionalidad general de la aplicación.

## Requisitos Previos

Necesitas para instalar este proyecto

- [Node.js](https://nodejs.org/) (v14 o superior)

## Instalación de proyecto en React Rick and Morty Api

1. Clona este repositorio:
    ```bash
    git clone https://github.com/DanteIturri/prueba-tecnica.git
    cd pueba-tecnica
    cd rickandmorty-api
    ```

2. Instala las dependencias:

    - Si estás usando Node.js:
      ```bash
      npm install
      ```


## Uso

Instrucciones sobre cómo ejecutar el proyecto.

```bash
npm run dev

```
## Instalación de proyecto en Favoritos Backend en Node Exppres 

1. Clona este repositorio:
    ```bash
    git clone https://github.com/DanteIturri/prueba-tecnica.git
    cd pueba-tecnica
    cd favoritos-backend
    ```

2. Instala las dependencias:

    - Si estás usando Node.js:
      ```bash
      npm install
      ```


## Uso

Instrucciones sobre cómo ejecutar el proyecto.

```bash
npm start
```
