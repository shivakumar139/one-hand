import { Box, Button, Container, FormControl, FormLabel, Input, Select } from "@chakra-ui/react"
import { useState } from "react";
import StateSelect from "../components/StateSelect";
import BloodSelect from "../components/BloodSelect";
import { DonationType } from "../components/DonationType";


export const Donar = () => {


    const[isBloodSelected, setBloodSelected] = useState(false);
    const handleChange = (e)=>{
        const selectedType = e.target.value;

        if(selectedType === "Blood"){
            setBloodSelected(true);
        } else{
            setBloodSelected(false);
        }
    }
  return (
    <Container my={10}>
        <FormControl isRequired>
            <Box py={3}>
                <FormLabel>Full name</FormLabel>
                <Input placeholder='Full name' />
            </Box>
            <Box py={3}>
                <FormLabel>Phone Number</FormLabel>
                <Input placeholder='Phone Number' />
            </Box>
            

            <Box py={3}>

                <DonationType formLabel="Donation Type" onSelect={handleChange}/>

            </Box>

            {isBloodSelected?"":<Box>
                <FormLabel>Upload Images</FormLabel>
                <Input type="file" placeholder='First name' />
            </Box>}

            {/* Blood type */}
            {isBloodSelected?<Box py={3}>
                <BloodSelect label="Blood Type"/>
            </Box>:""}


            <Box py={3}>
                <StateSelect label="states"/>
            </Box>


            <Box py={3}>
                <FormLabel>City</FormLabel>
                <Input placeholder='City' />
            </Box>

            <Box py={3}>
                <Button colorScheme="green">Submit</Button>
            </Box>
        </FormControl>
    </Container>
  )
}
export default Donar;