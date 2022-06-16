import {useEffect, useState} from "react"
import asyncMock from "../utils/asyncMock"
import productos from "../utils/productos"
import ItemList from "./ItemList"

const ItemListContainer = (props) => {

    const [items, setItems] = useState([])

    useEffect(() => {

        asyncMock(2000, productos)
        .then(resultado => setItems(resultado)) 

    }, [items])

    return (  
        <>          
            <h2>{props.greeting}</h2>
            <div className="catalogo">
                <ItemList products = {items} />
            </div>
            
        </>        
    )
}

export default ItemListContainer
