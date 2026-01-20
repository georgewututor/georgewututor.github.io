import { Anchor, Grid, Image, Stack, Text, Title } from '@mantine/core'

export default function AboutMe() {
  return (
    <div style={{ padding: '2rem 1rem', maxWidth: 1000, margin: '0 auto' }}>
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

            {/* Bio info with labels */}
            <Stack gap={3}>
              <Text><strong>Education:</strong> UC San Diego, B.S. in Computer Engineering</Text>
              <Text><strong>Industry Experience:</strong> Software Engineer at Nuro; Interned at Atlassian & TikTok</Text>
              <Text><strong>Teaching Experience:</strong> 1 year tutoring high school and college students</Text>
              <Text><strong>Specialties:</strong> Algorithms, data structures, Python, and teaching CS as a problem-solving tool</Text>
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>

      {/* Teaching Philosophy */}
      <Stack gap="lg" mt="4rem">
        <div>
          <Title order={3}>My Teaching Philosophy</Title>
          <Text>
            I focus on building strong conceptual understanding first, helping students see computer science as a tool for solving real-world problems. I prioritize active engagement through questions, discussions, and hands-on exercises to make learning interactive and meaningful. Above all, I aim to foster long-term growth by developing critical thinking skills, problem-solving habits, and a growth mindset that students can carry forward in CS and beyond.  
            <br /><br />
            I enjoy guiding students to apply these skills in projects and problem-solving challenges, helping them gain confidence and a deeper appreciation for how CS can be a powerful tool for creativity and real-world impact.
          </Text>
        </div>
      </Stack>
    </div>
  )
}
