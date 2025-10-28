import { createTheme, MantineTheme } from "@mantine/core";

export const theme = createTheme({
  components: {
    Paper: {
      styles: (theme: MantineTheme) => ({
        root: {
          backgroundColor: theme.colors.dark[6], // e.g., gray[1]
        },
      }),
    },
  },
});
