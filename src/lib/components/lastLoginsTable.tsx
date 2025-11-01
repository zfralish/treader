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

interface UserLogin {
  name: string;
  lastLogin: string;
}

export function UserLoginTable({ numRows = 24 }) {
  const theme = useMantineTheme();

  const tableData = useMemo(() => {
    console.log("Generating fake user data...");

    const dataRows: UserLogin[] = [];

    for (let i = 0; i < numRows; i++) {
      // faker.date.recent() returns a recent JavaScript Date object.
      const recentLoginDate = faker.date.recent({ days: 30 }); // e.g., within the last 30 days

      dataRows.push({
        name: faker.person.fullName(),
        // Format the Date object into a readable string
        lastLogin: recentLoginDate.toLocaleString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
    }

    return dataRows;
  }, [numRows]);

  const [colDefs, setColDefs] = useState<ColDef<UserLogin>[]>([
    { field: "name" },
    { field: "lastLogin" },
  ]);

  return (
    <Stack>
      <Group justify="space-between" w={"100%"}>
        <Title order={4} c={theme.primaryColor}>
          User Logins
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
