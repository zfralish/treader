import { Table, useMantineTheme } from "@mantine/core";

const elements = [
  { RSD: "Chris Blom", "2024": "67,084", "2025": "292,151" },
  { RSD: "Frank Fruciano", "2024": "39,883", "2025": "437,932" },
  { RSD: "Mike Case", "2024": "137,655", "2025": "391,075" },
  { RSD: "Phil Harris", "2024": "371,948", "2025": "68,633" },
  { RSD: "Totals", "2024": "1,483,212", "2025": "1,187,791" },
];

export function RSDTable() {
  const theme = useMantineTheme();
  const rows = elements.map((element) => (
    <Table.Tr key={element["RSD"]}>
      <Table.Td>{element["RSD"]}</Table.Td>
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
          Units By RSD
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
