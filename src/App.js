import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Donar from './pages/donar';
import { Receiver } from './pages/Receiver';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <ChakraProvider>
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
