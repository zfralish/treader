import {
  Box,
  Group,
  Input,
  Stack,
  Title,
  useMantineTheme,
} from "@mantine/core";

import { useMemo, useState } from "react";
import { Dealer, generatedData } from "../data/generator";

import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import { ColDef, colorSchemeDark, themeQuartz } from "ag-grid-community"; // 👈 1. ADD THIS IMPORT

export function DealerListTable() {
  const theme = useMantineTheme();

  const data = useMemo(() => generatedData.dealers, []);

  // 3. USE THE TYPE FOR ROWDATA
  const [rowData, setRowData] = useState<Dealer[]>(data);

  // 4. USE THE TYPE FOR COLDEFS (THIS IS THE MAIN FIX)
  const [colDefs, setColDefs] = useState<ColDef<Dealer>[]>([
    { field: "accountNumber" },
    { field: "w9" },
    { field: "company" },
    { field: "city" },
    { field: "st" },
    { field: "acceptedUnits" },
    { field: "totalRecords" },
    { field: "acceptedRecords" },
    { field: "rejectedRecords" },
    { field: "lastUpload" },
  ]);

  return (
    <Stack>
      <Group justify="space-between" w={"100%"}>
        <Title order={4} c={theme.primaryColor}>
          Dealer List
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
