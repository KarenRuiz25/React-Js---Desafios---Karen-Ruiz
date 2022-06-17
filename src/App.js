import NavBar from "./components/NavBar.js"
import ItemListContainer from "./components/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer.js";


const App = () => {
    return (
        <>
            <NavBar/>
            <ItemListContainer greeting="¡Bienvenidos a Sucuworld!"/>
            <ItemDetailContainer />  
        </>
    )
}

export default App;
