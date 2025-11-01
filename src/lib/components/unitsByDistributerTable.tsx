import {
  Box,
  Group,
  Stack,
  Table,
  Title,
  useMantineTheme,
} from "@mantine/core";
import {
  ColDef,
  colorSchemeDark,
  RowSelectionOptions,
  themeQuartz,
} from "ag-grid-community"; // 👈 1. ADD THIS IMPORT

import { faker } from "@faker-js/faker";
import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";

type BaseRecord = {
  [year: string]: string | number;
  rsd: string;
};

export function UnitsByDistributorTable({ numRows = 24 }) {
  const theme = useMantineTheme();
  const [colDefs, setColDefs] = useState<ColDef<BaseRecord>[]>([
    { field: "rsd" },
    { field: "2024" },
    { field: "2025" },
  ]);

  const tableData: BaseRecord[] = useMemo(() => {
    // This log proves it only runs when dependencies change, not on every re-render.
    console.log("Generating fake data...");

    const dataRows = [];
    let total2024 = 0;
    let total2025 = 0;

    for (let i = 0; i < numRows; i++) {
      // Store raw numbers for calculation
      const val2024 = faker.number.int({ min: 30000, max: 500000 });
      const val2025 = faker.number.int({ min: 30000, max: 500000 });

      // Add to totals
      total2024 += val2024;
      total2025 += val2025;

      // Push the formatted string row
      dataRows.push({
        rsd: faker.company.name(),
        "2024": val2024.toLocaleString("en-US"),
        "2025": val2025.toLocaleString("en-US"),
      });
    }

    // Create the "Totals" row, formatting the final numbers
    const totalsRow = {
      rsd: "Totals",
      "2024": total2024.toLocaleString("en-US"),
      "2025": total2025.toLocaleString("en-US"),
    };

    // Return the final array
    return [...dataRows, totalsRow];
  }, [numRows]);

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
          rowData={tableData}
          columnDefs={colDefs}
        />
      </Box>
    </Stack>
  );
}
