import arrayProductos from "./db/productos.json"; //Atencion las imagenes locales para que puedan ser consumidas, deben estar dentro de la carpeta public,
// y si están dentro de una carpeta img esta debe residir en public. No anda si se alojan en otra carpetaconsole.log(ppp)

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arrayProductos);
    }, 1000);
  });
};

export const getProductosPromo = (promocionId) => {
  return new Promise((resolve) => {
    let arrayProdPromo = [];
    arrayProdPromo = arrayProductos.filter((producto => producto.promocionId === promocionId))
    setTimeout(() => {
      resolve(arrayProdPromo);
    }, 1000);
  });

}

// export const getArchJsonProductos = async () => {
//     const resp = await fetch('/db/productos.json');
//     console.log(resp);
//     const data = await resp.json();
//     console.log("****************************")
//     console.log(data)
    
//     return data;
//   };
  