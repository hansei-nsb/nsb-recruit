import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex flex-col gap-4">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800">
          <div className="container flex flex-col items-center justify-center px-4 text-center md:px-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Welcome to Network Server Build
              </h1>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join us to explore the world of network server building and gain
                hands-on experience.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center justify-center px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Join Network Server Build?
              </h2>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Network Server Build offers a platform for students to
                collaborate, learn, and innovate in the field of network server
                building. Members will gain valuable skills, industry
                connections, and practical knowledge.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Network Server Build
              </h2>
              <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Network Server Build is dedicated to providing students with the
                knowledge and resources to understand and build network servers.
                Our mission is to create a community of learners who are
                passionate about networking and server infrastructure.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Upcoming Events
              </h2>
              <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join us for exciting events that will enhance your knowledge and
                connect you with industry experts.
              </p>
            </div>
            <div className="mx-auto w-full max-w-lg grid gap-2">
              <div className="grid grid-cols-3 items-center justify-center p-4 border rounded-lg bg-gray-100/50 border-gray-200 shadow-sm md:grid-cols-3 dark:bg-gray-800/50 dark:border-gray-800 dark:shadow-sm">
                <div className="text-sm font-medium">Networking Workshop</div>
                <div className="text-sm text-center">Oct 15, 2023</div>
                <div className="text-sm text-right">10:00 AM</div>
              </div>
              <div className="grid grid-cols-3 items-center justify-center p-4 border rounded-lg bg-gray-100 border-gray-200 shadow-sm md:grid-cols-3 dark:bg-gray-800 dark:border-gray-800 dark:shadow-sm">
                <div className="text-sm font-medium">
                  Server Security Seminar
                </div>
                <div className="text-sm text-center">Nov 5, 2023</div>
                <div className="text-sm text-right">2:00 PM</div>
              </div>
              <div className="grid grid-cols-3 items-center justify-center p-4 border rounded-lg bg-gray-100/50 border-gray-200 shadow-sm md:grid-cols-3 dark:bg-gray-800/50 dark:border-gray-800 dark:shadow-sm">
                <div className="text-sm font-medium">Cloud Computing Panel</div>
                <div className="text-sm text-center">Dec 10, 2023</div>
                <div className="text-sm text-right">3:30 PM</div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Network Server Build
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Become a member of Network Server Build and unlock opportunities
                to learn, connect, and grow in the field of network server
                building.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2">
                <Input
                  className="max-w-sm"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified about upcoming events and membership
                details.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact Network Server Build
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have questions or want to learn more about Network Server Build?
                Contact us.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[400px] space-y-4">
              <form className="space-y-4">
                <div className="grid grid-cols-2 items-center gap-4">
                  <Label className="text-sm" htmlFor="name">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <Label className="text-sm" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    required
                    type="email"
                  />
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <Label className="text-sm" htmlFor="subject">
                    Subject
                  </Label>
                  <Input id="subject" placeholder="Enter the subject" />
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <Label className="text-sm" htmlFor="message">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    required
                  />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
