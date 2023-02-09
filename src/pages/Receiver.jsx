import { Card, Container, Text, HStack, Heading, Input, Button, Box, Image, Grid, CircularProgress } from '@chakra-ui/react'
import StateSelect from '../components/StateSelect'
import { DonationType } from '../components/DonationType'
import BloodSelect from '../components/BloodSelect'
import { useState } from 'react'
import axiosInstance from '../api/axios'
import { toast } from 'react-hot-toast'

export const Receiver = () => {

    
    const[isBloodSelected, setBloodSelected] = useState(false);

    const [searchObj, setSearchObj] = useState({})
    const [responseData, setResponseData] = useState([])
    const [loading, setLoading] = useState(false)

    const saveData = async (e)=>{
        const selectedType = e.target.value;
        setSearchObj({
            ...searchObj,
            [e.target.name]: e.target.value
        })


        if(searchObj.donationType === "Blood" || selectedType === "Blood"){
            setBloodSelected(true);
        } 
        else if(searchObj.hasOwnProperty("donationType")) {
            delete searchObj.bloodType
            setSearchObj({...searchObj})
            setBloodSelected(false);
        }


        
    }

    const getData = async () =>{
        let response;

        if(searchObj){

            
            
            try{
                setLoading(true)

                if(searchObj.hasOwnProperty("donationType")) {
                    delete searchObj.bloodType
                    setSearchObj({...searchObj})
                }
                response = await axiosInstance.post("/search", {...searchObj})



                const res = response.data.map(d => {
                        return d;
                })
                setResponseData(res)
                setLoading(false)
                
                
            }catch(error){
                const errMsg = error.response.data.message;
                toast.error(errMsg)
                setLoading(false)
            }

            
            
        }

        // setResponseData([...responseData, ...response.data])
    }
    
    // console.log(searchObj)
    // console.log("response -> ", responseData)

  return (
    <Container py={5} maxW="4xl">
        <Heading p={5} color="green.600">Search for Equipments</Heading>

            <HStack spacing='25px' p={3}>
                <Box>
                    <StateSelect onSelect={saveData}/>
                </Box>
                <Box>
                    <Input placeholder='City' name='city' onChange={saveData}/>
                </Box>
                <Box>
                    <DonationType onSelect={saveData}/>
                </Box>
            <Box>
                {isBloodSelected?<BloodSelect onSelect={saveData}/>:<></>}
            </Box>

                <Box>
                <Button colorScheme="green" color="white" size="lg" p={3}onClick={getData}>Search</Button>
                </Box>
            </HStack>
        <Heading p={5} size="md">Search Result</Heading>


        {loading?<CircularProgress isIndeterminate color='green.300'/>:<Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {responseData.length > 0 ? responseData.map((data) => {
                return <Card p={5} gap={2} key={data.id} my={4} maxW="sm">
                        <Heading size="md">{data.fullName.toUpperCase()}</Heading>
                        <Text>{data.phoneNo}</Text>
                        <Text>{data.bloodType}</Text>
                        <Text>{data.state.charAt(0).toUpperCase() + data.state.slice(1)}</Text>
                        <Text>{data.city.charAt(0).toUpperCase() + data.city.slice(1)}</Text>
                        {isBloodSelected?<Text>{data.bloodType.toU}</Text>:<Box>
                        <Image src={data.image} alt={data.fullName} boxSize="250px" /></Box>}

                        
                    </Card>
            }):<></>}
        </Grid>}
        
        
        
    </Container>
  )
}
