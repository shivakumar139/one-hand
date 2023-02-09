import { Box, Button, Container, FormControl, FormLabel, Input, Select, useToast } from "@chakra-ui/react"
import { useState } from "react";
import StateSelect from "../components/StateSelect";
import BloodSelect from "../components/BloodSelect";
import { DonationType } from "../components/DonationType";
import axiosInstance from "../api/axios";
import toast from "react-hot-toast";
import FormData from "form-data";


export const Donar = () => {


    const[isBloodSelected, setBloodSelected] = useState(false);


    const [searchObj, setSearchObj] = useState({})

    const saveData = (e)=>{
        
        const selectedType = e.target.value;

        if(e.target.name === "image"){
            setSearchObj({
                ...searchObj,
                [e.target.name]: e.target.files[0]
            })

            return;
        }
        if(searchObj.donationType === "Blood"){
            delete searchObj.image;
        }

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
        console.log(selectedType, isBloodSelected)
    }

    const sendData = async (e)=>{
        e.preventDefault();
        if(searchObj){


            const data = new FormData();
            if(searchObj.donationType !== "Blood"){
                console.log("Del")
                delete searchObj.bloodType
                setSearchObj({...searchObj})

                console.log("Upload Image", searchObj.image);
                data.append("image", searchObj.image)
                data.append("city", searchObj.city)
                data.append("donationType", searchObj.donationType)
                data.append("fullName", searchObj.fullName)
                data.append("phoneNo", searchObj.phoneNo)
                data.append("state", searchObj.state)
                const config = {
                    headers: {
                        'accept': 'application/json',
                        'Accept-Language': 'en-US,en;q=0.8',
                        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                      }
                  }

                  console.log("form data",data)
                  axiosInstance.post("/donar",data, config)
                .then((response) => {
                    toast.success('Successfully created')
                    },(error) => {
                        const errMsg = error.response.data.message;
                        toast.error(errMsg)
                    });
                  
                  console.log(searchObj)

            } else{
                axiosInstance.post("/donar",{...searchObj})
                .then((response) => {
                    toast.success('Successfully created')
                    },(error) => {
                        const errMsg = error.response.data.message;
                        toast.error(errMsg)
                    });
            }
            
            
        }
        
    }

    // const isEmpty = (obj)=>{
    //     if(obj.hasOwnProperty("fullName") && obj.hasOwnProperty("phoneNo") && obj.hasOwnProperty("donationType") && obj.hasOwnProperty("bloodType") && obj.hasOwnProperty("state") && obj.hasOwnProperty("city")){
    //         return true;
    //     }
    //     return false;
    // }

      
      


    console.log(searchObj)
  return (
    <Container my={10}>
        
        <FormControl isRequired>
            <form method="POST" encType="multipart/form-data" onSubmit={sendData}>
            <Box py={3}>
                <FormLabel>Full name</FormLabel>
                <Input placeholder='Full name' name="fullName" onChange={saveData} required />
            </Box>
            <Box py={3}>
                <FormLabel>Phone Number</FormLabel>
                <Input placeholder='Phone Number' name="phoneNo" onChange={saveData} required/>
            </Box>
            

            <Box py={3}>

                <DonationType formLabel="Donation Type" onSelect={saveData} required/>

            </Box>

            {isBloodSelected?"":<Box>
                <FormLabel>Upload Images</FormLabel>
                <Input type="file" name="image" placeholder='First name' onChange={saveData} required/>
            </Box>}

            {/* Blood type */}
            {isBloodSelected?<Box py={3}>
                <BloodSelect label="Blood Type" onSelect={saveData} required/>
            </Box>:""}


            <Box py={3}>
                <StateSelect label="states" onSelect={saveData} required/>
            </Box>


            <Box py={3}>
                <FormLabel>City</FormLabel>
                <Input placeholder='City' name="city" onChange={saveData} required/>
            </Box>

            <Box py={3}>
                {/* <Button colorScheme="green" onClick={sendData}>Submit</Button> */}
                <Button colorScheme="green" type="submit">Submit</Button>
            </Box>
            </form>
        </FormControl>
    </Container>
  )
}
export default Donar;