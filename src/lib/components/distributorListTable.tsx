import { Box, Group, Stack, Title, useMantineTheme } from "@mantine/core";

import { useMemo, useState } from "react";
import { Distributor, generatedData } from "../data/generator";

import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import { ColDef, colorSchemeDark, themeQuartz } from "ag-grid-community"; // 👈 1. ADD THIS IMPORT

export function DistributorListTable() {
  const theme = useMantineTheme();

  const data = useMemo(() => generatedData.distributors, []);

  // 3. USE THE TYPE FOR ROWDATA
  const [rowData, setRowData] = useState<Distributor[]>(data);

  // 4. USE THE TYPE FOR COLDEFS (THIS IS THE MAIN FIX)
  const [colDefs, setColDefs] = useState<ColDef<Distributor>[]>([
    { field: "accountNumber" },
    { field: "w9" },
    { field: "terms" },
    { field: "company" },
    { field: "city" },
    { field: "st" },
    { field: "primary" },
    { field: "secondary" },
    { field: "tertiary" },
  ]);

  return (
    <Stack>
      <Group justify="space-between" w={"100%"}>
        <Title order={4} c={theme.primaryColor}>
          Distributor List
        </Title>
      </Group>
      <Box style={{ height: 300 }}>
        <AgGridReact
          theme={themeQuartz.withPart(colorSchemeDark)}
          rowData={rowData}
          columnDefs={colDefs}
        />
      </Box>
    </Stack>
  );
}
