import { Divider, Grid, List, Stack, Title } from '@mantine/core'

export default function GoodFit() {
  return (
    <div style={{ padding: '2rem 1rem', maxWidth: 1000, margin: '0 auto' }}>
      <Stack gap="xl">
        <Title order={2}>
          Finding The Right Fit
        </Title>

        <Grid gutter="xl" align="stretch">
          {/* Good Fit */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack gap="sm">
              <Title order={3}>
                <span style={{ color: '#40C057' }}>✅</span> A Great Fit For Students Who...
              </Title>

              <List spacing="xs" size="md">
                <List.Item>
                  Want CS as a <strong>problem-solving</strong> tool
                </List.Item>
                <List.Item>
                  Enjoy <strong>building</strong> projects
                </List.Item>
                <List.Item>
                  Like <strong>breaking down</strong> complex problems
                </List.Item>
                <List.Item>
                  Want to <strong>connect</strong> coding to interests
                </List.Item>
              </List>
            </Stack>
          </Grid.Col>

          {/* Vertical Divider */}
          <Grid.Col
            span={{ base: 0, md: 2 }}
            visibleFrom="md"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Divider orientation="vertical" />
          </Grid.Col>

          {/* Not Ideal Fit */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack gap="sm">
              <Title order={3}>
                <span style={{ color: '#FA5252' }}>❌</span> May Not Be the Best Fit If...
              </Title>

              <List spacing="xs" size="md">
                <List.Item>
                  Need only <strong>last-minute homework help</strong>
                </List.Item>
                <List.Item>
                  Prefer <strong>memorization</strong> over logic
                </List.Item>
                <List.Item>
                  Want a rigid, <strong>standardized curriculum</strong>
                </List.Item>
                <List.Item>
                  Aren’t curious about the <strong>“why”</strong>
                </List.Item>
              </List>
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
    </div>
  )
}
