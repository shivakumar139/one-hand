import { Flex, Heading, Link, Box, Spacer, Button } from "@chakra-ui/react";

import { Link as RouterLink, useNavigate } from "react-router-dom";
const Navbar = ()=>{

    const navigate = useNavigate();
    return(
        <nav>
            <Flex px={9} py={3} bg="green.100" align="center">
                <Box>
                    <Heading>Logo</Heading>
                </Box>
                <Spacer/>
                <Box>
                    <Link p={3} as={RouterLink} to="/">Home</Link>
                    <Link p={3} as={RouterLink} to="/receiver">Receiver</Link>
                    <Link p={3} as={RouterLink} to="/contact">Contact us</Link>
                </Box>
                <Spacer/>
                <Box>
                    <Button colorScheme="green" color="white" size="lg" onClick={()=> navigate("/donar")}>
                        Become a Donar
                    
                    </Button>
                    
                </Box>
            </Flex>
        </nav>


    );
}

export default Navbar;