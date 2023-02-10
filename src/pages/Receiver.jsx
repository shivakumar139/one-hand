import { Card, Container, Text, HStack, Heading, Input, Button, Box, Grid, CircularProgress } from '@chakra-ui/react'
import StateSelect from '../components/StateSelect'
import { DonationType } from '../components/DonationType'
import BloodSelect from '../components/BloodSelect'
import { useState } from 'react'
import axiosInstance from '../api/axios'
import { toast } from 'react-hot-toast'
import notFound from "../utils/img/empty.svg"
import SelectCity from '../components/SelectCity'

const initialValue = {
    donationType: "",
    bloodType:"",
    state:"",
    city:""
}
export const Receiver = () => {

    
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
        let response;
        console.log("sending ->",searchObj);
        try{
            setLoading(true)
            response = await axiosInstance.post("/search", {...searchObj})

            const res = response.data.map(d => {
                    return d;
            })
            setResponseData(res)
            setLoading(false)  
            setSearchObj(initialValue)
            
        }catch(error){
            const errMsg = error.response.data.message;
            toast.error(errMsg)
            setLoading(false)
        }

    }
    

  return (
    <Container py={5} maxW="4xl">
        <Heading p={5} color="green.600">Search for Equipments</Heading>

            <HStack spacing='25px' p={3}>
                <Box>
                    <StateSelect onSelect={saveData} data={searchObj.state}/>
                </Box>
                <Box>
                    <SelectCity onSelect={saveData} state={searchObj.state} data={searchObj.city}/>
                </Box>
                <Box>
                    <DonationType onSelect={saveData} data={searchObj.donationType}/>
                </Box>
            <Box>
                {searchObj.donationType === "Blood"?<BloodSelect onSelect={saveData} data={searchObj.bloodType}/>:<></>}
            </Box>

                <Box>
                <Button colorScheme="green" color="white" size="lg" p={3}onClick={getData}>Search</Button>
                </Box>
            </HStack>
        <Heading p={5} size="md">Search Result</Heading>


        {loading?<CircularProgress isIndeterminate color='green.300'/>:<Grid templateColumns='repeat(2, 1fr)' gap={6}>
            {responseData.length > 0 ? responseData.map((data) => {
                return <Card p={5} gap={2} key={data.id} my={4} maxW="sm" borderBottom="4px solid green" borderRadius="lg" boxShadow="xl">
                        <Heading size="md" pt={2}>{data.fullName.toUpperCase()}</Heading>
                        <Text>{data.phoneNo}</Text>
                        <Text>{data.bloodType}</Text>
                        <Text>{data.donationType.charAt(0).toUpperCase() + data.donationType.slice(1)}</Text>
                        <Text>{data.state.charAt(0).toUpperCase() + data.state.slice(1)}</Text>
                        <Text>{data.city.charAt(0).toUpperCase() + data.city.slice(1)}</Text>
                        

                        
                    </Card>
            }):<><div className="text-center container-fluid w-100"><img src={notFound} className="img-fluid" alt="banner"/></div></>}
        </Grid>}
        
        
        
    </Container>
  )
}
