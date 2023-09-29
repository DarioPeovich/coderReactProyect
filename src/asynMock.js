import ppp from "./db/productos.json"
console.log(ppp)
export const getArchJsonProductos = async () => {
    const resp = await fetch('/db/productos.json');
    console.log(resp);
    const data = await resp.json();
    console.log("****************************")
    console.log(data)
    
    return data;
  };
  