import { Select, FormLabel } from "@chakra-ui/react";
import states from "../utils/states.json"

const SelectCity = ({state, onSelect, label, data}) => {

    let cityArr;
    if(state){
        cityArr = states[state];
        cityArr.sort()
    }
  
  
  return (
    <>
        <FormLabel>{label}</FormLabel>
        <Select placeholder='Select State' onChange={onSelect} name="city" value={data}>

            {cityArr?.map((key, index) =>{
                return <option key={index} value={key}>{key}</option>
            })}

        </Select>
    
    </>
  )
}

export default SelectCity;