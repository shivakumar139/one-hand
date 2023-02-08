import IndianStates from "../utils/IndianStates.json";
import { Select, FormLabel } from "@chakra-ui/react";

const StateSelect = ({label, onSelect}) => {
  return (
    <>
        <FormLabel>{label}</FormLabel>
        <Select placeholder='Select State' onChange={onSelect} name="state">

            {IndianStates?.map(state =>{
                return <option key={state.code} value={state.name}>{state.name}</option>
            })}

        </Select>
    
    </>
  )
}

export default StateSelect;