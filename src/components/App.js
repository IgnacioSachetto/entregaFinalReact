
import './App.css';
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import {BrowserRouter} from "react-router-dom"
import CustomProvider from './CustomProvider';
import { ToastContainer } from 'react-toastify';

function App() {


  return(
    <>
      <CustomProvider>
        <BrowserRouter>
          <Header/>
          <Main/>
          <Footer/>  
        </BrowserRouter>
        <ToastContainer autoClose={3000}     position= "bottom-right"
/>
      </CustomProvider>
   
    </>

  )
}

export default App;
