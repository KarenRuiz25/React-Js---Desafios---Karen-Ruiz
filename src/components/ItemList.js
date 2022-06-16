import React from 'react'
import Item from './Item'

function ItemList ({products}) {
    return (        
        products.map ( p => 
            <Item 
                id={p.id}                
                nombre={p.nombre}
                precio={p.precio}
                img={p.img}
                key={p.id}
                stock={p.stock}            
            />
        )
    )
}

export default ItemList