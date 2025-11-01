import {
  Box,
  Group,
  Stack,
  Table,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { ColDef, colorSchemeDark, themeQuartz } from "ag-grid-community"; // 👈 1. ADD THIS IMPORT
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";

type BaseRecord = {
  [year: string]: string | number;
  rsm: string;
};

// 2. Define the dynamic year/value part
// This means "any string key can have a number value"

const elements: BaseRecord[] = [
  { rsm: "Chris Blom", "2024": 67084, "2025": 292151 },
  { rsm: "Frank Fruciano", "2024": 39883, "2025": 437932 },
  { rsm: "Mike Case", "2024": 137655, "2025": 391075 },
  { rsm: "Phil Harris", "2024": 371948, "2025": 68633 },
  { rsm: "Totals", "2024": 1483212, "2025": 1187791 },
];

export function RSMTable() {
  const theme = useMantineTheme();
  const [colDefs, setColDefs] = useState<ColDef<BaseRecord>[]>([
    { field: "rsm" },
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
