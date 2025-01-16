"use client";

import React, { JSX, useState } from "react";
import { Sidebar } from "@/once-ui/components/Sidebar";
import Week1 from "@/once-ui/components/week1";
import { Flex } from '@/once-ui/components';


import {
  Heading,
  Text,
  Button,
  Icon,
  InlineCode,
  Logo,
  Line,
  Background,
  Column,
  Row,
  Fade,
  IconButton,
  StyleOverlay,
} from "@/once-ui/components";

export default function Home() {
  const [activePage, setActivePage] = useState<string>("");

  // renderContent 함수는 Home 컴포넌트의 최상위 범위에서 선언
  const renderContent = (): JSX.Element | null => {
    switch (activePage) {
      case "january-week1":
        return <Week1 />;
      case "january-week2":
        return <div>1월 둘째 주 랭킹 페이지</div>;
      case "february-week1":
        return <div>2월 첫째 주 랭킹 페이지</div>;
      case "february-week2":
        return <div>2월 둘째 주 랭킹 페이지</div>;
      case "february-week3":
        return <div>2월 마지막 주 랭킹 페이지</div>;
      default:
        return <div>사이드바에서 주별 랭킹을 선택하세요.</div>;
    }
  };

  return (
    <Column fillWidth paddingY="80" paddingX="s" alignItems="center" flex={1}>
      <Fade
        zIndex={3}
        pattern={{
          display: true,
          size: "4",
        }}
        position="fixed"
        top="0"
        left="0"
        to="bottom"
        height={5}
        fillWidth
        blur={0.25}
      />
      <Row position="fixed" top="0" fillWidth justifyContent="center" zIndex={3}>
        <Row
          data-border="rounded"
          justifyContent="space-between"
          maxWidth="l"
          paddingRight="64"
          paddingLeft="32"
          paddingY="20"
        >
          <Logo size="l" icon={false} href="/" />
          <Row gap="12" hide="s">
            <Button
              href="/preview"
              prefixIcon=""
              size="s"
              label="멀리빨리란?"
              weight="default"
              variant="tertiary"
            />
            <Button
              href="https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S241223164029508683"
              prefixIcon=""
              size="s"
              label="예약 하기"
              weight="default"
              variant="tertiary"
            />
            <Button
              href="/ranking"
              prefixIcon=""
              size="s"
              label="랭킹 보기"
              weight="default"
              variant="tertiary"
            />
            <StyleOverlay top="20" right="24" />
          </Row>
          <Row gap="16" show="s" alignItems="center" paddingRight="24">
            <IconButton
              href="https://discord.com/invite/5EyAQ4eNdS"
              icon="discord"
              variant="tertiary"
            />
            <IconButton
              href="https://github.com/once-ui-system/nextjs-starter"
              icon="github"
              variant="tertiary"
            />
            <StyleOverlay top="20" right="24" />
          </Row>
        </Row>
      </Row>
      <Column
        overflow="hidden"
        as="main"
        maxWidth="l"
        position="relative"
        radius="xl"
        alignItems="center"
        border="neutral-alpha-weak"
        fillWidth
      >
        <Column
          fillWidth
          alignItems="center"
          gap="48"
          radius="xl"
          paddingTop="80"
          position="relative"
        >
          <Background
            mask={{
              x: 0,
              y: 48,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "neutral-alpha-medium",
              height: "0.25rem",
            }}
          />
          <Background
            mask={{
              x: 80,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              tilt: -35,
              height: 50,
              width: 75,
              x: 100,
              y: 40,
              colorStart: "accent-solid-medium",
              colorEnd: "static-transparent",
            }}
          />
          <Background
            mask={{
              x: 100,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              opacity: 100,
              tilt: -35,
              height: 20,
              width: 120,
              x: 120,
              y: 35,
              colorStart: "brand-solid-strong",
              colorEnd: "static-transparent",
            }}
          />
          <Column fillWidth alignItems="center" gap="32" padding="32" position="relative">

            <InlineCode radius="xl" shadow="m" fit paddingX="16" paddingY="8">
              서울시립과학관
              <Text onBackground="brand-medium" marginLeft="8">
                미니카 레이싱
              </Text>
            </InlineCode>
            <Heading wrap="balance" variant="display-default-l" align="center" marginBottom="16">
              MULY PALY
            </Heading>
            <Column alignItems="center" paddingTop="64" fillWidth gap="24">
              <Line maxWidth={4} marginBottom="16" background="neutral-alpha-medium" />
              <Heading marginBottom="12" as="h2" align="center" variant="heading-default-l">
                가장 멀리, 가장 빠르게 달리는
                <br /> 제작 미니카 레이싱
              </Heading>
 
                <Sidebar activePage={activePage} onToggle={setActivePage} />
                <div>{renderContent()}</div>

            </Column>
          </Column>
        </Column>
      </Column>
    </Column>
  );
}
