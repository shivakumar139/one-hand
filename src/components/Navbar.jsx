import { Flex, Heading, Link, Box, Spacer, Button } from "@chakra-ui/react";

const Navbar = ()=>{
    return(
        <nav>
            <Flex px={9} py={3} bg="green.100" align="center">
                <Box>
                    <Heading>Logo</Heading>
                </Box>
                <Spacer/>
                <Box>
                    <Link p={3}>Home</Link>
                    <Link p={3}>Receiver</Link>
                    <Link p={3}>Contact us</Link>
                </Box>
                <Spacer/>
                <Box>
                    <Button colorScheme="green" color="white" size="lg">
                        Become a Donar
                    </Button>
                </Box>
            </Flex>
        </nav>


    );
}

export default Navbar;