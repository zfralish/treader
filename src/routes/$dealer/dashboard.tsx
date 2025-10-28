import {
  Box,
  Divider,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { ViewingQuarterComboBox } from "../../lib/components/viewingQuaterCombo";

export const Route = createFileRoute("/$dealer/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const { dealer } = Route.useParams();
  const theme = useMantineTheme();

  return (
    <Box p={15}>
      <Group justify="space-between" align="center" h={75}>
        <Box>
          <Text fz={32} fw={700} c={theme.primaryColor}>
            Dealer Dashboard
          </Text>
        </Box>
        <Group align="center">
          <Text size="lg">View QTR:</Text>
          <Box w={300}>
            <ViewingQuarterComboBox />
          </Box>
        </Group>
      </Group>

      <Divider my="md" size="md" />
      <Grid mt={50}>
        <Grid.Col span={4}>
          <Paper shadow="xs" p="sm">
            <Stack>
              <Text size="lg" c={theme.primaryColor}>
                Welcome, "Administrator"
              </Text>
              <Group>
                <Stack gap="0">
                  <Text c={theme.colors.dark[2]}>Location:</Text>
                  <Text c={theme.colors.dark[2]}>PIN:</Text>
                  <Text c={theme.colors.dark[2]}>Enrolled:</Text>
                  <Text c={theme.colors.dark[2]}>Role:</Text>
                  <Text c={theme.colors.dark[2]}>Primary:</Text>
                  <Text c={theme.colors.dark[2]}>Secondary:</Text>
                </Stack>
                <Stack gap="0">
                  <Text>AL</Text>
                  <Text>FRA001</Text>
                  <Text>12/21/2018</Text>
                  <Text>ADMIN</Text>
                  <Text>Booger</Text>
                  <Text>Snot</Text>
                </Stack>
              </Group>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
