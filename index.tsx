import { Box, Button, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box bgGradient="linear(to-r, teal.500, blue.500)" minH="100vh" py={20}>
      <Container maxW="6xl">
        <Stack direction={['column', 'row']} spacing={10} align="center">
          <Box flex="1" color="white">
            <Heading as="h1" size="2xl" mb={6}>
              Welcome to Gates of Egypt
            </Heading>
            <Text fontSize="xl" mb={6}>
              Explore our amazing internship opportunity and boost your frontend skills.
            </Text>
            <Button colorScheme="teal" size="lg">
              Apply Now
            </Button>
          </Box>
          <Box flex="1">
            <Image src="/hero.png" alt="Hero Image" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}