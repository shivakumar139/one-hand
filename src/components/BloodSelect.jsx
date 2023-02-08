import { FormLabel, Select } from "@chakra-ui/react";

const BloodSelect = ()=>{
    return(
        <>
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
        </>
    )
}

export default BloodSelect;