import { Table, useMantineTheme } from "@mantine/core";

import { faker } from "@faker-js/faker";
import { useMemo } from "react";

export function DistributorListTable({ numRows = 122 }) {
  const theme = useMantineTheme();

  const tableData = useMemo(() => {
    // This log proves it only runs when dependencies change, not on every re-render.

    const dataRows = [];

    for (let i = 0; i < numRows; i++) {
      // Store raw numbers for calculation

      // Push the formatted string row
      dataRows.push({
        "Account#": faker.number.int({ min: 1000, max: 10000 }),
        W9: faker.helpers.arrayElement(["Yes", "No"]),
        Terms: faker.helpers.arrayElement(["Yes", "No"]),
        Company: faker.company.name(),
        City: faker.location.city(),
        St: faker.location.state(),
        "Primary Accts": faker.number.int({ min: 0, max: 10 }),
        "Secondary Accts": faker.number.int({ min: 0, max: 10 }),
        "Tertiary Accts": faker.number.int({ min: 0, max: 10 }),
      });
    }

    // Return the final array
    return [...dataRows];
  }, [numRows]);

  const rows = tableData.map((element) => (
    <Table.Tr key={element["Account#"]}>
      <Table.Td>{element["Account#"]}</Table.Td>
      <Table.Td>{element["W9"]}</Table.Td>
      <Table.Td>{element["Terms"]}</Table.Td>
      <Table.Td>{element["Company"]}</Table.Td>
      <Table.Td>{element["City"]}</Table.Td>
      <Table.Td>{element["St"]}</Table.Td>
      <Table.Td>{element["Primary Accts"]}</Table.Td>
      <Table.Td>{element["Secondary Accts"]}</Table.Td>
      <Table.Td>{element["Tertiary Accts"]}</Table.Td>
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
            <Table.Th>Account#</Table.Th>
            <Table.Th>W9</Table.Th>
            <Table.Th>Terms</Table.Th>
            <Table.Th>Company</Table.Th>
            <Table.Th>City</Table.Th>
            <Table.Th>St</Table.Th>
            <Table.Th>Primary Accts</Table.Th>
            <Table.Th>Secondary Accts</Table.Th>
            <Table.Th>Tertiary Accts</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
