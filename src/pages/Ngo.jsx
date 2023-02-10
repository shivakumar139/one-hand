import { Card, Container, Text, HStack, Heading, Input,Image, Button, Box, Grid, CircularProgress, Center } from '@chakra-ui/react'
import StateSelect from '../components/StateSelect'
import { DonationType } from '../components/DonationType'
import BloodSelect from '../components/BloodSelect'
import { useState } from 'react'
import axiosInstance from '../api/axios'
import { toast } from 'react-hot-toast'
import notFound from "../utils/img/empty.svg"
import SelectCity from '../components/SelectCity'

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const initialValue = {
    state:"",
    city:""
}
const Ngo = () => {

    
    const [searchObj, setSearchObj] = useState(initialValue)
    const [responseData, setResponseData] = useState([])
    const [loading, setLoading] = useState(false)

    const saveData = async (e)=>{
        
        setSearchObj({
            ...searchObj,
            [e.target.name]: e.target.value
        })

        
    }

    const getData = async () =>{
        console.log("sending ->",searchObj);
        setLoading(true)

        axiosInstance.post("/ngo", {...searchObj}).then(response =>{
            console.log(response.data)
            const res = response.data.map(d => {
                            return d;
                    })
            setResponseData(res)
            setLoading(false)  
            setSearchObj(initialValue)
        }, (error) =>{
            console.log("error -> ", error)
            const errMsg = error.response.data.message;
            toast.error(errMsg)
            setLoading(false)
            setSearchObj(initialValue)
        })


    }
    

  return (
    <Container py={5} maxW="-moz-fit-content">
        <Center>
        <Heading p={5} color="green.600">Search for Nearby NGO</Heading>

        </Center>
        

            <Center>
                <HStack spacing='25px' p={3}>
                    <Box>
                        <StateSelect onSelect={saveData} data={searchObj.state}/>
                    </Box>
                    <Box>
                        <SelectCity onSelect={saveData} state={searchObj.state} data={searchObj.city}/>
                    </Box>


                    <Box>
                    <Button colorScheme="green" color="white" size="lg" p={3}onClick={getData}>Search</Button>
                    </Box>
                </HStack>
                
            </Center>
            <Center>
            <Heading p={5} size="md">Search Result</Heading>
            </Center>
        


        {loading?<CircularProgress isIndeterminate color='green.300'/>:<>
        {responseData.length > 0 ? 
            <TableContainer>
            <Table variant="striped" colorScheme="green">
                <Thead>
                <Tr>
                    <Th>Blood Bank Name</Th>
                    <Th>Address</Th>
                    <Th>Pincode</Th>
                    <Th>contact No</Th>
                    <Th>website</Th>
                    <Th>category</Th>
                    <Th>Service Time</Th>
                    <Th>State</Th>
                    <Th>City</Th>
                </Tr>
                </Thead>
                <Tbody>
                    {responseData.map(ngo =>{
                        return<Tr>
                            <Td>{ngo.bloodBankName}</Td>
                            <Td>{ngo.address}</Td>
                            <Td>{ngo.pincode}</Td>
                            <Td>{ngo.contactNo}</Td>
                            <Td><Link to={ngo.website}>{ngo.website}</Link></Td>
                            <Td>{ngo.category}</Td>
                            <Td>{ngo.serviceTime}</Td>
                            <Td>{ngo.state}</Td>
                            <Td>{ngo.city}</Td>
                            
                        </Tr> 
                    })}
                
                </Tbody>
            </Table>
            </TableContainer>
            :<Center>
            <Image src={notFound} alt="banner" boxSize="md"/></Center>}
        </>}

        
        
        
        
    </Container>

  )
}

export default Ngo