import React from "react";
import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import Card from "./Card";

function ProjectsSection() {
  const projects = [
    {
      title: "Little Lemon",
      description: "A restaurant website built with React.",
      imageSrc: "https://picsum.photos/200/200?random=1",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my work.",
      imageSrc: "https://picsum.photos/200/200?random=2",
    },
    {
      title: "React Calculator",
      description: "A calculator application built with React.",
      imageSrc: "https://picsum.photos/200/200?random=3",
    },
    {
      title: "Task Manager",
      description: "A simple application for managing daily tasks.",
      imageSrc: "https://picsum.photos/200/200?random=4",
    },
  ];

  return (
    <Box
      id="projects-section"
      minHeight="100vh"
      padding="6rem 2rem"
      bg="gray.50"
    >
      <Heading textAlign="center" marginBottom="3rem">
        Featured Projects
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="2rem" maxWidth="1000px" margin="auto">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default ProjectsSection;