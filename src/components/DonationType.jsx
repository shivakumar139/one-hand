import { Select, FormLabel } from "@chakra-ui/react";

export const DonationType = ({formLabel, onSelect, data}) => {
  return (
    <>
            <FormLabel>{formLabel}</FormLabel>
                <Select placeholder='Select Donation Type' onChange={onSelect} name="donationType" value={data}>
                    <option value="Blood">Blood</option>
                    <option value="Pads">Pads</option>
                    <option value="Oxygen Cylinder">Oxygen Cylinder</option>
                    <option value="Medicines">Medicines</option>
                    <option value="Others">Others</option>
                </Select>
    </>
  )
}
