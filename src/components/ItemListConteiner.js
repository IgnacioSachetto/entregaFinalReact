import React from 'react'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'


const ItemListConteiner = () => {
    
    const [contador,setContador]  = useState(0)
    const [searchText, setSearchText] = useState("")
    
    let props = useParams();
    console.log ("props es:" + props.categoria)

    const handleClick = () => {
        setContador (contador+1)
    }
    
    const handleOnChange = (e) => {
        setSearchText(e.target.value)
    }

    const [productos,setProductos] = useState([])

    let urlFinal = "https://fakestoreapi.com/products"
    

    useEffect(() => {

        if(props.categoria!==undefined){
            urlFinal="https://fakestoreapi.com/products/category/"+props.categoria
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

    }, [props.categoria])

        return (
            <div>
                <ItemList productos={productos}/>
            </div>
        )
}

export default ItemListConteiner
