import {
  Box,
  Group,
  Stack,
  Table,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { ColDef, colorSchemeDark, themeQuartz } from "ag-grid-community"; // 👈 1. ADD THIS IMPORT

import { faker } from "@faker-js/faker";
import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";

const usStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

type BaseRecord = {
  [year: string]: string | number;
  state: string;
};

export function UnitsByStateTable() {
  const theme = useMantineTheme();

  const tableData: BaseRecord[] = useMemo(() => {
    // This log proves it only runs once.
    console.log("Generating fake data for 50 states...");

    const dataRows = [];
    let total2024 = 0;
    let total2025 = 0;

    // Loop over the static array of states
    for (const stateName of usStates) {
      // Store raw numbers for calculation
      const val2024 = faker.number.int({ min: 30000, max: 500000 });
      const val2025 = faker.number.int({ min: 30000, max: 500000 });

      // Add to totals
      total2024 += val2024;
      total2025 += val2025;

      // Push the formatted string row with the 'State' key
      dataRows.push({
        state: stateName, // Changed from Distributor
        "2024": val2024.toLocaleString("en-US"),
        "2025": val2025.toLocaleString("en-US"),
      });
    }

    // Create the "Totals" row, formatting the final numbers
    const totalsRow = {
      state: "Totals", // Changed from Distributor
      "2024": total2024.toLocaleString("en-US"),
      "2025": total2025.toLocaleString("en-US"),
    };

    // Return the final array (will have 51 elements: 50 states + 1 total)
    return [...dataRows, totalsRow];
  }, []); //

  const [colDefs, setColDefs] = useState<ColDef<BaseRecord>[]>([
    { field: "state" },
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
          rowData={tableData}
          columnDefs={colDefs}
        />
      </Box>
    </Stack>
  );
}
