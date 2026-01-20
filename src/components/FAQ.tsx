import { Accordion, Stack, Title, Text, Anchor } from '@mantine/core';

export default function FAQ() {
  return (
    <div style={{ padding: '2rem 1rem', maxWidth: 1000, margin: '0 auto' }}>
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
          <Accordion.Item value="demographic">
            <Accordion.Control>
              Who are your tutoring sessions best suited for?
            </Accordion.Control>
            <Accordion.Panel>
              <Text>
                I generally tutor <strong>high school students and older</strong>, but I’m
                also open to working with younger students who have a strong interest in
                computer science. Sessions are adapted to each student’s skill level and
                learning style.
              </Text>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="topics">
            <Accordion.Control>
              What topics do you cover in tutoring?
            </Accordion.Control>
            <Accordion.Panel>
              <Text>
                I cover core computer science topics such as <strong>Python, algorithms,
                data structures, OOP, recursion, and problem-solving strategies</strong>.
                I also support <strong>AP CS, college-level CS courses,</strong> and 
                <strong>coding interview preparation</strong>.
              </Text>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="personalization">
            <Accordion.Control>
              Do you provide organized or personalized content?
            </Accordion.Control>
            <Accordion.Panel>
              <Text>
                Yes! I prepare structured content and tailor it to each student’s needs.
                Every session is personalized based on the student’s current knowledge, 
                goals, and preferred learning style, ensuring efficient and meaningful progress.
              </Text>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>


        <Stack gap={16} style={{ marginTop: 32 }}>
          <Text size="lg">
            Have any further questions? Schedule a{' '}
            <Anchor href="YOUR_SCHEDULING_LINK" target="_blank">
              <strong>15-minute call</strong>
            </Anchor>{' '}
            to see if this tutoring style is the right fit.
          </Text>
        </Stack>

      </Stack>
    </div>
  );
}
