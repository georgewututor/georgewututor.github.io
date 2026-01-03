import { Container, Card, Title, Text, Badge, Stack } from '@mantine/core';

export function Pricing() {
  return (
    <Container size="lg" py="xl" style={{ backgroundColor: '#f8f9fa' }}>
      <Title order={2} size="2.5rem" ta="center" mb="xl">
        Pricing
      </Title>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <Card shadow="md" padding="xl" radius="md" withBorder>
          <Stack gap="md" align="center">
            <Badge size="xl" variant="light" color="blue" radius="md">
              Individual Sessions
            </Badge>
            <Title order={1} size="3rem" c="blue">
              $80
            </Title>
            <Text size="lg" fw={500}>
              per 60-minute session
            </Text>
            <Text size="sm" c="dimmed" ta="center" mt="md">
              Flexible scheduling. Pay per session with no long-term commitments required.
              Package discounts available for students booking multiple sessions.
            </Text>
            {/* Optional package pricing - uncomment if needed
            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e0e0e0', width: '100%' }}>
              <Text size="sm" fw={600} mb="sm">Package Deals:</Text>
              <Text size="sm" c="dimmed">4 sessions: $300 (save $20)</Text>
              <Text size="sm" c="dimmed">8 sessions: $560 (save $80)</Text>
            </div>
            */}
          </Stack>
        </Card>
      </div>
    </Container>
  );
}

