"use client";

import { Column, Icon, IconButton, Line, Row, Text, ToggleButton } from "@/once-ui/components";

type SidebarProps = {
  activePage: string;
  onToggle: (pageId: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ activePage, onToggle }) => {
  return (
    <Column
      maxWidth={16}
      fill
      paddingX="16"
      paddingY="32"
      gap="m"
      background="page"
      border="neutral-weak"
      radius="l"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Column fill paddingX="xs" gap="m">
        {/* 1월 주별 랭킹 */}
        <Column fillWidth gap="4">
          <Text variant="body-default-xs" onBackground="neutral-weak" marginY="8" marginLeft="16">
            1월 주별 랭킹
          </Text>
          <ToggleButton
            fillWidth
            justifyContent="flex-start"
            onClick={() => onToggle("january-week1")}
            selected={activePage === "january-week1"}
          >
            <Row padding="4" gap="12" alignItems="center" textVariant="label-default-s">
              <Line width="16" />
              1월 어쩌고
            </Row>
          </ToggleButton>
          <ToggleButton
            fillWidth
            justifyContent="flex-start"
            onClick={() => onToggle("january-week2")}
            selected={activePage === "january-week2"}
          >
            <Row padding="4" alignItems="center" gap="12" textVariant="label-default-s">
              <Line width="16" />
              1월 저쩌고
            </Row>
          </ToggleButton>
        </Column>

        <Line />

        {/* 2월 주별 랭킹 */}
        <Column fillWidth gap="4">
          <Text variant="body-default-xs" onBackground="neutral-weak" marginY="8" marginLeft="16">
            2월 주별 랭킹
          </Text>
          <ToggleButton
            fillWidth
            justifyContent="flex-start"
            onClick={() => onToggle("february-week1")}
            selected={activePage === "february-week1"}
          >
            <Row padding="4" gap="12" alignItems="center" textVariant="label-default-s">
              <Line width="16" />
              2월 어쩌고
            </Row>
          </ToggleButton>
          <ToggleButton
            fillWidth
            justifyContent="flex-start"
            onClick={() => onToggle("february-week2")}
            selected={activePage === "february-week2"}
          >
            <Row padding="4" alignItems="center" gap="12" textVariant="label-default-s">
              <Line width="16" />
              2월 저쩌고
            </Row>
          </ToggleButton>
          <ToggleButton
            fillWidth
            justifyContent="flex-start"
            onClick={() => onToggle("february-week3")}
            selected={activePage === "february-week3"}
          >
            <Row padding="4" gap="12" alignItems="center" textVariant="label-default-s">
              <Line width="16" />
              2월 마지막
            </Row>
          </ToggleButton>
        </Column>
      </Column>
    </Column>
  );
};

Sidebar.displayName = "Sidebar";
export { Sidebar };
