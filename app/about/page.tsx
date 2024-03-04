export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Welcome to Network Server Build
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We are a community of passionate server administrators and
                network engineers. Join us to learn, connect, and grow your
                skills.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Mission
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We aim to provide a platform for knowledge sharing and
                collaboration among server enthusiasts. Our goal is to create a
                supportive community where members can learn from each other and
                stay updated on the latest trends in server management and
                network infrastructure.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What We Offer
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Members of Network Server Build gain access to a variety of
                resources and opportunities, including:
              </p>
            </div>
            <ul className="mx-auto max-w-[700px] grid gap-4 sm:gap-6 list-disc text-left last:mb-0">
              <li>Informative workshops and webinars</li>
              <li>Hands-on training sessions</li>
              <li>Networking events</li>
              <li>Exclusive access to industry experts</li>
            </ul>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Photo Gallery
              </h2>
            </div>
            <div className="mx-auto w-full max-w-[900px] grid gap-4 sm:gap-6 lg:grid-cols-2 xl:gap-8">
              <img
                alt="Photo"
                className="rounded-xl object-cover overflow-hidden aspect-[16/9]"
                height="225"
                src="/placeholder.svg"
                width="400"
              />
              <img
                alt="Photo"
                className="rounded-xl object-cover overflow-hidden aspect-[16/9]"
                height="225"
                src="/placeholder.svg"
                width="400"
              />
              <img
                alt="Photo"
                className="rounded-xl object-cover overflow-hidden aspect-[16/9]"
                height="225"
                src="/placeholder.svg"
                width="400"
              />
              <img
                alt="Photo"
                className="rounded-xl object-cover overflow-hidden aspect-[16/9]"
                height="225"
                src="/placeholder.svg"
                width="400"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Testimonials
              </h2>
            </div>
            <div className="mx-auto w-full max-w-[800px] grid gap-4 sm:gap-6 last:mb-0">
              <div className="space-y-2">
                <p>
                  {'"'}Joining Network Server Build has been an amazing
                  experience. I{"'"}ve learned so much from the workshops and
                  met some great people who share my passion for servers. The
                  hands-on training sessions have been incredibly valuable, and
                  I feel more confident in my skills thanks to the support of
                  this community.{'"'}
                </p>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  — Emily, Network Server Build Member
                </p>
              </div>
              <div className="space-y-2">
                <p>
                  {'"'}As a network administrator, I{"'"}m always looking for
                  ways to stay updated on the latest trends and technologies.
                  Network Server Build provides the perfect platform for
                  learning and networking. The events are well-organized, and
                  the speakers are experts in their field. I highly recommend
                  this club to anyone interested in advancing their knowledge of
                  server management and networking.{'"'}
                </p>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  — Alex, Network Server Build Member
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}