import React, { useState, useEffect } from 'react'
import { useCarrito } from './CustomProvider';
import { Link } from "react-router-dom"
import { serverTimestamp, addDoc, collection } from "firebase/firestore"
import { db } from '../firebase'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';


const Checkout = () => {
  const navigate = useNavigate();

  const [idOrden, setIdOrden] = useState("");
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [email, setEmail] = useState("")
  const [direccion, setDireccion] = useState("")
  const [ciudad, setCiudad] = useState("")
  const [codigoPostal, setCodigoPostal] = useState("")
  const [telefono, setTelefono] = useState("")

  const { carrito, totalCarrito, vaciarCarrito } = useCarrito();

  const validarOrden = (orden) => {
    var nombre = false;
    var apellido = false;
    var ciudad = false;
    var email = false;
    var emailVerificacion = false;
    var direccion = false;
    var codigoPostal = false;
    var telefono = false;

    if (orden.nombre.length < 3) {
      toast.error("Nombre no válido, ingrese un nombre con más de dos caracteres");
    } else {
      nombre = true;
    }

    if (orden.apellido.length < 3) {
      toast.error("Apellido no válido, ingrese un apellido con más de dos caracteres");
    } else {
      apellido = true;
    }

    if (orden.ciudad.length < 3) {
      toast.error("Ciudad no válida, ingrese una ciudad con más de dos caracteres");
    } else {
      ciudad = true;
    }

    if (orden.email.indexOf("@") === -1) {
      toast.error("Email no válido, ingrese un email del formato micorreo@correo.com");
    } else {
      email = true;
    }

    if (orden.email === orden.emailVerificacion) {
      toast.error("Los correos no son iguales")
    } else {
      emailVerificacion = true;
    }

    if (!/^\d{10}$/.test(orden.telefono)) {
      toast.error("El número de teléfono debe contener 10 dígitos numéricos sin espacios ni guiones");
    } else {
      telefono = true;
    }

    if (!orden.direccion) {
      toast.error("Dirección no válida, ingrese una dirección");
    } else {
      direccion = true;
    }

    if (!orden.codigoPostal || isNaN(orden.codigoPostal)) {
      toast.error("Código Postal no válido, ingrese un valor numérico");
    } else {
      codigoPostal = true;
    }

    if (nombre && apellido && ciudad && telefono && email && emailVerificacion && direccion && codigoPostal) {
      return true;
    } else {
      return false;
    }
  };

  const handleClick = (e) => {

    const nuevaOrden = {
      nombre: nombre,
      apellido: apellido,
      ciudad: ciudad,
      email: email,
      telefono: telefono,
      codigoPostal: codigoPostal,
      direccion: direccion,
      fecha: serverTimestamp(),
    };

    if (validarOrden(nuevaOrden) === true) {
      const docRef = addDoc(collection(db, 'ordenes'), nuevaOrden);

      docRef.then((respuesta) => {
        setIdOrden(respuesta.id)
      }).catch((error) => {
        toast.error("error al guardar la venta:" + error.mensaje);
      });

      toast.promise(docRef, {
        pending: 'Registrando Compra',
        success: 'Compra Exitosa',
        error: 'Error al registra la compra'
      });
    }
  };

  const handleChangeNombre = (e) => {
    setNombre(e.target.value)
  }

  const handleChangeApellido = (e) => {
    setApellido(e.target.value)
  }

  const handleChangeCiudad = (e) => {
    setCiudad(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangeCodigoPostal = (e) => {
    setCodigoPostal(e.target.value)
  }

  const handleChangeDireccion = (e) => {
    setDireccion(e.target.value)
  }

  const handleChangeTelefono = (e) => {
    setTelefono(e.target.value)
  }

  useEffect(() => {
    if (idOrden !== '') {
      vaciarCarrito();
      navigate('/ventaGenerada/' + idOrden);
    }
  }, [idOrden]);

  return (
    <div className="checkout-form-container">
      <div className="checkout">
        <h2>Lista de productos:</h2>
        {carrito.map((producto) => (
          <div className="productoEnCarrito" key={producto.id}>
            <p>{producto.cantidad} X {producto.title}</p>
          </div>
        ))}
        <h4>TOTAL DE COMPRA: ${totalCarrito()}</h4>
      </div>
      <div className="formulario">
        <h2><i>DATOS PERSONALES</i></h2>
        <form>
          <label>
            <br />
            <input type="text" name="nombre" onChange={handleChangeNombre} placeholder="Nombre" />
          </label>
          <br />
          <label>
            <br />
            <input type="text" name="apellido" onChange={handleChangeApellido} placeholder="Apellido" />
          </label>
          <br />
          <label>
            <br />
            <input type="email" name="email" onChange={handleChangeEmail} placeholder="Correo Electrónico" />
          </label>
          <br />

          <label>
            <br />
            <input type="email" name="emailVerificacion" onChange={handleChangeEmail} placeholder="Repita Correo Electrónico" />
          </label>
          <br />
          <label>
            <br />
            <input type="number" name="telefono" onChange={handleChangeTelefono} placeholder="Telefono" />
          </label>
          <br />

          <label>
            <br />
            <input type="text" name="direccion" onChange={handleChangeDireccion} placeholder="Direccion Envio" />
          </label>
          <br />
          <label>
            <br />
            <input type="text" name="ciudad" onChange={handleChangeCiudad} placeholder="Ciudad" />
          </label>
          <br />
          <label>
            <br />
            <input type="number" name="codigoPostal" onChange={handleChangeCodigoPostal} placeholder="Codigo Postal" />
          </label>
          <div className='contenedor-boton-compra'>
            <Link className="finalizar-compra" onClick={handleClick}>Finalizar Compra</Link>
          </div>
        </form>
      </div>
    </div>
  )

}

export default Checkout;