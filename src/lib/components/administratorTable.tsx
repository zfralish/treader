import {
  Box,
  Group,
  Stack,
  Table,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { ColDef, colorSchemeDark, themeQuartz } from "ag-grid-community"; // 👈 1. ADD THIS IMPORT
import { AgGridReact } from "ag-grid-react";

interface AdminTableData {
  quarter: string;
  // This is an "index signature".
  // It means "this object can have any other properties,
  // as long as the key is a string and the value is a string."
  [key: string]: string;
}

const elements: AdminTableData[] = [
  { quarter: "Q1", "2024": "313,382", "2025": "292,151" },
  { quarter: "Q2", "2024": "445,062", "2025": "437,932" },
  { quarter: "Q3", "2024": "352,820", "2025": "391,075" },
  { quarter: "Q4", "2024": "371,948", "2025": "68,633" },
  { quarter: "Yearly Totals", "2024": "1,483,212", "2025": "1,187,791" },
];

export function AdministratorTable() {
  const theme = useMantineTheme();

  const [colDefs, setColDefs] = useState<ColDef<AdminTableData>[]>([
    { field: "quarter" },
    { field: "2024" },
    { field: "2025" },
  ]);

  return (
    <Stack>
      <Group justify="space-between" w={"100%"}>
        <Title order={4} c={theme.primaryColor}>
          Administrator
        </Title>
      </Group>
      <Box style={{ height: 300 }}>
        <AgGridReact
          theme={themeQuartz.withPart(colorSchemeDark)}
          rowData={elements}
          columnDefs={colDefs}
        />
      </Box>
    </Stack>
  );
}
