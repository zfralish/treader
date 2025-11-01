import {
  Box,
  Group,
  Stack,
  Table,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { ReactComponentElement, useState } from "react";
import { ColDef, colorSchemeDark, themeQuartz } from "ag-grid-community"; // 👈 1. ADD THIS IMPORT
import { AgGridReact } from "ag-grid-react";

type BaseRecord = {
  [year: string]: string | number;
  rsd: string;
};

// 2. Define the dynamic year/value part
// This means "any string key can have a number value"

const elements: BaseRecord[] = [
  { rsd: "Chris Blom", "2024": 67084, "2025": 292151 },
  { rsd: "Frank Fruciano", "2024": 39883, "2025": 437932 },
  { rsd: "Mike Case", "2024": 137655, "2025": 391075 },
  { rsd: "Phil Harris", "2024": 371948, "2025": 68633 },
  { rsd: "Totals", "2024": 1483212, "2025": 1187791 },
];

export function RSDTable() {
  const theme = useMantineTheme();
  const [colDefs, setColDefs] = useState<ColDef<BaseRecord>[]>([
    { field: "rsd" },
    { field: "2024" },
    { field: "2025" },
  ]);

  return (
    <Stack>
      <Group justify="space-between" w={"100%"}>
        <Title order={4} c={theme.primaryColor}>
          Units By RSD
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
