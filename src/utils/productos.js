import Imagenes from '../components/Imagenes';

const productos = [
    {
        id: 1,
        nombre: 'Echeveria Cepegia',
        precio: 320,
        img: Imagenes['Echeveria Cepegia'],        
        stock: 5
    },
    {
        id: 2,
        nombre: 'Echeveria Peacockii',
        precio: 400,
        img: Imagenes['Echeveria Peacockii'],
        stock: 3
    },
    {
        id: 3,
        nombre: 'Echeveria Cubic Pallid',
        precio: 280,
        img: Imagenes ['Echeveria Cubic Pallid'],
        stock: 2
    }
]

const unProducto = {
    id: 1,
    nombre: 'Echeveria Cepegia',
    precio: 320,
    img: Imagenes['Echeveria Cepegia'],
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo nibh, porttitor at scelerisque sed, gravida nec ipsum. Aliquam facilisis, magna eget aliquam finibus, ex nisi pretium purus, quis egestas enim lorem eu elit. Maecenas hendrerit mauris a lacus luctus, sed hendrerit erat viverra. Ut viverra enim nec tortor vulputate, in gravida eros viverra. Nam pulvinar ut lacus sed fringilla. Praesent tempus tellus justo, a laoreet lectus feugiat ac. Vestibulum lorem ligula, venenatis sit amet turpis et, laoreet egestas quam.',        
    stock: 5
}

export default productos;
export {unProducto}
