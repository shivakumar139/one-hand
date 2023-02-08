import { Box, Button, Container, FormControl, FormLabel, Input, Select } from "@chakra-ui/react"
import { useState } from "react";
import IndianStates from "../utils/IndianStates.json";


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
                <FormLabel>Donation Type</FormLabel>
                <Select placeholder='Select Donation Type' onChange={handleChange}>
                    <option value="Blood">Blood</option>
                    <option value="Pads">Pads</option>
                    <option value="Oxygen Cylinder">Oxygen Cylinder</option>
                    <option value="Medicines">Medicines</option>
                    <option value="Others">Others</option>
                </Select>
            </Box>

            {isBloodSelected?"":<Box>
                <FormLabel>Upload Images</FormLabel>
                <Input type="file" placeholder='First name' />
            </Box>}

            {/* Blood type */}
            {isBloodSelected?<Box py={3}>
                <FormLabel>Blood Type</FormLabel>
                <Select placeholder='Select Donation Type'>
                    <option value="O-">O-</option>
                    <option>O+</option>
                    <option>A-</option>
                    <option>A+</option>
                    <option>B-</option>
                    <option>B+</option>
                    <option>AB-</option>
                    <option>AB+</option>
                    <option>A</option>
                    <option>B</option>
                    <option>O</option>
                    <option>AB</option>
                </Select>
            </Box>:""}


            <Box py={3}>
                <FormLabel>State</FormLabel>
                <Select placeholder='Select State'>

                    {IndianStates?.map(state =>{
                        return <option key={state.code} value={state.name}>{state.name}</option>
                    })}

                </Select>
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