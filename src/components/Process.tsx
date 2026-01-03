import { Container, Grid, Card, Badge, Title, Text } from '@mantine/core';

const steps = [
  {
    number: 1,
    title: 'Free Intro Call',
    description: 'We start with a no-obligation consultation to understand your goals, assess your current level, and discuss how I can help you succeed.',
  },
  {
    number: 2,
    title: 'Weekly 1:1 Sessions',
    description: 'Regular personalized sessions tailored to your learning style and pace. Flexible scheduling that fits your busy life.',
  },
  {
    number: 3,
    title: 'Practice + Feedback',
    description: 'Work through challenging problems together with immediate feedback. Build confidence through hands-on practice and guided problem-solving.',
  },
  {
    number: 4,
    title: 'Progress Tracking',
    description: 'Monitor your improvement with regular assessments and progress reports. Celebrate milestones and adjust strategies as needed.',
  },
];

export function Process() {
  return (
    <Container size="lg" py="xl">
      <Title order={2} size="2.5rem" ta="center" mb="md">
        How It Works
      </Title>
      <Text size="lg" ta="center" c="dimmed" mb="xl">
        A proven process designed for your success
      </Text>
      <Grid gutter="xl">
        {steps.map((step) => (
          <Grid.Col key={step.number} span={{ base: 12, sm: 6, md: 3 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
              <div style={{ marginBottom: '1rem' }}>
                <Badge size="lg" radius="xl" variant="filled" color="blue">
                  Step {step.number}
                </Badge>
              </div>
              <Title order={3} size="1.25rem" mb="sm">
                {step.title}
              </Title>
              <Text size="sm" c="dimmed">
                {step.description}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

