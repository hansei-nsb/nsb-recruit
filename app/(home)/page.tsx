import { AuthButton, JoinButton } from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";

import {
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

import aws from "@/public/aws.png";
import person from "@/public/person.png";
import laptop from "@/public/laptop.png";

import Image from "next/image";
import { Container } from "@/components/container";

export default function Page() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <>
      <Container>
        <header className="h-fit overflow-clip bg-gradient-to-bpx-12">
          <h1 className="animate-fade-out-down supports-no-scroll-driven-animations:animate-none max-w-[14ch] text-5xl font-bold leading-[1] [animation-range:0px_300px] [animation-timeline:scroll()] md:text-[120px]">
            Scroll driven animations are the future.
          </h1>
        </header>
      </Container>
      <Container>
        <div className="space-y-2 flex flex-col items-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Network Server Build
          </h1>
          <p className="mx-auto max-w-2xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            교내 자율동아리 NSB 신입부원 모집
          </p>
        </div>

        {isSupabaseConnected ? (
          <JoinButton />
        ) : (
          <Button disabled>아직은 지원기간이 아니예요</Button>
        )}
      </Container>

      <Container>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          NSB란?
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          NSB는 교내 자율동아리로 기능경기대회 에 출전하는 동아리에요
          기능경기대회에 출전하기 위해 클라우드 서비스의 핵심이해와 클라우드
          서비스, 네트워크 구축 및 컴퓨터 시스템을 배워 교내 대표로써
          기능경기대회에 출전하는걸 궁극적인 목표로 삼고 공부하고있어요
        </p>
      </Container>

      <Container>
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            NSB는 이런걸 배워요
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            클라우드 서비스를 전혀 몰라도 괜찮아요, 열정만 있다면 선배들과 함께
            배워 나갈수있어요
          </p>
        </div>
        <div className="grid w-full grid-cols-1 lg:grid-cols-3 items-stretch justify-center gap-4 lg:gap-6">
          <Card>
            <CardHeader className="flex flex-col items-center">
              <Image src={aws} alt="aws" className="my-3.5" />
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <h3 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
                Cloud
              </h3>
            </CardContent>
            <CardFooter className="text-center flex justify-center">
              클라우드 서비스의 핵심기술인 AWS를 배워요
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-col items-center">
              <Image src={person} alt="person" />
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <h3 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
                네트워킹
              </h3>
            </CardContent>
            <CardFooter className="text-center flex justify-center">
              클라우드 서비스의 핵심기술인 AWS를 배워요
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-col items-center">
              <Image src={laptop} alt="laptop" />
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <h3 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
                컴퓨터 시스템
              </h3>
            </CardContent>
            <CardFooter className="text-center flex justify-center">
              컴퓨터의 동작 방식과 클라우드 서비스 구축에 필요한 개념을 배워요
            </CardFooter>
          </Card>
        </div>
      </Container>

      <Container>
        <div className="w-full grid grid-cols-3 gap-3">
          <div className="space-y-3 col-span-3 mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              지난활동들
            </h2>
            <p>NSB에서 보낸 지난 활동들을 확인해보세요.</p>
          </div>
          <div />
          <Image
            alt="Photo"
            className="rounded-xl object-cover overflow-hidden aspect-[16/9] col-span-2"
            src="/placeholder.svg"
            width={10000}
            height={10000}
          />
          <Image
            alt="Photo"
            className="rounded-xl object-cover overflow-hidden aspect-[16/9] col-span-2"
            src="/placeholder.svg"
            width={10000}
            height={10000}
          />
          <div />
          <div />
          <Image
            alt="Photo"
            className="rounded-xl object-cover overflow-hidden aspect-[16/9] col-span-2"
            src="/placeholder.svg"
            width={10000}
            height={10000}
          />
        </div>
      </Container>

      <Container>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          자주 묻는 질문
        </h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Q. 클라우드 개념조차 모르는데.. 동아리에 지원해도 될까요?
            </AccordionTrigger>
            <AccordionContent>
              A. 기본적인 클라우드 개념이 있으면 좋지만 없어도 열정만 있다면
              괜찮아요 {":)"}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Q. 기능경기대회는 필수로 참가하는건가요?
            </AccordionTrigger>
            <AccordionContent>
              A. 네, NSB는 기능경기대회에 참가하는걸 목표로 하고있어요.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Q. 다른 동아리를 신청했는데.. 동아리 중복신청이 가능한가요?
            </AccordionTrigger>
            <AccordionContent>
              A. 가능해요, NSB는 자율동아리라서 중복신청이 가능해요
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Container>

      <Container>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          준비가 되셨나요?
        </h2>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          지금 지원해보세요! NSB에서 함께 공부하고 성장해나가요
        </p>

        {isSupabaseConnected ? (
          <JoinButton />
        ) : (
          <Button disabled>아직은 지원기간이 아니예요</Button>
        )}
      </Container>
    </>
  );
}
