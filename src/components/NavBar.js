// ESTO ES UN COMPONENTE, recordar que:
// -el componente es una funcion
// -debe empezar con mayusculas
// -tiene que retornar algo
// -tiene que estar exportado para poder usarlo

const NavBar = () => {
    return (                
        <header>
            <h1>Sucuworld</h1>
            <nav>
                <a href="#">Inicio</a>
                <a href="#">Tienda</a>
                <a href="#">Sobre nosotros</a>
                <a href="#">Contacto</a>                
            </nav>
        </header>
    )
}

export default NavBar

