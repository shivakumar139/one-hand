import { FormLabel, Select } from "@chakra-ui/react";

const BloodSelect = ({label, onSelect, data})=>{
    return(
        <>
            <FormLabel>{label}</FormLabel>
            <Select placeholder='Select Donation Type' name="bloodType" onChange={onSelect} value={data}>
                <option value="O-">O-</option>
                <option value="O+">O+</option>
                <option value="A-">A-</option>
                <option value="A+">A+</option>
                <option value="B-">B-</option>
                <option value="B+">B+</option>
                <option value="AB-">AB-</option>
                <option value="AB+">AB+</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="O">O</option>
                <option value="AB">AB</option>
            </Select>
        </>
    )
}

export default BloodSelect;