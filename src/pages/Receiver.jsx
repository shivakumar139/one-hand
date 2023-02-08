import { Card, Container, Text, HStack, Heading, Input, Button, Box, Image } from '@chakra-ui/react'
import StateSelect from '../components/StateSelect'
import { DonationType } from '../components/DonationType'
import BloodSelect from '../components/BloodSelect'
import { useState } from 'react'

export const Receiver = () => {

    const[isBloodSelected, setBloodSelected] = useState(false);

    const [searchObj, setSearchObj] = useState({})

    const saveData = (e)=>{
        const selectedType = e.target.value;
        setSearchObj({
            ...searchObj,
            [e.target.name]: e.target.value
        })

        if(searchObj.donationType === "Blood" || selectedType === "Blood"){
            setBloodSelected(true);
        } 
        else{
            setBloodSelected(false);
        }

        
    }

    console.log(searchObj)

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
                <Button colorScheme="green" color="white" size="lg" p={3}>Search</Button>
                </Box>
            </HStack>
        <Heading p={5} size="md">Search Result</Heading>

        <Card p={5} gap={4}>
            <Heading size="md">Shiva kumar</Heading>
            <Text>8366725536</Text>
            {isBloodSelected?<Text>A+</Text>:<Box>
            <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' /></Box>}

        </Card>
        
    </Container>
  )
}
