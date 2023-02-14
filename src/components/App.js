
import './App.css';
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import {BrowserRouter} from "react-router-dom"
import CustomProvider from './CustomProvider';


function App() {


  return(
    <>
      <CustomProvider>
        <BrowserRouter>
          <Header/>
          <Main/>
          <Footer/>  
        </BrowserRouter>
      </CustomProvider>
   
    </>

  )
}

export default App;
