import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import {
  AppShell,
  Box,
  Burger,
  Center,
  Image,
  NavLink,
  Stack,
} from "@mantine/core";
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
  IconHome,
} from "@tabler/icons-react";

import { Route as DashboardRoute } from "./$dealer/dashboard";
import { Route as ClaimsRoute } from "./$dealer/claims";
import { Route as GuidesRoute } from "./$dealer/guides";
import { Route as ReportsRoute } from "./$dealer/reports";
import { Route as ProgramInfoRoute } from "./$dealer/program-info";
import { Route as ContactRoute } from "./$dealer/contact-us";
import { Route as NexanceRoute } from "./$dealer/nexenace";
import { Route as ChangeRequestRoute } from "./$dealer/tools/change-request";
import { Route as PayoutRoute } from "./$dealer/tools/view-payouts";
import { Route as WhatIfRoute } from "./$dealer/tools/what-if-calculator";
import { Route as SpliffDashboardRoute } from "./$dealer/tools/spliff-dashboard";
import { Route as SpliffClaimRoute } from "./$dealer/tools/spliff-claim-review";
import { Route as ProfileRoute } from "./$dealer/profile";

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
              <Link
                to={DashboardRoute.to}
                // Optional: Add params or search if your route needs them
                params={{ dealer: "nexen" }}
                // search={{...}}
                style={{ textDecoration: "none", color: "inherit" }} // Prevents default <a> tag underline
              >
                {({ isActive }) => (
                  <NavLink
                    label="Dashboard"
                    leftSection={<IconHome size={16} stroke={1.5} />}
                    component="div" // <-- Render NavLink as a div to avoid nested <a> tags
                    active={isActive}
                  />
                )}
              </Link>
              <Link
                to={ClaimsRoute.to}
                // Optional: Add params or search if your route needs them
                params={{ dealer: "nexen" }}
                // search={{...}}
                style={{ textDecoration: "none", color: "inherit" }} // Prevents default <a> tag underline
              >
                {({ isActive }) => (
                  <NavLink
                    label="Claims"
                    leftSection={<IconClipboardData size={16} stroke={1.5} />}
                    component="div" // <-- Render NavLink as a div to avoid nested <a> tags
                    active={isActive}
                  />
                )}
              </Link>
              <Link
                to={GuidesRoute.to}
                // Optional: Add params or search if your route needs them
                params={{ dealer: "nexen" }}
                // search={{...}}
                style={{ textDecoration: "none", color: "inherit" }} // Prevents default <a> tag underline
              >
                {({ isActive }) => (
                  <NavLink
                    label="Guides"
                    leftSection={<IconBook size={16} stroke={1.5} />}
                    component="div" // <-- Render NavLink as a div to avoid nested <a> tags
                    active={isActive}
                  />
                )}
              </Link>
              <Link
                to={ReportsRoute.to}
                // Optional: Add params or search if your route needs them
                params={{ dealer: "nexen" }}
                // search={{...}}
                style={{ textDecoration: "none", color: "inherit" }} // Prevents default <a> tag underline
              >
                {({ isActive }) => (
                  <NavLink
                    label="Reports"
                    component="div" // <-- Render NavLink as a div to avoid nested <a> tags
                    leftSection={<IconReport size={16} stroke={1.5} />}
                    active={isActive}
                  />
                )}
              </Link>
              <Link
                to={ProgramInfoRoute.to}
                // Optional: Add params or search if your route needs them
                params={{ dealer: "nexen" }}
                // search={{...}}
                style={{ textDecoration: "none", color: "inherit" }} // Prevents default <a> tag underline
              >
                {({ isActive }) => (
                  <NavLink
                    label="Program Info"
                    leftSection={<IconInfoCircle size={16} stroke={1.5} />}
                    component="div" // <-- Render NavLink as a div to avoid nested <a> tags
                    active={isActive}
                  />
                )}
              </Link>
              <Link
                to={ContactRoute.to}
                params={{ dealer: "nexen" }}
                style={{ textDecoration: "none", color: "inherit" }} // Prevents default <a> tag underline
              >
                {({ isActive }) => (
                  <NavLink
                    component="div" // <-- Render NavLink as a div to avoid nested <a> tags
                    label="Contact Us"
                    leftSection={<IconPhoneCall size={16} stroke={1.5} />}
                    active={isActive}
                  />
                )}
              </Link>
              <Link
                to={NexanceRoute.to}
                params={{ dealer: "nexen" }}
                style={{ textDecoration: "none", color: "inherit" }} // Prevents default <a> tag underline
              >
                {({ isActive }) => (
                  <NavLink
                    component="div" // <-- Render NavLink as a div to avoid nested <a> tags
                    label="Nexenace"
                    leftSection={<IconGauge size={16} stroke={1.5} />}
                    active={isActive}
                  />
                )}
              </Link>
              <NavLink
                label="Tools"
                leftSection={<IconTools size={16} stroke={1.5} />}
                component="div" // <-- Render NavLink as a div to avoid nested <a> tags
                childrenOffset={28}
              >
                <Link
                  to={ChangeRequestRoute.to}
                  // Optional: Add params or search if your route needs them
                  params={{ dealer: "nexen" }}
                  // search={{...}}
                  style={{ textDecoration: "none", color: "inherit" }} // Prevents default <a> tag underline
                >
                  {({ isActive }) => (
                    <NavLink
                      label="Pri/Sec Change Request"
                      active={isActive}
                      component="div" // <-- Render NavLink as a div to avoid nested <a> tags
                      leftSection={
                        <IconAutomaticGearbox size={16} stroke={1.5} />
                      }
                    />
                  )}
                </Link>
                <Link
                  to={PayoutRoute.to}
                  // Optional: Add params or search if your route needs them
                  params={{ dealer: "nexen" }}
                  // search={{...}}
                  style={{ textDecoration: "none", color: "inherit" }} // Prevents default <a> tag underline
                >
                  {({ isActive }) => (
                    <NavLink
                      component="div" // <-- Render NavLink as a div to avoid nested <a> tags
                      label="View Payouts"
                      active={isActive}
                      leftSection={<IconMoneybag size={16} stroke={1.5} />}
                    />
                  )}
                </Link>
                <Link
                  to={WhatIfRoute.to}
                  // Optional: Add params or search if your route needs them
                  params={{ dealer: "nexen" }}
                  // search={{...}}
                  style={{ textDecoration: "none", color: "inherit" }} // Prevents default <a> tag underline
                >
                  {({ isActive }) => (
                    <NavLink
                      component="div" // <-- Render NavLink as a div to avoid nested <a> tags
                      label="What If Calculator?"
                      active={isActive}
                      leftSection={<IconCalculator size={16} stroke={1.5} />}
                    />
                  )}
                </Link>
                <Link
                  to={SpliffDashboardRoute.to}
                  params={{ dealer: "nexen" }}
                  style={{ textDecoration: "none", color: "inherit" }} // Prevents default <a> tag underline
                >
                  {({ isActive }) => (
                    <NavLink
                      component="div" // <-- Render NavLink as a div to avoid nested <a> tags
                      label="Spliff Dashboard"
                      active={isActive}
                      leftSection={<IconDashboard size={16} stroke={1.5} />}
                    />
                  )}
                </Link>
                <Link
                  to={SpliffClaimRoute.to}
                  params={{ dealer: "nexen" }}
                  style={{ textDecoration: "none", color: "inherit" }} // Prevents default <a> tag underline
                >
                  {({ isActive }) => (
                    <NavLink
                      component="div" // <-- Render NavLink as a div to avoid nested <a> tags
                      label="Spliff Claim Review"
                      active={isActive}
                      leftSection={<IconReport size={16} stroke={1.5} />}
                    />
                  )}
                </Link>
              </NavLink>
              <Link
                to={ProfileRoute.to}
                params={{ dealer: "nexen" }}
                style={{ textDecoration: "none", color: "inherit" }} // Prevents default <a> tag underline
              >
                {({ isActive }) => (
                  <NavLink
                    label="Profile"
                    component="div" // <-- Render NavLink as a div to avoid nested <a> tags
                    leftSection={<IconReport size={16} stroke={1.5} />}
                    active={isActive}
                  />
                )}
              </Link>
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
