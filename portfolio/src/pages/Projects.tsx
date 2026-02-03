import { Card, Flex, Text, Badge, Heading, Box } from '@radix-ui/themes';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Shapes Factory",
      description: "Train a shape classifier in your browser.",
      technologies: ["Full-stack", "React", "Python", "Pytorch"],
      url: "https://danielhamill.github.io/shapes-factory/"
    },
    {
      id: 2,
      title: "Pixel Canvas",
      description: "Draw on a responsive pixel-art canvas.",
      technologies: ["Frontend", "JavaScript"],
      url: "https://danielhamill.github.io/sandbox/"
    },
    {
      id: 3,
      title: "This Website",
      description: "I made and hosted this website myself!",
      technologies: ["TypeScript", "React", "Radix UI"],
      url: ""
    }
  ];

  return (
    <Box className="page">
      <Flex wrap="wrap" m="4">
        <Box m="6" mb="2" mt="9">
          <Heading size="9" weight="light" mb="4">My Projects</Heading>
          <Text as="p" size="4">
            Here are some of the projects I've worked on recently.
          </Text>
        </Box>
        <Flex gap="4" wrap="wrap" m="6" justify="center">
          {projects.map(project => (
            <Card 
              key={project.id} 
              style={{ flex: '1 1 200px', maxWidth: '300px', cursor: project.url ? 'pointer' : 'default' }}
              onClick={() => project.url && (window.location.href = project.url)}
            >
              <Heading size="5" mb="2">{project.title}</Heading>
              <Text as="p" size="2" color="gray" mb="3">
                {project.description}
              </Text>
              <Flex gap="2" wrap="wrap">
                {project.technologies.map(tech => (
                  <Badge key={tech} variant="soft">{tech}</Badge>
                ))}
              </Flex>
            </Card>
          ))}
        </Flex>
      </Flex>
      
    </Box>
  );
}

export default Projects;
