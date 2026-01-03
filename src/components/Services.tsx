import { Container, Grid, Card, Title, Text } from '@mantine/core';

const services = [
  {
    title: 'Python',
    description: 'Master Python programming from basics to advanced concepts. Perfect for beginners and those looking to strengthen their skills.',
  },
  {
    title: 'Java',
    description: 'Comprehensive Java tutoring covering object-oriented programming, data structures, and enterprise development patterns.',
  },
  {
    title: 'Data Structures & Algorithms',
    description: 'Deep dive into DSA concepts, problem-solving techniques, and interview preparation. Essential for technical interviews.',
  },
  {
    title: 'AP Computer Science',
    description: 'Expert preparation for AP CS A and AP CS Principles. Achieve your target score with personalized guidance and practice.',
  },
];

export function Services() {
  return (
    <Container size="lg" py="xl" style={{ backgroundColor: '#f8f9fa' }}>
      <Title order={2} size="2.5rem" ta="center" mb="md">
        Services & Subjects
      </Title>
      <Text size="lg" ta="center" c="dimmed" mb="xl">
        Serving High School through College Students
      </Text>
      <Grid gutter="lg">
        {services.map((service) => (
          <Grid.Col key={service.title} span={{ base: 12, sm: 6 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
              <Title order={3} size="1.5rem" mb="sm">
                {service.title}
              </Title>
              <Text size="sm" c="dimmed">
                {service.description}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

