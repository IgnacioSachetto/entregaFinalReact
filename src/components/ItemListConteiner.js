import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { db } from '../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemListConteiner = () => {

    let props = useParams();
    console.log("props es:" + props.categoria)

    const [productos, setProductos] = useState([])

    useEffect(() => {
        var productosCollection = null
        if (props.categoria !== undefined) {
            productosCollection = query(collection(db, 'productos'), where('category', '==', props.categoria));
        } else {
            productosCollection = collection(db, 'productos');
        }

        const pedidoFirestore = getDocs(productosCollection);
        const productosFirestore = [];

        pedidoFirestore
            .then((respuesta) => {
                toast.warn("Cargando productos")

                respuesta.docs.forEach(doc => {
                    const productosCategoria = { id: doc.id, ...doc.data() };
                    productosFirestore.push(productosCategoria);
                    toast.dismiss()
                    toast.success("Productos Cargados")
                })
                setProductos(productosFirestore);
            })
            .catch((error) => {
                toast.error("Error" + error.message)
            })
    }, [props.categoria])

    return (
        <div>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListConteiner
