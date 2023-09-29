const ListadoOld = ({productos}) => {
    //console.log(productos)
    if (productos) {
        return (
    
            <div>
                { 
                    productos.map((producto) => (
                        <div key={producto.id}>
                            <img src={producto.img} alt="Img arduino 2560"/>
                            <h3>
                                {producto.descripcion}
                            </h3>
                                {producto.title}
                            <p>{producto.precioFinal}</p>
                            
                        </div>
                    ))
                } 
                <h4>Fin Listado</h4 >
            </div>
        )
    
    }
}
export default Listado;
