import { Anchor, Grid, Image, Stack, Text, Title } from '@mantine/core'

export default function AboutMe() {
  return (
    <div style={{ padding: '4rem 1rem', maxWidth: 1000, margin: '0 auto' }}>
      <Grid gutter="xl" align="flex-start">
        {/* Left: Profile Picture */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Image
            src="/pfp.jpg"
            alt="Profile picture"
            radius="md"
            style={{ width: '100%', objectFit: 'cover' }}
          />
        </Grid.Col>

        {/* Right: Bio */}
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Stack gap="sm" align="flex-start">
            {/* Name + LinkedIn */}

            <Title order={2} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              George Wu
              <Anchor href="https://www.linkedin.com/in/georgewu" target="_blank">
                <img
                  src="/linkedin_icon.png"
                  alt="LinkedIn"
                  style={{ height: '1.5em', verticalAlign: 'middle' }}
                />
              </Anchor>
            </Title>

            {/* Bio info */}
            <Text>
              🎓 Fourth-year Computer Engineering student at UC San Diego  
              💼 Algorithms Developer at Triton Unmanned Aerial Systems  
              👨‍🏫 Experienced tutoring high school and college students  
              💡 Specialize in algorithms, data structures, Python, and teaching foundational CS concepts
            </Text>
          </Stack>
        </Grid.Col>
      </Grid>

      {/* Teaching Philosophy Sections */}
      <Stack gap="lg" mt="4rem">
        <div>
          <Title order={3}>My Teaching Philosophy</Title>
          <Text>
            I focus on building strong conceptual understanding first, then gradually move
            into problem-solving and real-world applications. I tailor each session to the
            student’s pace and goals.
          </Text>
        </div>

        <div>
          <Title order={3}>Engagement and Interaction</Title>
          <Text>
            I emphasize active participation, asking questions, and hands-on exercises to
            ensure students internalize the material and gain confidence in their skills.
          </Text>
        </div>

        <div>
          <Title order={3}>Long-Term Growth</Title>
          <Text>
            Beyond immediate coursework or interview prep, I aim to instill critical thinking
            habits and a growth mindset that students can carry forward in CS and beyond.
          </Text>
        </div>
      </Stack>
    </div>
  )
}
