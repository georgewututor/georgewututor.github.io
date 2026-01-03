import { Container, Accordion, Title, Text } from '@mantine/core';

export function Policies() {
  return (
    <Container size="lg" py="xl">
      <Title order={2} size="2.5rem" ta="center" mb="xl">
        Policies
      </Title>
      <Accordion variant="separated" radius="md">
        <Accordion.Item value="cancellation">
          <Accordion.Control>
            <Text fw={600}>Cancellation Policy</Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text size="sm" c="dimmed">
              Please cancel or reschedule at least 24 hours in advance. Cancellations made less than 
              24 hours before the scheduled session may be subject to a 50% cancellation fee. 
              Emergency situations will be handled on a case-by-case basis with understanding and flexibility.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="integrity">
          <Accordion.Control>
            <Text fw={600}>Academic Integrity</Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text size="sm" c="dimmed">
              I am committed to maintaining the highest standards of academic integrity. My goal is to 
              help you understand concepts and develop problem-solving skills, not to complete assignments 
              for you. I will guide and teach, but all submitted work must be your own. This approach 
              ensures genuine learning and long-term success.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="expectations">
          <Accordion.Control>
            <Text fw={600}>Student Expectations</Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text size="sm" c="dimmed" mb="sm">
              To maximize the value of our sessions, students are expected to:
            </Text>
            <Text size="sm" c="dimmed" component="ul" style={{ paddingLeft: '1.5rem' }}>
              <li>Come prepared with questions and specific topics you'd like to focus on</li>
              <li>Complete any practice problems or assignments we discuss between sessions</li>
              <li>Communicate openly about concepts you're struggling with</li>
              <li>Respect scheduled session times and maintain punctuality</li>
              <li>Bring necessary materials (textbooks, assignments, code examples, etc.)</li>
            </Text>
            <Text size="sm" c="dimmed" mt="sm">
              Remember, progress takes time and consistent effort. Be patient with yourself and trust the process.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

