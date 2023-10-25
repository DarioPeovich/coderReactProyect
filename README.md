## Proyecto e-Commerce: Tienda de Electrónica

### Funcionalidad del proyecto
    Proyecto con React JS, base de datos FireBase y React-BootStrap.
    Desarrollo de un tienda de MicroControladores y sus accesorios.

### Descripcion del Sitio:
    Se utilizan varios componentes, pero los principales son:
    
    * Listado (itemListContainer): Componente que obtiene los productos de Firebase, segun parametro por categorias y se muestran en el DOM via etiquetas Card.

    * Home: Componente de inicio del sitio, donde se mostraran los articulos nuevos y en promoción, utilizando una categoria para tal fin en cada producto.

    * Item: Componente que muestra el detalle del Producto, donde se da la opcion de agregar al carrito de compras. Se puede variar la cantidad a agregar,cantidad que va a ser validada contra el Stock disponible. 
    No deja agregar un producto cuyo Stock sea cero, dando aviso al usuario de tal situación.
    El detalle del producto se obtiene en el momento de mostrarlo, via funciones de FireBase.

    * Carrito de Compras: Componente anexado al NavBar, que va a ir indicando la cantidad de items que posee en su CartWidGet, y que al seleccionar el mismo va a mostrar los productos cargados y el Total de la compra, dando la posibilidad al usuario de Comprar los productos seleccionados, utilizando un boton de Continuar la compra. 
    En este componente el Cliente podra eliminar productos del carrito y variar las cantidades a comprar; las cuales son validadas contra el Stock disponible.
    Tambien se podra apreciar la variacion dinamica del Total a cobrar y las cantidades de los items involucrados en la compra.

    * Orders: Componente que solicitara los datos del Usuario para grabar la compra utilizando la base de datos FireBase

    * CompraFinal: Componente que mostrara el Id. de compra para que el usuario pueda realizar un seguiemiento de la misma, y donde se visualizaran los productos la componen.

   ### Descripciones tecnicas:
        * Se utiliza el componente CarritoContext.jsx como manejador del Contexto de la App para compartir variables y funciones comunes a varios componentes.

        * Se utilizan las siguientes librerias externas:
                * React BootStrap
                * React Toastify
        * Se actualiza el Stock de cada producto involucrado en cada compra, al finalizar la misma.
### ## Para levantar el proyecto:

    Ejecutar los comandos

    * npm install
    * npm start

    