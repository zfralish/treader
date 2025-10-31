import { Box, Group, Stack, Title, useMantineTheme } from "@mantine/core";

import { useMemo, useState } from "react";
import { Claim, Distributor, generatedData } from "../data/generator";

import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import { ColDef, colorSchemeDark, themeQuartz } from "ag-grid-community"; // 👈 1. ADD THIS IMPORT

export function ClaimListTable() {
  const theme = useMantineTheme();

  const data = useMemo(() => generatedData.claims, []);

  // 3. USE THE TYPE FOR ROWDATA
  const [rowData, setRowData] = useState<Claim[]>(data);

  // 4. USE THE TYPE FOR COLDEFS (THIS IS THE MAIN FIX)
  const [colDefs, setColDefs] = useState<ColDef<Claim>[]>([
    { field: "filename" },
    { field: "uploadDate" },
    { field: "queued" },
    { field: "validated" },
    { field: "totalRecords" },
    { field: "accepted" },
    { field: "rejected" },
  ]);

  return (
    <Stack>
      <Group justify="space-between" w={"100%"}>
        <Title order={4} c={theme.primaryColor}>
          Claims List
        </Title>
      </Group>
      <Box style={{ height: 300 }}>
        {" "}
        {/* Added theme & height */}
        <AgGridReact
          theme={themeQuartz.withPart(colorSchemeDark)}
          rowData={rowData}
          columnDefs={colDefs}
        />
      </Box>
    </Stack>
  );
}
