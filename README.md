# Mi Extensión de Edge

Esta extensión de Edge abre una nueva pestaña con un buscador inicial.

## Instalación

1. Descargue o clone este repositorio en su computadora.
2. Abra Edge y vaya a `edge://extensions`.
3. Active el modo de desarrollador en la esquina superior derecha.
4. Haga clic en `Cargar desempaquetada` y seleccione la carpeta de la extensión.

## Uso

Una vez instalada la extensión, cada vez que abra una nueva pestaña, se abrirá la página de búsqueda inicial.

## Desarrollo

La extensión consta de varios archivos:

- `manifest.json`: Define la configuración básica de la extensión.
- `background.js`: Contiene el código que se ejecuta en el contexto de la extensión.
- `newtab/index.html`: Es la página que se abrirá cuando se abra una nueva pestaña.
- `newtab/styles.css`: Contiene los estilos CSS para la página de búsqueda inicial.
- `newtab/script.js`: Contiene el código JavaScript para la página de búsqueda inicial.

Para modificar la extensión, puede editar estos archivos y luego recargar la extensión en `edge://extensions`.

## Licencia

Esta extensión es de código abierto y se distribuye bajo la licencia MIT.