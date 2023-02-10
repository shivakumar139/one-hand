import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Donar from './pages/donar';
import { Receiver } from './pages/Receiver';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import Ngo from './pages/Ngo';


function App() {
  return (
    <ChakraProvider>
      <Toaster position="top-center"/>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/donar" element={<Donar/>}/>
        <Route path="/receiver" element={<Receiver/>}/>
        <Route path="/ngo" element={<Ngo/>}/>

      </Routes>
      <Footer/>
      
      
    </ChakraProvider>
  )
}

export default App;
