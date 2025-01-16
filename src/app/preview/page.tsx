"use client";

import React, { useState } from "react";

import {
  Heading,
  Text,
  Button,
  Icon,
  InlineCode,
  Logo,
  Input,
  Avatar,
  AvatarGroup,
  Textarea,
  PasswordInput,
  SegmentedControl,
  SmartLink,
  Dialog,
  Feedback,
  SmartImage,
  Line,
  LogoCloud,
  Background,
  Select,
  useToast,
  Card,
  Fade,
  StatusIndicator,
  DateRangePicker,
  DateRange,
  TiltFx,
  HoloFx,
  IconButton,
  TagInput,
  Switch,
  Column,
  Row,
  StyleOverlay,
} from "@/once-ui/components";
import { CodeBlock, MediaUpload } from "@/once-ui/modules";

export default function PreviewPAge() {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedRange, setSelectedRange] = useState<DateRange>();
  const [isFirstDialogOpen, setIsFirstDialogOpen] = useState(false);
  const [isSecondDialogOpen, setIsSecondDialogOpen] = useState(false);
  const [firstDialogHeight, setFirstDialogHeight] = useState<number>();
  const { addToast } = useToast();
  const [intro, setIntro] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tags, setTags] = useState<string[]>(["UX / UI", "Design systems", "AI / ML"]);
  const [twoFA, setTwoFA] = useState(false);

  const handleSelect = (value: string) => {
    console.log("Selected option:", value);
    setSelectedValue(value);
  };

  const links = [
    {
      href: "/preview",
      title: "멀리 빨리란?",
      description: "What is MulyPaly?",
    },
    {
      href: "/ranking",
      title: "랭킹 보기",
      description: "Weekly",
    }
  ];


  const validateIntro = (value: React.ReactNode) => {
    if (typeof value === "string" && value.length < 10) {
      return (
        <Row alignItems="center" marginBottom="12" gap="8">
          <Icon name="errorCircle" />
          Intro must be at least 10 characters long.
        </Row>
      );
    }
    return null;
  };

  const validateLogin = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return "Email and / or password is invalid.";
    }
    return null;
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
            prefixIcon="discord"
            size="s"
            label="멀리빨리란?"
            weight="default"
            variant="tertiary"
          />
          <Button
            href="/ranking"
            prefixIcon="github"
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

          {/* 여기서 시작 */}

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
            </Column>
          </Column>

          {/* 소개 */}

          <Row
            marginY="32"
            background="overlay"
            fillWidth
            radius="xl"
            border="neutral-alpha-weak"
            overflow="hidden"
          >
            <Row fill hide="m">
              <SmartImage src="/images/mulypaly.jpg" alt="Preview image" sizes="560px" />
            </Row>
            <Column fillWidth alignItems="center" gap="20" padding="32" position="relative">
              <Background
                mask={{
                  x: 100,
                  y: 0,
                  radius: 75,
                }}
                position="absolute"
                grid={{
                  display: true,
                  opacity: 50,
                  width: "0.5rem",
                  color: "neutral-alpha-medium",
                  height: "1rem",
                }}
              />
              <Heading as="h3" variant="display-default-s">
                멀리빨리
              </Heading>
              <Row fillWidth paddingY="12">
                <Row onBackground="neutral-weak" fillWidth gap="24" alignItems="center">
                  <Line />/<Line />
                </Row>
              </Row>
              <Text onBackground="neutral-medium" marginBottom="24">
                가장 멀리 점프하는, 가장 빠르게 달리는<SmartLink href="/">"나만의 미니카"</SmartLink>를 설계하고 제작해보세요.
                상상한대로 자유롭게 제작하고 점수를 기록하는 자율 레이싱으로 초대합니다.
              </Text>
              <Row fillWidth paddingY="12">
                <Row onBackground="neutral-weak" fillWidth gap="24" alignItems="center">
                  <Line />
                </Row>
              </Row>
              <Text onBackground="neutral-medium" marginBottom="24">
              ● 대    상: 메이킹을 좋아하는 만 8세 이상 누구나 (2017~2018년 출생자는 보호자와 동반 필수)<br />
              ● 일    시: 2025. 1. 11. ~ 1. 19. / 2. 8. ~ 2. 23. (매주 토, 일) 10:00~11:30 / 13:30~15:00 / 15:30~17:00<br />
              ● 장    소: 서울시립과학관 메이커 스튜디오<br />
              ● 참 가 비: 5,000원<br />
              ● 예약시작: 2024. 12. 27. 금요일 오전 10시~
              </Text>
              <Column fillWidth gap="8">
                <Button
                  fillWidth
                  weight="default"
                  id="readDocs"
                  target="_blank"
                  label="예약 페이지"
                  href="https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S241223164029508683"
                  arrowIcon
                />
                
              </Column>
              
            </Column>
          </Row>
          <Row
            position="relative"
            fillWidth
            paddingX="32"
            paddingTop="80"
            minHeight={14}
            paddingBottom="80"
            justifyContent="center"
            alignItems="flex-end"
          >
            <Background
              mask={{
                x: 100,
                y: 100,
              }}
              position="absolute"
              grid={{
                display: true,
                color: "brand-alpha-strong",
                width: "0.25rem",
                height: "0.25rem",
              }}
            />
            <Row position="relative" textVariant="display-default-m" align="center">
              더 알아보기
            </Row>
          </Row>

          <Row fillWidth overflow="hidden">
            <Row maxWidth="32" borderTop="neutral-alpha-weak" borderBottom="neutral-medium"></Row>
            <Row fillWidth border="neutral-alpha-weak" mobileDirection="column">
              {links.map((link, index) => (
                <SmartLink unstyled fillWidth target="_blank" key={link.href} href={link.href}>
                  <Card
                    fillWidth
                    padding="40"
                    gap="8"
                    direction="column"
                    background={undefined}
                    borderRight={index < links.length - 1 ? "neutral-alpha-weak" : undefined}
                    border={undefined}
                    radius={undefined}
                  >
                    <Row fillWidth justifyContent="center" gap="12" alignItems="center">
                      <Text variant="body-strong-m" onBackground="neutral-strong">
                        {link.title}
                      </Text>
                      <Icon size="s" name="arrowUpRight" />
                    </Row>
                    <Text align="center" variant="body-default-s" onBackground="neutral-weak">
                      {link.description}
                    </Text>
                  </Card>
                </SmartLink>
              ))}
            </Row>
            <Row maxWidth="32" borderTop="neutral-alpha-weak" borderBottom="neutral-medium"></Row>
          </Row>


          <Row
          paddingX="32"
          fillWidth
          paddingY="160"
          gap="64"
          position="relative"
          mobileDirection="column"
          alignItems="center"
        >
          <Background
            style={{ left: "-1px" }}
            borderTop="neutral-alpha-medium"
            mask={{
              x: 0,
              y: 50,
              radius: 100,
            }}
            position="absolute"
            grid={{
              display: true,
              opacity: 100,
              width: "10%",
              color: "neutral-alpha-medium",
              height: "1.25%",
            }}
          />
          <Column fillWidth paddingX="32" gap="12" alignItems="center" position="relative">
            <Heading as="h2" variant="display-default-m">
              당신만의 미니카를 만들어보세요!
            </Heading>
            <Text marginBottom="32" align="center" onBackground="neutral-weak">
              다양한 재료로 미니카를 꾸며보세요.
            </Text>
          </Column>
          </Row>
        </Column>



        <Row
          position="relative"
          fillWidth
          paddingX="32"
          paddingTop="160"
          minHeight={28}
          paddingBottom="80"
          justifyContent="center"
          alignItems="flex-end"
        >
          <Background
            mask={{
              x: 50,
              y: 100,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "brand-alpha-strong",
              height: "0.25rem",
            }}
          />
          <Row position="relative" textVariant="display-default-m" align="center">
            Learn more
          </Row>
        </Row>
        <Row fillWidth overflow="hidden">
          <Row maxWidth="32" borderTop="neutral-alpha-weak" borderBottom="neutral-medium"></Row>
          <Row fillWidth border="neutral-alpha-weak" mobileDirection="column">
            {links.map((link, index) => (
              <SmartLink unstyled fillWidth target="_blank" key={link.href} href={link.href}>
                <Card
                  fillWidth
                  padding="40"
                  gap="8"
                  direction="column"
                  background={undefined}
                  borderRight={index < links.length - 1 ? "neutral-alpha-weak" : undefined}
                  border={undefined}
                  radius={undefined}
                >
                  <Row fillWidth justifyContent="center" gap="12" alignItems="center">
                    <Text variant="body-strong-m" onBackground="neutral-strong">
                      {link.title}
                    </Text>
                    <Icon size="s" name="arrowUpRight" />
                  </Row>
                  <Text align="center" variant="body-default-s" onBackground="neutral-weak">
                    {link.description}
                  </Text>
                </Card>
              </SmartLink>
            ))}
          </Row>
          <Row maxWidth="32" borderTop="neutral-alpha-weak" borderBottom="neutral-medium"></Row>
        </Row>
        <Row
          position="relative"
          as="footer"
          fillWidth
          paddingX="l"
          paddingTop="128"
          paddingBottom="80"
        >
          <Background
            borderTop="brand-alpha-strong"
            mask={{
              x: 50,
              y: 0,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "brand-alpha-strong",
              height: "0.25rem",
            }}
          />
          <Column
            position="relative"
            textVariant="body-default-xs"
            onBackground="neutral-medium"
            alignItems="center"
            align="center"
            fillWidth
            gap="16"
          >
            <Logo wordmark={false} size="s" />
            <Text size="m">
              <Text onBackground="neutral-weak">2024 /</Text> 서울시립과학관
            </Text>
            <SmartLink href="https://github.com/once-ui-system/nextjs-starter?tab=MIT-1-ov-file">
              MIT License
            </SmartLink>
          </Column>
        </Row>
      </Column>

      <Dialog
        isOpen={isFirstDialogOpen}
        onClose={() => setIsFirstDialogOpen(false)}
        title="Account details"
        description="Manage your security settings and password."
        base={isSecondDialogOpen}
        onHeightChange={(height) => setFirstDialogHeight(height)}
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsFirstDialogOpen(false)}>
              Close
            </Button>
          </>
        }
      >
        <Column paddingTop="24" fillWidth gap="24">
          <Switch
            reverse
            isChecked={twoFA}
            onToggle={() => setTwoFA(!twoFA)}
            label="2FA"
            description="Enable two factor authentication"
          />
          <Button onClick={() => setIsSecondDialogOpen(true)}>Change password</Button>
        </Column>
      </Dialog>
      <Dialog
        isOpen={isSecondDialogOpen}
        onClose={() => setIsSecondDialogOpen(false)}
        title="Change password"
        stack
        description="Choose a new password for your account."
        minHeight={firstDialogHeight}
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsSecondDialogOpen(false)}>
              Close
            </Button>
            <Button onClick={() => setIsSecondDialogOpen(false)}>Save</Button>
          </>
        }
      >
        <PasswordInput id="resetPassword" label="New password" />
      </Dialog>
    </Column>
  );
}
