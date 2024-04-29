import { Box, Container, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading mb={2}>SHEGLAM Brows On Demand 2-In-1 Brow Pencil - Chocolate</Heading>
          <Image src="https://images.unsplash.com/photo-1553452118-621e1f860f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxTSEVHTEFNJTIwQnJvd3MlMjBPbiUyMERlbWFuZCUyMDItSW4tMSUyMEJyb3clMjBQZW5jaWwlMjAtJTIwQ2hvY29sYXRlfGVufDB8fHx8MTcxNDQwNzM2OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="SHEGLAM Brow Pencil" />
          <Text mt={4}>Waterproof Liquid Eyebrow Pen Sweat-proof Anti-Oil Natural Brow Filling Outlining Eyebrow Cream Gel Makeup.</Text>
          <Text mt={2} color="green.500">
            Black Friday Special
          </Text>
          <Link href="http://api-shein.shein.com/h5/sharejump/appjump?link=VfNkrc7zBsB&localcountry=LB&url_from=GM7507548790084997120" isExternal color="teal.500">
            Buy now on SHEIN <FaShoppingCart />
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
