import { Button, Container, Stack, Text, Title } from '@mantine/core'

export default function Hero() {
  return (
    <div
      style={{
        height: '65vh',
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0,0,0,0.5)), url(/banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container size="md">
        <Stack gap="md" align="flex-start">

          <Title order={1} c="white">
            Personalized CS Tutoring
          </Title>

          {/* Combined description for smoother flow */}
          <Text c="gray.2" size="lg">
            Build strong CS fundamentals and master algorithms and data structures while developing the skills to tackle complex problems and design meaningful projects. Learn how to use code as a tool to understand, explore, and shape the world around you.
          </Text>

          <Button
            component="a"
            href="https://calendly.com/georgewututor/book"
            size="md"
            radius="md"
            style={{ marginTop: '1.5rem' }}
          >
            Book a Free Intro Call
          </Button>

          <Text c="gray.3" size="sm" mt="xs">
            A short discussion to ensure we’re a good fit and align on expectations.
          </Text>
        </Stack>
      </Container>
    </div>
  )
}
