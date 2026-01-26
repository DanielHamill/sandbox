import { Box, Heading, Text, Flex, Card, Inset } from "@radix-ui/themes";

function About() {
  return (
    <Flex gap="3" mt="6">
      <Card style={{ maxHeight: '30vh' }} m="5" ml="9">
        <Inset clip="padding-box">
          <img
            src="https://i.etsystatic.com/49175848/r/il/15a6e6/5649807722/il_570xN.5649807722_ik9g.jpg"
            alt="Profile"
            style={{ height: '30vh', objectFit: 'cover' }}
          />
        </Inset>
      </Card>
      <Box p="4">
        <Heading size="9" mb="4" weight="light">About Me</Heading>
        <Text size="4" mb="4">I'm a passionate software engineer with experience in:</Text>
        <Flex asChild direction="column" gap="2" mb="4">
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><Text>Web Development</Text></li>
            <li><Text>React & TypeScript</Text></li>
            <li><Text>Backend Development</Text></li>
            <li><Text>Cloud Technologies</Text></li>
          </ul>
        </Flex>
        <Heading size="6" mb="3" weight="medium">Skills</Heading>
        <Text size="4">JavaScript, TypeScript, React, Node.js, Python, and more...</Text>
      </Box>
    </Flex>
    
  );
}

export default About;
