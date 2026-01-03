import { Container, Grid, Avatar, Title, Text, List } from '@mantine/core';

export function About() {
  return (
    <Container size="lg" py="xl">
      <Title order={2} size="2.5rem" ta="center" mb="xl">
        About Me
      </Title>
      <Grid gutter="xl" align="center">
        <Grid.Col span={{ base: 12, md: 4 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              src="/profile-placeholder.jpg"
              alt="Profile"
              size={200}
              radius="md"
              style={{
                backgroundColor: '#e7f1ff',
                border: '3px solid #1F3A5F',
              }}
            />
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Title order={3} size="1.75rem" mb="md">
            Your Dedicated CS Tutor
          </Title>
          <Text size="md" mb="lg" c="dimmed">
            I'm a Computer Science graduate from UC San Diego with a perfect 4.0 GPA and 
            real-world experience as a Software Engineer Intern. My passion for teaching 
            combined with industry expertise helps students not only understand concepts 
            but excel in their CS journey.
          </Text>
          <Title order={4} size="1.25rem" mb="sm">
            Credentials
          </Title>
          <List size="md" spacing="xs">
            <List.Item>UC San Diego - Computer Science Degree</List.Item>
            <List.Item>4.0 GPA - Academic Excellence</List.Item>
            <List.Item>Software Engineering Intern Experience</List.Item>
            <List.Item>Expert in Python, Java, DSA, and AP CS</List.Item>
          </List>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

