import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Donar from './pages/donar';


function App() {
  return (
    <ChakraProvider>
      <Navbar/>
      <Donar/>
    </ChakraProvider>
  )
}

export default App;
