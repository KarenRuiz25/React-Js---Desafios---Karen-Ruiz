import React from 'react'
import {useEffect, useState} from "react"
import ItemDetail from "./ItemDetail"
import asyncMock from '../utils/asyncMock'
import {unProducto} from '../utils/productos'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({}) 

    useEffect(() => { 

        asyncMock (2000, unProducto)
        .then(resultado => setProduct(resultado))

    }, [product]);

    return (
        <>
            <ItemDetail product={product} />  
        </>
    )
    

}

export default ItemDetailContainer

