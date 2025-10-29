import { Table, useMantineTheme } from "@mantine/core";

import { faker } from "@faker-js/faker";
import { useMemo } from "react";

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

export function UnitsByStateTable() {
  const theme = useMantineTheme();

  const tableData = useMemo(() => {
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
        State: stateName, // Changed from Distributor
        "2024": val2024.toLocaleString("en-US"),
        "2025": val2025.toLocaleString("en-US"),
      });
    }

    // Create the "Totals" row, formatting the final numbers
    const totalsRow = {
      State: "Totals", // Changed from Distributor
      "2024": total2024.toLocaleString("en-US"),
      "2025": total2025.toLocaleString("en-US"),
    };

    // Return the final array (will have 51 elements: 50 states + 1 total)
    return [...dataRows, totalsRow];
  }, []); //

  const rows = tableData.map((element) => (
    <Table.Tr key={element["State"]}>
      <Table.Td>{element["State"]}</Table.Td>
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
          Units By State
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
