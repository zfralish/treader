import { Box, Group, Stack, Title, useMantineTheme } from "@mantine/core";

import { useEffect, useMemo, useState } from "react";
import { Dealer, generatedData } from "../data/generator";

import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import { ColDef, colorSchemeDark, themeQuartz } from "ag-grid-community"; // 👈 1. ADD THIS IMPORT
import { dealersAtom, distributorAtom } from "../atoms/claimsAtoms";
import { useAtom } from "jotai";

export function DealerListTable() {
  const theme = useMantineTheme();

  const [distributor, setDistributor] = useAtom(distributorAtom);
  const [dealers, setDealers] = useAtom(dealersAtom);

  const data = useMemo(() => generatedData.dealers, []);

  useEffect(() => {
    setDealers(data.filter((row) => row.distributorId === distributor));
  }, [distributor]);

  // 3. USE THE TYPE FOR ROWDATA

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
          rowData={dealers.length == 0 ? data : dealers}
          columnDefs={colDefs}
        />
      </Box>
    </Stack>
  );
}
