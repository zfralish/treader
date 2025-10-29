import { Table, useMantineTheme } from "@mantine/core";

const elements = [
  { quarter: "Q1", "2024": "313,382", "2025": "292,151" },
  { quarter: "Q2", "2024": "445,062", "2025": "437,932" },
  { quarter: "Q3", "2024": "352,820", "2025": "391,075" },
  { quarter: "Q4", "2024": "371,948", "2025": "68,633" },
  { quarter: "Yearly Totals", "2024": "1,483,212", "2025": "1,187,791" },
];

export function AdministratorTable() {
  const theme = useMantineTheme();
  const rows = elements.map((element) => (
    <Table.Tr key={element["quarter"]}>
      <Table.Td>{element["quarter"]}</Table.Td>
      <Table.Td>{element["2024"]}</Table.Td>
      <Table.Td>{element["2025"]}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={250} maxHeight={500}>
      <Table
        captionSide="top"
        highlightOnHover
        stickyHeader
        withRowBorders={false}
        striped={true}
        stripedColor={theme.colors.dark[5]}
      >
        <Table.Caption c={theme.primaryColor} fz={24}>
          Administrator
        </Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Quarter</Table.Th>
            <Table.Th>2024</Table.Th>
            <Table.Th>2025</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
