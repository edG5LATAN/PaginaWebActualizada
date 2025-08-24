import axios from "axios"
import { listaProductos } from "../listaTelefonia/ListaPromos.js"


export const getAllProducts = (setdata) => {
  try {
    setdata(listaProductos)
  } catch (error) {
    console.log(error)
  }

}
export const buscarIdProductos=(setdata,id)=>{
  try {
    setdata(listaProductos.find(product=>product.id==id))    
  } catch (error) {
    console.log(error)
  }
}
export const getAllProductTipo = (setdata, tipo) => {
  try {
    setdata(listaProductos.filter(inf=>inf.tipo==tipo))
  } catch (error) {
    console.log(error)
  }
}
export const deleteProductos=(id)=>{
  try {
    axios.delete(dtbase+"/borrar/"+`${id}`)
  } catch (error) {
    console.log(error)
  }
}

export const getAllProductByCharacter = (setdata, termino) => {
  try {
    const terminoBusqueda = termino.toLowerCase().trim();
    
    if (!terminoBusqueda) {
      setdata(listaProductos);
      return;
    }
    
    const resultados = listaProductos.filter(producto => 
      producto.marca.toLowerCase().includes(terminoBusqueda) || 
      producto.modelo.toLowerCase().includes(terminoBusqueda)
    );
    
    setdata(resultados);
  } catch (error) {
    console.log(error);
    setdata([]);
  }
};