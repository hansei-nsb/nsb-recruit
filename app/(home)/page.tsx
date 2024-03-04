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

import { Input } from "@/components/ui/input";
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
          <div className="mx-auto w-full max-w-[900px] grid gap-4 sm:gap-6 lg:grid-cols-2 xl:gap-8">
            <img
              alt="Photo"
              className="rounded-xl object-cover overflow-hidden aspect-[16/9]"
              height="225"
              src="https://cataas.com/cat"
              width="400"
            />
            <img
              alt="Photo"
              className="rounded-xl object-cover overflow-hidden aspect-[16/9]"
              height="225"
              src="https://cataas.com/cat"
              width="400"
            />
            <img
              alt="Photo"
              className="rounded-xl object-cover overflow-hidden aspect-[16/9]"
              height="225"
              src="https://cataas.com/cat"
              width="400"
            />
            <img
              alt="Photo"
              className="rounded-xl object-cover overflow-hidden aspect-[16/9]"
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

      {/* <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Upcoming Events
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Save the dates! Here are the events we have planned for the next
              month.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-stretch justify-center md:grid-cols-2 gap-4 lg:gap-6">
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <Card>
                <CardHeader className="flex flex-col items-center">
                  <CalendarIcon className="h-8 w-8" />
                  <CardTitle>Workshops</CardTitle>
                  <CardDescription>
                    Hands-on sessions with industry experts.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <p>Every Wednesday 3pm-5pm</p>
                  <p>Location: Room 210</p>
                </CardContent>
              </Card>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <Card>
                <CardHeader className="flex flex-col items-center">
                  <UsersIcon className="h-8 w-8" />
                  <CardTitle>Networking</CardTitle>
                  <CardDescription>
                    Connect with professionals in the industry.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <p>Monthly meetups</p>
                  <p>Next event: March 15th</p>
                </CardContent>
              </Card>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <Card>
                <CardHeader className="flex flex-col items-center">
                  <BookIcon className="h-8 w-8" />
                  <CardTitle>Learning</CardTitle>
                  <CardDescription>
                    Educational sessions on the latest tech trends.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <p>Bi-weekly</p>
                  <p>Topics: AI, Cybersecurity</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Testimonials
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              See what our members have to say about their experience with
              Network Server Build.
            </p>
          </div>
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <div className="container grid gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <div className="grid gap-2">
                  <p className="text-sm tracking-wide uppercase text-gray-500 dark:text-gray-400">
                    Testimonial
                  </p>
                  <div className="space-y-2">
                    <p className="text-2xl font-semibold tracking-tighter sm:text-3xl">
                      {'"'}The club{"'"}s workshops have been incredibly
                      informative and practical. I{"'"}ve learned a lot of
                      valuable skills that I can apply in my future career. The
                      hands-on approach really makes a difference. I highly
                      recommend joining Network Server Build!{'"'}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="rounded-full overflow-hidden border border-gray-200 border-gray-200">
                      <img
                        alt="User"
                        className="rounded-full object-cover"
                        height="100"
                        src="https://cataas.com/cat"
                        style={{
                          aspectRatio: "100/100",
                          objectFit: "cover",
                        }}
                        width="100"
                      />
                    </div>
                    <p className="font-semibold">Samantha Miller</p>
                  </div>
                </div>
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <div className="grid gap-2">
                  <p className="text-sm tracking-wide uppercase text-gray-500 dark:text-gray-400">
                    Testimonial
                  </p>
                  <div className="space-y-2">
                    <p className="text-2xl font-semibold tracking-tighter sm:text-3xl">
                      {'"'}The club{"'"}s workshops have been incredibly
                      informative and practical. I{"'"}ve learned a lot of
                      valuable skills that I can apply in my future career. The
                      hands-on approach really makes a difference. I highly
                      recommend joining Network Server Build!{'"'}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="rounded-full overflow-hidden border border-gray-200 border-gray-200">
                      <img
                        alt="User"
                        className="rounded-full object-cover"
                        height="100"
                        src="https://cataas.com/cat"
                        style={{
                          aspectRatio: "100/100",
                          objectFit: "cover",
                        }}
                        width="100"
                      />
                    </div>
                    <p className="font-semibold">Samantha Miller</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
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

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function BookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}
