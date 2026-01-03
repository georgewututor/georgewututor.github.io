import { Container, Title, Text, Button } from '@mantine/core';

export function Hero() {
  return (
    <Container
      fluid
      style={{
        background: 'linear-gradient(135deg, #1F3A5F 0%, #2c5bd9 100%)',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        color: 'white',
      }}
    >
      <Container size="lg" style={{ textAlign: 'center' }}>
        <Title
          order={1}
          size="3.5rem"
          fw={700}
          style={{ marginBottom: '1.5rem', lineHeight: 1.2 }}
        >
          Expert CS Tutoring
        </Title>
        <Text
          size="xl"
          style={{ marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem', opacity: 0.95 }}
        >
          Personalized one-on-one tutoring in Computer Science. Master Python, Java, Data Structures, 
          Algorithms, and AP Computer Science with a UCSD graduate dedicated to your success.
        </Text>
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
          Book a Free Intro Call
        </Button>
      </Container>
    </Container>
  );
}

