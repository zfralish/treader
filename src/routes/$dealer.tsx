import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppShell, Burger, Center, Image, NavLink, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import {
  IconHome2,
  IconGauge,
  IconClipboardData,
  IconBook,
  IconReport,
  IconInfoCircle,
  IconPhoneCall,
  IconTools,
  IconMoneybag,
  IconAutomaticGearbox,
  IconCalculator,
  IconDashboard,
  IconDashboardFilled,
  IconPacman,
} from "@tabler/icons-react";

export const Route = createFileRoute("/$dealer")({
  component: RouteComponent,
});

function RouteComponent() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="md"
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Navbar>
        <Stack justify="space-between" h={"100%"} mb={50}>
          <Stack gap={"xl"} mt={25}>
            <Center>
              <Image w={250} src="../../public/next_level.png" />
            </Center>

            <div>
              <NavLink
                href="#required-for-focus"
                label="Home"
                leftSection={<IconHome2 size={16} stroke={1.5} />}
              />
              <NavLink
                href="#required-for-focus"
                label="Claims"
                leftSection={<IconClipboardData size={16} stroke={1.5} />}
              />
              <NavLink
                href="#required-for-focus"
                label="Guides"
                leftSection={<IconBook size={16} stroke={1.5} />}
              />
              <NavLink
                href="#required-for-focus"
                label="Reports"
                leftSection={<IconReport size={16} stroke={1.5} />}
              />
              <NavLink
                href="#required-for-focus"
                label="Promgram Info"
                leftSection={<IconInfoCircle size={16} stroke={1.5} />}
              />
              <NavLink
                href="#required-for-focus"
                label="Contact Us"
                leftSection={<IconPhoneCall size={16} stroke={1.5} />}
              />
              <NavLink
                href="#required-for-focus"
                label="Nexenace"
                leftSection={<IconGauge size={16} stroke={1.5} />}
              />
              <NavLink
                href="#required-for-focus"
                label="Tools"
                leftSection={<IconTools size={16} stroke={1.5} />}
                childrenOffset={28}
              >
                <NavLink
                  label="Pri/Sec Change Request"
                  href="#required-for-focus"
                  leftSection={<IconAutomaticGearbox size={16} stroke={1.5} />}
                />
                <NavLink
                  label="View Payouts"
                  href="#required-for-focus"
                  leftSection={<IconMoneybag size={16} stroke={1.5} />}
                />
                <NavLink
                  label="What If Calculator?"
                  href="#required-for-focus"
                  leftSection={<IconCalculator size={16} stroke={1.5} />}
                />
                <NavLink
                  label="Spliff Dashboard"
                  href="#required-for-focus"
                  leftSection={<IconDashboard size={16} stroke={1.5} />}
                />
                <NavLink
                  label="Enrollment Dashboard"
                  href="#required-for-focus"
                  leftSection={<IconDashboardFilled size={16} stroke={1.5} />}
                />
                <NavLink
                  label="Spliff Claim Review"
                  href="#required-for-focus"
                  leftSection={<IconReport size={16} stroke={1.5} />}
                />
              </NavLink>

              <NavLink
                href="#required-for-focus"
                label="profile"
                leftSection={<IconPacman size={16} stroke={1.5} />}
              />
            </div>
          </Stack>
          <Stack>
            <NavLink
              href="#required-for-focus"
              label="Logout"
              leftSection={<IconHome2 size={16} stroke={1.5} />}
            />
          </Stack>
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
