import { Box, Button, Container, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { useState } from "react";
import StateSelect from "../components/StateSelect";
import BloodSelect from "../components/BloodSelect";
import { DonationType } from "../components/DonationType";
import axiosInstance from "../api/axios";
import toast from "react-hot-toast";
import SelectCity from "../components/SelectCity";

const initialValue = {
    fullName: "",
    phoneNo: "",
    donationType: "",
    bloodType:"",
    state:"",
    city:""
}
export const Donar = () => {

    const [donar, setDonar] = useState(initialValue)

    const saveData = (e)=>{
        setDonar({
            ...donar,
            [e.target.name]: e.target.value
        })
    }

    const sendData = async (e)=>{
        e.preventDefault();
        console.log("sending data ->", donar)
        axiosInstance.post("/donar",{...donar})
            .then((response) => {
                toast.success('Successfully created')
                setDonar(initialValue)
                },(error) => {
                    const errMsg = error.response.data.message;
                    toast.error(errMsg)
            });

        
    }

      
    return (
    <Container my={10}>
        
        <FormControl isRequired>
            <form method="POST" onSubmit={sendData}>
            <Box py={3}>
                <FormLabel>Full name</FormLabel>
                <Input placeholder='Full name' name="fullName" onChange={saveData} required value={donar.fullName}/>
            </Box>
            <Box py={3}>
                <FormLabel>Phone Number</FormLabel>
                <Input placeholder='Phone Number' name="phoneNo" onChange={saveData} required value={donar.phoneNo}/>
            </Box>
            

            <Box py={3}>

                <DonationType formLabel="Donation Type" onSelect={saveData} required data={donar.donationType}/>

            </Box>


            {/* Blood type */}
            {donar.donationType === "Blood"?<Box py={3}>
                <BloodSelect label="Blood Type" onSelect={saveData} required data={donar.bloodType}/>
            </Box>:""}


            <Box py={3}>
                <StateSelect label="states" onSelect={saveData} required data={donar.state}/>
            </Box>


            <Box py={3}>
                {/* <FormLabel>City</FormLabel>
                <Input placeholder='City' name="city" onChange={saveData} required value={donar.city}/> */}
                <SelectCity onSelect={saveData} state={donar.state} label="City"/>
            </Box>

            <Box py={3}>
                <Button colorScheme="green" type="submit">Submit</Button>
            </Box>
            </form>
        </FormControl>
    </Container>
  )
}
export default Donar;