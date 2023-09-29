import itemsJSON from "../db/productos.json"

export function getItemById (id){
    return itemsJSON.find((item) => item.id == id)
}

