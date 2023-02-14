import React from 'react'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    
    const [contador,setContador]  = useState(0)
    const [searchText, setSearchText] = useState("")
    
    let props = useParams();
    console.log ("props es:" + props.id)

    const [productos,setProductos] = useState([])

    let urlFinal = "https://fakestoreapi.com/products"
    

    useEffect(() => {

        if(props.id!==undefined){
            urlFinal="https://fakestoreapi.com/products/"+props.id
        }

        
        const productosAPI = fetch(urlFinal)

        productosAPI
            .then((respuesta) => {
                const productos = respuesta.json()
                return productos

            })
            .then((productos) => {
                setProductos(productos)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [props.id])

        return (
            <div>
                <ItemDetail productos={productos}/>
            </div>
        )
}

export default ItemDetailContainer