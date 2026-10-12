import React from "react";
import { HStack, VStack, Image, Heading, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Card({ title, description, imageSrc }) {
  return (
    <HStack
      spacing="1rem"
      padding="1.5rem"
      borderRadius="10px"
      boxShadow="md"
      bg="white"
      height="100%"
    >
      <Image
        src={imageSrc}
        alt={title}
        boxSize="100px"
        objectFit="cover"
        borderRadius="8px"
      />

      <VStack align="start" flex="1">
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
      </VStack>

      <FontAwesomeIcon icon={faArrowRight} size="1x" />
    </HStack>
  );
}

export default Card;