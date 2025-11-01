import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import {
  AppShell,
  Box,
  Burger,
  Center,
  Image,
  NavLink,
  ScrollArea,
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
  IconClipboardCheck,
  IconLibrary,
  IconProgress,
  IconProgressBolt,
  IconFile,
  IconWalk,
  IconUpload,
  IconMailOpened,
  IconCheck,
  IconDownload,
  IconMap,
  IconScale,
  IconMoneybagPlus,
  IconEyeDollar,
  IconBrandAdobeIllustrator,
  IconReceipt,
  IconAccessibleFilled,
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
              <ScrollArea h={1000}>
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

                <NavLink
                  label="Reports"
                  leftSection={<IconBook size={16} stroke={1.5} />}
                  component="div" // <-- Render NavLink as a div to avoid nested <a> tags
                  childrenOffset={28}
                >
                  <NavLink
                    label="Sales Reports"
                    leftSection={<IconClipboardData size={16} stroke={1.5} />}
                    component="div" // <-- Render NavLink as a div to avoid nested <a> tags
                    childrenOffset={28}
                  >
                    <NavLink
                      label="Primary Payout Details"
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/Next_Level_Distributor_Claim_Process.pdf"
                      component="a" // <-- Render NavLink as a div to avoid nested <a> tags
                      leftSection={<IconProgress size={16} stroke={1.5} />}
                    />
                    <NavLink
                      label="Tier Status Report"
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/Nexen_Next_Level_Automated_Enrollment_Process.pdf"
                      component="a" // <-- Render NavLink as a a to avoid nested <a> tags
                      leftSection={<IconProgressBolt size={16} stroke={1.5} />}
                    />
                    <NavLink
                      label="Master Enrollment Report"
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/NextLevelSampleCSV.csv"
                      component="a" // <-- Render NavLink as a div to avoid nested <a> tags
                      leftSection={<IconFile size={16} stroke={1.5} />}
                    />
                    <NavLink
                      label="Non-Verified Dealers With Upload Attempts"
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/NextLevelSampleCSV.csv"
                      component="a" // <-- Render NavLink as a div to avoid nested <a> tags
                      leftSection={<IconFile size={16} stroke={1.5} />}
                    />
                    <NavLink
                      label="Approved Accounts With Rejected Uploads"
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/NextLevelSampleCSV.csv"
                      component="a" // <-- Render NavLink as a div to avoid nested <a> tags
                      leftSection={<IconFile size={16} stroke={1.5} />}
                    />
                    <NavLink
                      label="Accepted Qty Report"
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/NextLevelSampleCSV.csv"
                      component="a" // <-- Render NavLink as a div to avoid nested <a> tags
                      leftSection={<IconFile size={16} stroke={1.5} />}
                    />
                    <NavLink
                      label="Dealer Address Report"
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/NextLevelSampleCSV.csv"
                      component="a" // <-- Render NavLink as a div to avoid nested <a> tags
                      leftSection={<IconFile size={16} stroke={1.5} />}
                    />
                    <NavLink
                      label="Dealers With No Distributors"
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/NextLevelSampleCSV.csv"
                      component="a" // <-- Render NavLink as a div to avoid nested <a> tags
                      leftSection={<IconFile size={16} stroke={1.5} />}
                    />
                    <NavLink
                      label="12 Month Rolling Purchases"
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/NextLevelSampleCSV.csv"
                      component="a" // <-- Render NavLink as a div to avoid nested <a> tags
                      leftSection={<IconFile size={16} stroke={1.5} />}
                    />
                    <NavLink
                      label="Year over Year Accepted Units"
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/NextLevelSampleCSV.csv"
                      component="a" // <-- Render NavLink as a div to avoid nested <a> tags
                      leftSection={<IconFile size={16} stroke={1.5} />}
                    />
                  </NavLink>
                  <NavLink
                    label="Admin Reports"
                    leftSection={<IconClipboardCheck size={16} stroke={1.5} />}
                    component="div" // <-- Render NavLink as a div to avoid nested <a> tags
                    childrenOffset={28}
                  >
                    <NavLink
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/Nexen_Tire_Dealer_Spiff_Registration_Walkthrough.pdf"
                      label="Paid Units By Distributor"
                      component="a" // <-- Render NavLink as a a to avoid nested <a> tags
                      leftSection={<IconWalk size={16} stroke={1.5} />}
                    />
                    <NavLink
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/Next_Level_SPIFF_System_How_To_Upload_Claims.pdf"
                      label="Paid Quarter Data"
                      component="a" // <-- Render NavLink as a a to avoid nested <a> tags
                      leftSection={<IconUpload size={16} stroke={1.5} />}
                    />
                    <NavLink
                      label="Master Distributor List"
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/How_To_Dealer_Employee_Approval.pdf"
                      component="a" // <-- Render NavLink as a a to avoid nested <a> tags
                      leftSection={
                        <IconClipboardCheck size={16} stroke={1.5} />
                      }
                    />
                    <NavLink
                      label="Master RSM/RSD List"
                      href="https://www.nexentirenextlevel.com/DealerDashboard/Reports/SPIFF_Problem_Flowchart.pdf"
                      component="a" // <-- Render NavLink as a div to avoid nested <a> tags
                      leftSection={
                        <IconAutomaticGearbox size={16} stroke={1.5} />
                      }
                    />
                    <NavLink
                      label="Nexen Reach Program"
                      href="https://www.nexentirenextlevel.com/DealerDashboard/Reports/SPIFF_Problem_Flowchart.pdf"
                      component="a" // <-- Render NavLink as a div to avoid nested <a> tags
                      leftSection={
                        <IconAutomaticGearbox size={16} stroke={1.5} />
                      }
                    />
                    <NavLink
                      label="Distributor Upload Report"
                      href="https://www.nexentirenextlevel.com/DealerDashboard/Reports/SPIFF_Problem_Flowchart.pdf"
                      component="a" // <-- Render NavLink as a div to avoid nested <a> tags
                      leftSection={
                        <IconAutomaticGearbox size={16} stroke={1.5} />
                      }
                    />
                  </NavLink>
                  <NavLink
                    label="Spiff Reports"
                    leftSection={<IconLibrary size={16} stroke={1.5} />}
                    component="div" // <-- Render NavLink as a div to avoid nested <a> tags
                    childrenOffset={28}
                  >
                    <NavLink
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/Next_Level_Associate_Dealer_Enrollment_Form_2023.pdf"
                      target="_blank"
                      label="SPIFF - Raw Quarter Data"
                      component="a" // <-- Render NavLink as a div to avoid nested <a> tags
                      leftSection={<IconProgress size={16} stroke={1.5} />}
                    />
                    <NavLink
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/Dealer_Open_Enrollment_Guide.pdf"
                      label="Pending Employee List"
                      component="a" // <-- Render NavLink as a a to avoid nested <a> tags
                      leftSection={<IconMailOpened size={16} stroke={1.5} />}
                    />
                    <NavLink
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/Next_Level_Enrollment_Agreement_Form_2023.pdf"
                      label="Master Enrolled Employee List"
                      component="a" // <-- Render NavLink as a a to avoid nested <a> tags
                      leftSection={<IconCheck size={16} stroke={1.5} />}
                    />
                    <NavLink
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/Next_Level_Direct_Deposit_Agreement_Form_2023.pdf"
                      label="Master Enrolled Employee List - QB Export"
                      component="a" // <-- Render NavLink as a a to avoid nested <a> tags
                      leftSection={<IconMoneybag size={16} stroke={1.5} />}
                    />
                  </NavLink>
                </NavLink>
                <NavLink
                  label="Program Info"
                  href="https://www.nexentirenextlevel.com/Public/System/Docs/2025_Next_Level_Brochure.pdf"
                  target="_blank"
                  leftSection={<IconInfoCircle size={16} stroke={1.5} />}
                  component="a" // <-- Render NavLink as a div to avoid nested <a> tags
                />
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
                <NavLink
                  label="Guides"
                  leftSection={<IconBook size={16} stroke={1.5} />}
                  component="div" // <-- Render NavLink as a div to avoid nested <a> tags
                  childrenOffset={28}
                >
                  <NavLink
                    label="Distributor Reports"
                    leftSection={<IconClipboardData size={16} stroke={1.5} />}
                    component="div" // <-- Render NavLink as a div to avoid nested <a> tags
                    childrenOffset={28}
                  >
                    <NavLink
                      label="Next Level Distributor Claim Process"
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/Next_Level_Distributor_Claim_Process.pdf"
                      component="a" // <-- Render NavLink as a div to avoid nested <a> tags
                      leftSection={<IconProgress size={16} stroke={1.5} />}
                    />
                    <NavLink
                      label="Enrollment Process"
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/Nexen_Next_Level_Automated_Enrollment_Process.pdf"
                      component="a" // <-- Render NavLink as a a to avoid nested <a> tags
                      leftSection={<IconProgressBolt size={16} stroke={1.5} />}
                    />
                    <NavLink
                      label="Next Level Samp File - Reporting Units (excel file)"
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/NextLevelSampleCSV.csv"
                      component="a" // <-- Render NavLink as a div to avoid nested <a> tags
                      leftSection={<IconFile size={16} stroke={1.5} />}
                    />
                  </NavLink>
                  <NavLink
                    label="Spiff Reports"
                    leftSection={<IconClipboardCheck size={16} stroke={1.5} />}
                    component="div" // <-- Render NavLink as a div to avoid nested <a> tags
                    childrenOffset={28}
                  >
                    <NavLink
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/Nexen_Tire_Dealer_Spiff_Registration_Walkthrough.pdf"
                      label="Dealer Spiff Registration Walkthrough"
                      component="a" // <-- Render NavLink as a a to avoid nested <a> tags
                      leftSection={<IconWalk size={16} stroke={1.5} />}
                    />
                    <NavLink
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/Next_Level_SPIFF_System_How_To_Upload_Claims.pdf"
                      label="How To Upload Claims"
                      component="a" // <-- Render NavLink as a a to avoid nested <a> tags
                      leftSection={<IconUpload size={16} stroke={1.5} />}
                    />
                    <NavLink
                      label="How To Dealer Employee Approval"
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/How_To_Dealer_Employee_Approval.pdf"
                      component="a" // <-- Render NavLink as a a to avoid nested <a> tags
                      leftSection={
                        <IconClipboardCheck size={16} stroke={1.5} />
                      }
                    />
                    <NavLink
                      label="Spiff Problem Flowchart"
                      href="https://www.nexentirenextlevel.com/DealerDashboard/Reports/SPIFF_Problem_Flowchart.pdf"
                      component="a" // <-- Render NavLink as a div to avoid nested <a> tags
                      leftSection={
                        <IconAutomaticGearbox size={16} stroke={1.5} />
                      }
                    />
                  </NavLink>
                  <NavLink
                    label="Dealer Materials"
                    leftSection={<IconLibrary size={16} stroke={1.5} />}
                    component="div" // <-- Render NavLink as a div to avoid nested <a> tags
                    childrenOffset={28}
                  >
                    <NavLink
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/Next_Level_Associate_Dealer_Enrollment_Form_2023.pdf"
                      target="_blank"
                      label="Dealer Enrollment Form"
                      component="a" // <-- Render NavLink as a div to avoid nested <a> tags
                      leftSection={<IconProgress size={16} stroke={1.5} />}
                    />
                    <NavLink
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/Dealer_Open_Enrollment_Guide.pdf"
                      label="Open Enrollment Guide"
                      component="a" // <-- Render NavLink as a a to avoid nested <a> tags
                      leftSection={<IconMailOpened size={16} stroke={1.5} />}
                    />
                    <NavLink
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/Next_Level_Enrollment_Agreement_Form_2023.pdf"
                      label="Dealer Agreement Form"
                      component="a" // <-- Render NavLink as a a to avoid nested <a> tags
                      leftSection={<IconCheck size={16} stroke={1.5} />}
                    />
                    <NavLink
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/Next_Level_Direct_Deposit_Agreement_Form_2023.pdf"
                      label="Direct Deposit Form"
                      component="a" // <-- Render NavLink as a a to avoid nested <a> tags
                      leftSection={<IconMoneybag size={16} stroke={1.5} />}
                    />
                    <NavLink
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/Nexen_Next_Level_Enrollment_Addl_Locations_Page.pdf"
                      label="Additional Locations Form"
                      component="a" // <-- Render NavLink as a a to avoid nested <a> tags
                      leftSection={<IconMap size={16} stroke={1.5} />}
                    />
                    <NavLink
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/Next_Level_Enrollment_Checklist_2023.pdf"
                      label="Enrollment Checklist"
                      component="a" // <-- Render NavLink as a a to avoid nested <a> tags
                      leftSection={
                        <IconClipboardCheck size={16} stroke={1.5} />
                      }
                    />
                    <NavLink
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/Next_Level_Terms_and_Conditions_2023.pdf"
                      label="Terms and Conditions"
                      component="a" // <-- Render NavLink as a a to avoid nested <a> tags
                      leftSection={<IconScale size={16} stroke={1.5} />}
                    />
                    <NavLink
                      href="https://www.nexentirenextlevel.com/public/system/docs/guides/W9_Form_2023.pdf"
                      label="W9 Form"
                      component="a" // <-- Render NavLink as a a to avoid nested <a> tags
                      leftSection={<IconReceipt size={16} stroke={1.5} />}
                    />
                  </NavLink>
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
                      leftSection={
                        <IconAccessibleFilled size={16} stroke={1.5} />
                      }
                      active={isActive}
                    />
                  )}
                </Link>
              </ScrollArea>
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
