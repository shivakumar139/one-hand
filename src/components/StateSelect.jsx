import { Select, FormLabel } from "@chakra-ui/react";
import states from "../utils/states.json"

const StateSelect = ({label, onSelect, data}) => {

  const district = [...Object.keys(states)]
  district.sort()
  
  return (
    <>
        <FormLabel>{label}</FormLabel>
        <Select placeholder='Select State' onChange={onSelect} name="state" value={data}>

            {district?.map((state, index) =>{
                return <option key={index} value={state}>{state}</option>
            })}

        </Select>
    
    </>
  )
}

export default StateSelect;