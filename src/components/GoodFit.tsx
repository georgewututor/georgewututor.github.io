import { Card, Grid, List, Stack, Text, Title } from '@mantine/core'

export default function GoodFit() {
  return (
    <div style={{ padding: '2rem 1rem', maxWidth: 1000, margin: '0 auto' }}>
      <Stack gap="xl">
        <Title order={2} ta="center" mb="lg">
          Finding The Right Fit
        </Title>

        <Grid gutter="xl">
          {/* Good Fit */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card 
              shadow="md" 
              radius="lg" 
              padding="xl"
              withBorder
              style={{ height: '100%' }}
            >
              <Stack gap="sm">
                <Title order={3} mb="xs">
                  <span style={{ color: '#40C057' }}>✅</span> A Great Fit For Students Who...
                </Title>

                <List 
                  spacing="xs" 
                  size="md"
                >
                  <List.Item>
                    Want CS as a <strong>problem-solving</strong> tool, not just steps to follow
                  </List.Item>
                  <List.Item>
                    Are passionate about <strong>building</strong> projects, games, or apps
                  </List.Item>
                  <List.Item>
                    Enjoy <strong>breaking down</strong> complex problems logically
                  </List.Item>
                  <List.Item>
                    Want to <strong>connect</strong> coding to personal interests
                  </List.Item>
                  <List.Item>
                    Thrive on <strong>interactive, concept-driven</strong> learning
                  </List.Item>
                </List>
              </Stack>
            </Card>
          </Grid.Col>

          {/* Not Ideal Fit */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card 
              shadow="md" 
              radius="lg" 
              padding="xl"
              withBorder
              style={{ height: '100%' }}
            >
              <Stack gap="sm">
                <Title order={3} mb="xs">
                  <span style={{ color: '#FA5252' }}>❌</span> May Not Be the Best Fit If...
                </Title>

                <List 
                  spacing="xs" 
                  size="md"
                >
                  <List.Item>
                    Need only <strong>last-minute homework help</strong>
                  </List.Item>
                  <List.Item>
                    Prefer <strong>memorization</strong> over understanding logic
                  </List.Item>
                  <List.Item>
                    Want a rigid, <strong>standardized curriculum</strong>
                  </List.Item>
                  <List.Item>
                    Lack curiosity about the <strong>"why"</strong> behind solutions
                  </List.Item>
                </List>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Stack>
    </div>
  )
}