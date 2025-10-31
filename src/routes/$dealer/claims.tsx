import {
  Box,
  Divider,
  Flex,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { ViewingQuarterComboBox } from "../../lib/components/viewingQuaterCombo";
import { DistributorListTable } from "../../lib/components/distributorListTable";
import { DealerListTable } from "../../lib/components/dealerListTable";
import { ClaimListTable } from "../../lib/components/claimsListTable";

export const Route = createFileRoute("/$dealer/claims")({
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
            Dealer Dashboard - Claims
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
      <Grid>
        <Grid.Col span={12}>
          <Paper p="sm">
            <DistributorListTable />
          </Paper>
        </Grid.Col>
        <Grid.Col span={12}>
          <Paper p="sm">
            <DealerListTable />
          </Paper>
        </Grid.Col>
        <Grid.Col span={12}>
          <Paper p="sm">
            <ClaimListTable />
          </Paper>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
