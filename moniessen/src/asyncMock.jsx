const productos = [
    {
        id:'1',
        nombre: 'Olla Essen',
        precio: '68000',
        categoria: 'Ollas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_632376-MLA43716907871_102020-O.webp',
        stock: '30',
        descripcion: 'olla essen 1'
    },
    {
        id:'2',
        nombre: 'Olla Essen 2',
        precio: '78000',
        categoria: 'Ollas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_632376-MLA43716907871_102020-O.webp',
        stock: '20',
        descripcion: 'olla essen 2'
    },
    {
        id:'3',
        nombre: 'linea contemporanea Essen',
        precio: '68000',
        categoria: 'Ollas',
        img: '',
        stock: '30',
        descripcion: 'olla essen 1'
    },
    {
        id:'4',
        nombre: 'Olla Essen',
        precio: '68000',
        categoria: 'Ollas',
        img: '',
        stock: '30',
        descripcion: 'olla essen 1'
    },
    {
        id:'5',
        nombre: 'Olla Essen',
        precio: '68000',
        categoria: 'Ollas',
        img: '',
        stock: '30',
        descripcion: 'olla essen 1'
    },
]


export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos)
        },500)
    })
}

export const getProductosById = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productoId))
        },500)
    })
}

export default getProductosById;