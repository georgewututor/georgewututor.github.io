import { Card, Grid, List, Stack, Text, Title } from '@mantine/core'

export default function HowTutoringWorks() {
  return (
    <div style={{ padding: '2rem 1rem', maxWidth: 1000, margin: '0 auto' }}>
      <Stack gap="xl">
        <Title order={2}>
          How Tutoring Works
        </Title>

        <Grid gutter="xl" align="stretch">
          {/* Student Readiness */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Card withBorder radius="md" p="lg" h="100%">
              <Stack gap="sm" justify="space-between" h="100%">
                <div>
                  <Title order={4} mb="xs">Student Prerequisites</Title>
                  <List spacing={2} withPadding={false}>
                    <List.Item>Have access to a personal laptop</List.Item>
                    <List.Item>Are comfortable typing without major difficulty</List.Item>
                  </List>
                </div>
              </Stack>
            </Card>
          </Grid.Col>

          {/* Session Format */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Card withBorder radius="md" p="lg" h="100%">
              <Stack gap="sm" justify="space-between" h="100%">
                <div>
                  <Title order={4} mb="xs">Session Format</Title>
                  <List spacing={2} withPadding={false}>
                    <List.Item>Both 1:1 or small group (1:n) are possible</List.Item>
                    <List.Item>Both online or in-person are possible</List.Item>
                  </List>
                </div>
                <Text size="sm" c="dimmed">
                  In-person location is flexible and discussed individually.
                </Text>
              </Stack>
            </Card>
          </Grid.Col>

          {/* Session Length & Frequency */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Card withBorder radius="md" p="lg" h="100%">
              <Stack gap="sm" justify="space-between" h="100%">
                <div>
                  <Title order={4} mb="xs">Length, Frequency & Scheduling</Title>
                  <List spacing={2} withPadding={false}>
                    <List.Item>Typical sessions are ~1 hour, usually once per week</List.Item>
                    <List.Item>Flexible scheduling with 24-hour notice for cancellations</List.Item>
                  </List>
                </div>
                <Text size="sm" c="dimmed">
                  Different session lengths and frequencies can be discussed individually.
                </Text>
              </Stack>
            </Card>
          </Grid.Col>

          {/* Scheduling & Cancellations */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Card withBorder radius="md" p="lg" h="100%">
                <Stack gap="sm" justify="space-between" h="100%">
                <div>
                    <Title order={4} mb="xs">Session Structure</Title>
                    <List spacing={2} withPadding={false}>
                    <List.Item>Check in with a review of content and goals</List.Item>
                    <List.Item>Main work on concepts, projects, or problems</List.Item>
                    <List.Item>Independent practice with guidance</List.Item>
                    <List.Item>Plan next steps before the following session</List.Item>
                    </List>
                </div>
                </Stack>
            </Card>
          </Grid.Col>

          {/* Communication & Progress */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Card withBorder radius="md" p="lg" h="100%">
                <Stack gap="sm" justify="space-between" h="100%">
                <div>
                    <Title order={4} mb="xs">Communication & Progress</Title>
                    <List spacing={2} withPadding={false}>
                    <List.Item>Session-by-session updates on student progress</List.Item>
                    <List.Item>Parents are encouraged to reach out with any questions or concerns</List.Item>
                    </List>
                </div>
                <Text size="sm" c="dimmed">
                    Open and clear communication is a priority to ensure students stay on track and parents feel informed.
                </Text>
                </Stack>

            </Card>
          </Grid.Col>

          {/* Pricing */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Card withBorder radius="md" p="lg" h="100%">
              <Stack gap="sm" justify="space-between" h="100%">
                <div>
                  <Title order={4} mb="xs">Pricing</Title>
                  <List spacing={2} withPadding={false}>
                    <List.Item>Varies by format and session type</List.Item>
                    <List.Item>Discussed during the free intro call</List.Item>
                  </List>
                </div>
                <Text size="sm" c="dimmed">
                  This ensures expectations are aligned before starting.
                </Text>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Stack>
    </div>
  )
}
