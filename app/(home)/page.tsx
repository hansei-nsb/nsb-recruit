import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { buttonVariants } from "@/components/ui/button";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import aws from "@/assets/aws.png";
import laptop from "@/assets/laptop.png";
import people from "@/assets/people.png";

import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="bg-gray-50/90 border-t border-b border-gray-200 dark:bg-gray-950/90">
        <div className="container py-12 lg:py-32 flex flex-col items-center gap-6 px-4 text-center md:gap-8 lg:gap-12">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Network Server Build
            </h1>
            <p className="mx-auto max-w-2xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              교내 자율동아리 NSB 신입부원 모집
            </p>
          </div>
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "w-fit py-5 px-10"
            )}
          >
            지원하기
          </Link>
        </div>
      </div>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              NSB란?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              NSB는 교내 자율동아리로 기능경기대회 에 출전하는 동아리에요
              기능경기대회에 출전하기 위해 클라우드 서비스의 핵심이해와 클라우드
              서비스, 네트워크 구축 및 컴퓨터 시스템을 배워 교내 대표로써
              기능경기대회에 출전하는걸 궁극적인 목표로 삼고 공부하고있어요
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              NSB는 이런걸 배워요
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              클라우드 서비스를 전혀 몰라도 괜찮아요, 열정만 있다면 선배들과
              함께 배워 나갈수있어요
            </p>
          </div>
          <div className="grid w-full grid-cols-3 items-stretch justify-center gap-4 lg:gap-6">
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image src={aws} alt="aws" />
                <CardTitle>Cloud</CardTitle>
                <CardDescription>
                  클라우드 서비스의 핵심기술인 AWS를 배워요
                </CardDescription>
              </CardHeader>
              <CardContent>Set time (to be coordinated)</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image src={laptop} alt="aws" />
                <CardTitle>컴퓨터시스템</CardTitle>
                <CardDescription>
                  컴퓨터의 간단한 동작 방식과 클라우드 서비스 구축에 필요한
                  개념을 배워요
                </CardDescription>
              </CardHeader>
              <CardContent>Set time (to be coordinated)</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image src={people} alt="aws" />
                <CardTitle>네트워킹</CardTitle>
                <CardDescription>
                  클라우드 서비스의 핵심기술인 AWS를 배워요
                </CardDescription>
              </CardHeader>
              <CardContent>Everyday!!</CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              지난활동들
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              NSB에서 보낸 지난 활동들을 확인해보세요.
            </p>
          </div>
          <div className="w-full grid grid-cols-3 gap-3">
            <img
              alt="Photo"
              // grid 2칸 차지
              className="rounded-xl object-cover overflow-hidden aspect-[16/9] col-span-2"
              height="225"
              src="https://cataas.com/cat"
              width="400"
            />
            <div />
            <div />
            <img
              alt="Photo"
              className="rounded-xl object-cover overflow-hidden aspect-[16/9] col-span-2"
              height="225"
              src="https://cataas.com/cat"
              width="400"
            />
            <img
              alt="Photo"
              className="rounded-xl object-cover overflow-hidden aspect-[16/9] col-span-2"
              height="225"
              src="https://cataas.com/cat"
              width="400"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              자주 묻는 질문
            </h2>
          </div>

          <Accordion type="single" collapsible>
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
                A. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industrys
                standard dummy text ever
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Q. 다른 동아리를 신청했는데.. 동아리 중복신청이 가능한가요?
              </AccordionTrigger>
              <AccordionContent>
                A. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industrys
                standard dummy text ever
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <div className="bg-gray-50 border-t border-gray-200 dark:bg-gray-950">
        <div className="container py-12 lg:py-16 grid gap-6 px-4 text-center md:gap-8 lg:gap-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              함께할 준비가 되셨나요?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              지금 지원해보세요! NSB에서 함께 공부하고 성장해나가요
            </p>
          </div>
          <div className="mx-auto max-w-sm space-y-4">
            <Button type="submit" className="py-4 px-10">
              지원하기
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
