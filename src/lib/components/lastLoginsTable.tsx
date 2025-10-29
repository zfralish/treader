import { Table, useMantineTheme } from "@mantine/core";

import { faker } from "@faker-js/faker";
import { useMemo } from "react";

export function UserLoginTable({ numRows = 24 }) {
  const theme = useMantineTheme();

  const tableData = useMemo(() => {
    console.log("Generating fake user data...");

    const dataRows = [];

    for (let i = 0; i < numRows; i++) {
      // faker.date.recent() returns a recent JavaScript Date object.
      const recentLoginDate = faker.date.recent({ days: 30 }); // e.g., within the last 30 days

      dataRows.push({
        Name: faker.person.fullName(),
        // Format the Date object into a readable string
        "Last Login": recentLoginDate.toLocaleString("en-US", {
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

  const rows = tableData.map((element) => (
    <Table.Tr key={element["Name"]}>
      <Table.Td>{element["Name"]}</Table.Td>
      <Table.Td>{element["Last Login"]}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={250} maxHeight={250}>
      <Table
        captionSide="top"
        highlightOnHover
        withRowBorders={false}
        striped={true}
        stripedColor={theme.colors.dark[5]}
        stickyHeader
      >
        <Table.Caption c={theme.primaryColor} fz={24}>
          Last Logins
        </Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Last Login</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
