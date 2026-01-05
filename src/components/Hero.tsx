import { Button, Container, Stack, Text, Title } from '@mantine/core'

export default function Hero() {
  return (
    <div
      style={{
        height: '50vh',
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0,0,0,0.5)), url(/banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container size="sm">
        <Stack gap="md" align="flex-start">
          <Title order={1} c="white">
            CS Tutoring
          </Title>

          <Text c="gray.2" size="lg">
            Personalized computer science tutoring for high school and college
            students. Algorithms, data structures, and interview prep.
          </Text>

          <Button size="md" radius="md" style={{ marginTop: '1.5rem' }}>
            Book Free Call
          </Button>
        </Stack>
      </Container>
    </div>
  )
}
