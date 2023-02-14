import React from 'react'
import ItemListConteiner from './ItemListConteiner'
import {Routes,Route} from "react-router-dom"
import ItemDetailContainer from './ItemDetailContainer'
import Carrito from './Carrito'

export const Main = () => {


  return (
    
      <main>

          <Routes>
           <Route path="/" element={<ItemListConteiner/>}/>
           <Route path="/category/:categoria" element={<ItemListConteiner/>}/>
           <Route path="/item/:id" element={<ItemDetailContainer/>}/>
           <Route path='/carrito' element={<Carrito/>}/>
          </Routes>
      </main>
      


  )
}


export default Main

