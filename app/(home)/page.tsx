import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <>
      <div className="bg-gray-50/90 border-t border-b border-gray-200 dark:bg-gray-950/90">
        <div className="container py-12 lg:py-16 grid gap-6 px-4 text-center md:gap-8 lg:gap-12">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Network Server Build
            </h1>
            <p className="mx-auto max-w-2xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Connecting the next generation of tech leaders.
            </p>
          </div>
          <div className="flex mx-auto max-w-sm flex-col gap-2 lg:gap-4 lg:max-w-md">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Join Now
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Club Activities
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Check out the exciting events and workshops we have planned for
              this semester.
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
                        src="/placeholder.svg"
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
                        src="/placeholder.svg"
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
      </section>
      <div className="bg-gray-50 border-t border-gray-200 dark:bg-gray-950">
        <div className="container py-12 lg:py-16 grid gap-6 px-4 text-center md:gap-8 lg:gap-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Join?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Fill out the form below to sign up for Network Server Build or
              request more information.
            </p>
          </div>
          <div className="mx-auto max-w-sm space-y-4">
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <Input placeholder="Name" type="text" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Message" type="text" />
              </div>
              <Button type="submit">Submit</Button>
            </form>
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
