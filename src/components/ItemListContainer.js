import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
    
    const onAdd = () => { }    

    return (  
        <>          
            <h2>{props.greeting}</h2>
            <ItemCount stock={10} initial={1} onAdd={onAdd} />  
        </>        
    )
}

export default ItemListContainer
