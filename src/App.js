import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Donar from './pages/donar';
import { Receiver } from './pages/Receiver';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <ChakraProvider>
      <Toaster position="top-center"/>
      <Navbar/>

      <Routes>
      <Route path="/" element={<Receiver/>}/>
        <Route path="/donar" element={<Donar/>}/>
        <Route path="/receiver" element={<Receiver/>}/>

      </Routes>
      
      
    </ChakraProvider>
  )
}

export default App;
