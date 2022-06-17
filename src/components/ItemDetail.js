import React from 'react';

const ItemDetail = ({ product }) => {
    return (

        <div className="detalleProducto">
            <img src={product.img} alt={product.nombre}/>
            <div>
                <h3>{product.nombre}</h3>
                <h4>$ {product.precio}</h4>                
                <p>{product.descripcion}</p>
            </div>
        </div>

    )
}

export default ItemDetail;
