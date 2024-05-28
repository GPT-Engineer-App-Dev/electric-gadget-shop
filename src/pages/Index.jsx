import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link } from "@chakra-ui/react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with all the newest features.",
    image: "smartphone.jpg",
    price: "$699",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for all your needs.",
    image: "laptop.jpg",
    price: "$999",
  },
  {
    id: 3,
    name: "Camera",
    description: "Capture your moments with stunning clarity.",
    image: "camera.jpg",
    price: "$499",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <Flex gap={4}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">Contact</Link>
        </Flex>
      </Flex>

      <Box as="main" p={4}>
        <VStack spacing={4} align="stretch">
          <Heading as="h1" size="2xl" textAlign="center" my={8}>
            Featured Products
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {products.map((product) => (
              <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                <Image src={product.image} alt={product.name} mb={4} />
                <Heading as="h3" size="md">{product.name}</Heading>
                <Text>{product.description}</Text>
                <Text fontWeight="bold" mt={2}>{product.price}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Box>

      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 ElectroShop</Text>
          <Flex gap={4}>
            <Flex align="center">
              <FaPhone />
              <Text ml={2}>+1 234 567 890</Text>
            </Flex>
            <Flex align="center">
              <FaEnvelope />
              <Text ml={2}>contact@electroshop.com</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;