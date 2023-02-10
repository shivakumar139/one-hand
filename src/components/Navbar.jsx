import { Flex, Heading, Link, Box, Spacer, Button, Img } from "@chakra-ui/react";

import { Link as RouterLink, useNavigate } from "react-router-dom";

import logo from "../utils/img/icon.png"
const Navbar = ()=>{

    const navigate = useNavigate();
    return(
        <nav>
            <Flex px={9} py={3} bg="green.100" align="center">
                <Box>
                    <img src={logo} className="navbar-brand" width="60" height="24"/>
                </Box>
                <Spacer/>
                <Box>
                    <Link p={3} as={RouterLink} to="/">Home</Link>
                    <Link p={3} as={RouterLink} to="/receiver">Receiver</Link>
                    <Link p={3} as={RouterLink} to="/ngo">Search Ngo</Link>
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