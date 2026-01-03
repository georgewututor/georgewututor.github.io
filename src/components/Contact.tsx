import { Container, Button, Title, Text, Stack, Anchor } from '@mantine/core';

export function Contact() {
  return (
    <Container
      size="lg"
      py="xl"
      style={{
        background: 'linear-gradient(135deg, #1F3A5F 0%, #2c5bd9 100%)',
        borderRadius: 'md',
        marginTop: '2rem',
        marginBottom: '2rem',
      }}
    >
      <Stack gap="xl" align="center" style={{ color: 'white', textAlign: 'center' }}>
        <Title order={2} size="2.5rem" c="white">
          Ready to Get Started?
        </Title>
        <Text size="lg" c="white" style={{ opacity: 0.95, maxWidth: '600px' }}>
          Let's discuss how I can help you achieve your CS goals. Schedule a free intro call 
          or reach out via email to get started.
        </Text>
        <Stack gap="md" align="center" mt="md">
          <Button
            component="a"
            href="https://calendly.com/your-link"
            target="_blank"
            size="lg"
            radius="md"
            style={{
              backgroundColor: 'white',
              color: '#1F3A5F',
            }}
          >
            Schedule Free Intro Call
          </Button>
          <Text size="sm" c="white" style={{ opacity: 0.9 }}>
            Or email me at:{' '}
            <Anchor
              href="mailto:your-email@example.com"
              c="white"
              underline="hover"
              fw={500}
            >
              your-email@example.com
            </Anchor>
          </Text>
          {/* Optional Stripe payment link - uncomment if needed
          <Button
            component="a"
            href="https://buy.stripe.com/your-link"
            target="_blank"
            size="md"
            variant="outline"
            radius="md"
            style={{
              borderColor: 'white',
              color: 'white',
            }}
          >
            Make a Payment
          </Button>
          */}
        </Stack>
      </Stack>
    </Container>
  );
}

