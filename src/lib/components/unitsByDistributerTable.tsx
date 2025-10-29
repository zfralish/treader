import { Table, useMantineTheme } from "@mantine/core";

import { faker } from "@faker-js/faker";
import { useMemo } from "react";

export function UnitsByDistributorTable({ numRows = 24 }) {
  const theme = useMantineTheme();

  const tableData = useMemo(() => {
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
        Distributor: faker.company.name(),
        "2024": val2024.toLocaleString("en-US"),
        "2025": val2025.toLocaleString("en-US"),
      });
    }

    // Create the "Totals" row, formatting the final numbers
    const totalsRow = {
      Distributor: "Totals",
      "2024": total2024.toLocaleString("en-US"),
      "2025": total2025.toLocaleString("en-US"),
    };

    // Return the final array
    return [...dataRows, totalsRow];
  }, [numRows]);

  const rows = tableData.map((element) => (
    <Table.Tr key={element["Distributor"]}>
      <Table.Td>{element["Distributor"]}</Table.Td>
      <Table.Td>{element["2024"]}</Table.Td>
      <Table.Td>{element["2025"]}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={250} maxHeight={350}>
      <Table
        captionSide="top"
        highlightOnHover
        withRowBorders={false}
        striped={true}
        stripedColor={theme.colors.dark[5]}
        stickyHeader
      >
        <Table.Caption c={theme.primaryColor} fz={24}>
          Units By Distributor
        </Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>RSD</Table.Th>
            <Table.Th>2024</Table.Th>
            <Table.Th>2025</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
