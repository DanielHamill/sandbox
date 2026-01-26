import { Card, Flex, Text, Badge, Heading, Box } from '@radix-ui/themes';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A description of your first project.",
      technologies: ["React", "TypeScript", "Node.js"]
    },
    {
      id: 2,
      title: "Project Two",
      description: "A description of your second project.",
      technologies: ["Python", "Django", "PostgreSQL"]
    },
    {
      id: 3,
      title: "Project Three",
      description: "A description of your third project.",
      technologies: ["Vue.js", "Express", "MongoDB"]
    }
  ];

  return (
    <Box className="page">
      <Flex>
        <Box m="6" mt="9">
          <Heading size="9" weight="light" mb="4">My Projects</Heading>
          <Text as="p" size="4">
            Here are some of the projects I've worked on recently.
          </Text>
        </Box>
      <Flex gap="4" wrap="wrap" mt="9" mr="6">
        {projects.map(project => (
          <Card key={project.id} style={{ flex: '1 1 300px', maxWidth: '400px' }}>
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
