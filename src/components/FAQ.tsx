import { Accordion, Stack, Title, Text } from '@mantine/core';

export default function FAQ() {
  return (
    <div style={{ padding: '4rem 1rem', maxWidth: 1000, margin: '0 auto' }}>
      <Stack gap="md">
        <Title order={2}>Frequently Asked Questions</Title>

        <Accordion
          multiple
          variant="default"
          styles={(theme) => ({
            item: {
              borderBottom: `1px solid ${theme.colors.gray[3]}`,
            },
            control: {
              paddingLeft: '0.75rem',
              paddingRight: '0.75rem',
              paddingTop: '0.75rem',
              paddingBottom: '0.75rem',
            },
            label: {
              color: theme.colors.dark[7],
              fontWeight: 500,
            },
            chevron: {
              color: theme.colors.gray[6],
            },
            panel: {
              paddingLeft: '2rem',
              paddingBottom: '0.75rem',
              paddingTop: '0.25rem',
            },
          })}
        >
          <Accordion.Item value="format">
            <Accordion.Control>
              What does a typical tutoring session look like?
            </Accordion.Control>
            <Accordion.Panel>
              <Text>
                Sessions can be held <strong>online or in person</strong>, and may be
                <strong> one-on-one</strong> or in <strong>small groups (1:n)</strong>.
                Each session is tailored to the student’s goals and typically includes
                concept review, guided practice, and problem-solving.
              </Text>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="subjects">
            <Accordion.Control>
              What subjects do you tutor?
            </Accordion.Control>
            <Accordion.Panel>
              <Text>
                I focus on computer science topics such as algorithms, data structures,
                Python, and core CS fundamentals, as well as exam and interview preparation.
              </Text>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="students">
            <Accordion.Control>
              What age range or experience level do you work with?
            </Accordion.Control>
            <Accordion.Panel>
              <Text>
                I work with high school and college students, from beginners building
                foundations to advanced students refining problem-solving skills.
              </Text>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="customization">
            <Accordion.Control>
              Are sessions personalized?
            </Accordion.Control>
            <Accordion.Panel>
              <Text>
                Yes. I adapt each session to the student’s pace, learning style, and goals
                rather than following a fixed curriculum.
              </Text>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="parents">
            <Accordion.Control>
              How do you communicate progress with parents?
            </Accordion.Control>
            <Accordion.Panel>
              <Text>
                I’m happy to provide regular updates on progress, areas of improvement, and
                next steps to ensure transparency and alignment.
              </Text>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Stack>
    </div>
  );
}
