import React from 'react'
import ItemCount from './ItemCount'

function Item({id, nombre, precio, img, stock}) {  

    return (
        <div className="card">

            <img src={img} alt={nombre}/>
            <p>Art.{id}</p>
            <h3>{nombre}</h3>
            <p>${precio}</p>

            
            <ItemCount stock={stock} initial={1} /> 

        </div>
    )
}

export default Item