import { useParams, Link } from 'react-router-dom';
import { useState , useEffect } from 'react'
import { toast } from 'react-toastify'
import { collection , getDocs , query, where } from 'firebase/firestore'
import {db} from '../firebase'
import { Button } from 'reactstrap';

const VentaGenerada = () => {

    const [ordenes,setOrdenes] = useState([]);
    const [countdown, setCountdown] = useState(10);

    const props = useParams();

    useEffect(() => {
        const countdownInterval = setInterval(() => {
          setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
    
        return () => clearInterval(countdownInterval);
      }, []);
    
      useEffect(() => {
        if (countdown === 0) {
          window.location.href = '/';
        }
      }, [countdown]);

    useEffect(() => {
        console.log("props ess:" + props.id)
        if (props.id) {
            const queryIdordenes = query(collection(db, 'ordenes'),where('__name__','==',props.id));
            const pedidoFirestore = getDocs(queryIdordenes);
    
            pedidoFirestore
                .then((respuesta)=>{
                    const vent = {id: props.id , ...respuesta.docs[0].data()};
                    setOrdenes(vent);
                })
                .catch((error)=>{
                    toast.error('Error al ver la venta:' + error.mensaje);
                });
        }
    }, [props.id])


return (
<div className='ventaExito'>
      <h2 className='ventaExito-cont'>
        Gracias por su compra! {ordenes.nombre} {ordenes.apellido}
      </h2>
      <h3 className='ventaExito-cont'>Su codigo de compra es: {ordenes.id} </h3>
      <Button className='ventaExito-cont-contador' disabled>
        Volverás al inicio en {countdown}
      </Button>
      <Link to='/'>
        <Button className='ventaExito-cont-botones' color='primary'>
          Ir al inicio ahora
        </Button>
      </Link>
    </div>
)
}

export default VentaGenerada