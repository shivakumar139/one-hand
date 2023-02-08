import IndianStates from "../utils/IndianStates.json";
import { Select, FormLabel } from "@chakra-ui/react";

const StateSelect = () => {
  return (
    <>
        <FormLabel>State</FormLabel>
        <Select placeholder='Select State'>

            {IndianStates?.map(state =>{
                return <option key={state.code} value={state.name}>{state.name}</option>
            })}

        </Select>
    
    </>
  )
}

export default StateSelect;