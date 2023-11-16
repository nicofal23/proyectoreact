


export const getProductosByCategory = async (category) => {
  try {
    const response = await fetch('/src/productos.json');
    const productos = await response.json();
    const productosFiltrados = productos.filter((prod) => prod.category === category);
    return productosFiltrados;
  } catch (error) {
    console.error('Error fetching productos:', error);
    return [];
  }
};

export const getProductos = async () => {
    try {
      const response = await fetch('/src/productos.json');
      const productos = await response.json();
      return productos;
    } catch (error) {
      console.error('Error fetching productos:', error);
      return [];
    }
  };
  
  export const getProductosById = async (productoId) => {
    try {
      const response = await fetch('/src/productos.json');
      const productos = await response.json();
      const producto = productos.find((prod) => prod.id === productoId);
      return producto;
    } catch (error) {
      console.error('Error fetching productos:', error);
      return null;
    }
  };
  
  export default getProductosById;
  