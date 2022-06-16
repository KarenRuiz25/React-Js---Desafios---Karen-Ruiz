import {useState} from "react"

const ItemCount = ({ stock, initial, onAdd }) => {
    
    const [contador, setContador] = useState(initial)
        
    const sumarContador = () => {
        if (stock>contador) {
            setContador(contador + 1)      
        }
    }

    const restarContador = () => {
        if (contador>0) {
            setContador(contador - 1)
        }
    }    

    return (
        <div className="contador">
            <button onClick={restarContador}>-</button>
            <p>{contador}</p>
            <button onClick={sumarContador}>+</button>
            <button className="confirmar">confirmar</button>
        </div>
    )
}

export default ItemCount