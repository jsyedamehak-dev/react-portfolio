import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  const socials = [
    {
      icon: faGithub,
      url: "https://github.com/",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/",
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/",
    },
  ];

  const handleClick = (e, id) => {
    e.preventDefault();

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });

      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <Box
      as="header"
      bg="black"
      color="white"
      position="fixed"
      width="100%"
      zIndex="1000"
      padding="1rem 2rem"
    >
      <HStack justifyContent="space-between">
        <HStack spacing="1.5rem">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </a>
          ))}
        </HStack>

        <HStack spacing="2rem">
          <a
            href="#projects-section"
            onClick={(e) => handleClick(e, "projects-section")}
          >
            Projects
          </a>

          <a
            href="#contactme-section"
            onClick={(e) => handleClick(e, "contactme-section")}
          >
            Contact Me
          </a>
        </HStack>
      </HStack>
    </Box>
  );
}

export default Header;