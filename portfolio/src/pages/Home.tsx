import { Box } from "@radix-ui/themes";
import { Heading, Text } from "@radix-ui/themes";

function Home() {
  return (
    <Box p="6" mt="6">
      <Heading size="9" weight="light" mb="4">Welcome</Heading>
      <Text size="4">Hi, I'm a Software Engineer</Text><br />
      <Text size="4">Building innovative solutions with modern technologies.</Text>
    </Box>
  );
}

export default Home;
