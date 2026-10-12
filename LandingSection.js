import React from "react";
import { Box, HStack, VStack, Image, Heading, Text } from "@chakra-ui/react";

function LandingSection() {
  const greeting = "Hello, I am Mehak!";
  const bio1 = "I am a passionate React developer.";
  const bio2 = "I enjoy creating beautiful and user-friendly web applications.";

  return (
    <Box
      id="landing-section"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.100"
      padding="2rem"
    >
      <HStack spacing="5rem">
        <Image
          src="https://i.pravatar.cc/150?img=7"
          alt="Avatar"
          borderRadius="full"
          boxSize="150px"
        />

        <VStack align="start">
          <Heading>{greeting}</Heading>
          <Text fontSize="xl">{bio1}</Text>
          <Text>{bio2}</Text>
        </VStack>
      </HStack>
    </Box>
  );
}

export default LandingSection;