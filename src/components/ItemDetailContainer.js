import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { db } from '../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'


const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])
    const props = useParams();

    useEffect(() => {

        const queryIdProducto = query(collection(db, 'productos'), where('__name__', '==', props.id));
        const pedidosFirestore = getDocs(queryIdProducto);

        pedidosFirestore
            .then((respuesta) => {
                toast.warn("Cargando Producto")

                const productosFiltrado = { id: props.id, ...respuesta.docs[0].data() };
                setProductos(productosFiltrado);
                toast.dismiss()
                toast.success("Producto Cargado")

            })
            .catch((error) => {
                toast.error("Error" + error.message)
            })

    }, [props.id])

    return (
        <div>
            <ItemDetail productos={productos} />
        </div>
    )
}

export default ItemDetailContainer