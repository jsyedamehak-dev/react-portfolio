import React from "react";
import {
  Box,
  Heading,
  VStack,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

function ContactMeSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting me!");
  };

  return (
    <Box
      id="contactme-section"
      minHeight="100vh"
      padding="6rem 2rem"
      bg="gray.100"
    >
      <Heading textAlign="center" marginBottom="3rem">
        Contact Me
      </Heading>

      <Box maxWidth="600px" margin="auto">
        <form onSubmit={handleSubmit}>
          <VStack gap="1rem">
            <Input
              placeholder="First Name"
              name="firstName"
              type="text"
              required
            />

            <Input
              placeholder="Email"
              name="email"
              type="email"
              required
            />

            <select
              name="type"
              required
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #CBD5E0",
              }}
            >
              <option value="">Select enquiry type</option>
              <option value="job">Job Opportunity</option>
              <option value="project">Project</option>
              <option value="other">Other</option>
            </select>

            <Textarea
              placeholder="Write your message..."
              name="comment"
              rows={6}
              required
            />

            <Button type="submit" width="100%">
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
}

export default ContactMeSection;