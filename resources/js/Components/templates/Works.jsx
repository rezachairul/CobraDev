import React from "react";
import { Timeline } from "@/components/ui/timeline";
export default function Works() {
    const data = [
        {
          title: "2025",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, minima.
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Debitis exercitationem ex dolor voluptatem suscipit tempora, dignissimos vero sequi!
              </p>
            </div>
          ),
        },
        {
          title: "2024",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Built and launched Aceternity UI and Aceternity UI Pro from scratch
              </p>
            </div>
          ),
        },
        {
          title: "Early 2023",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
                I usually run out of copy, but when I see content this big, I try to
                integrate lorem ipsum.
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Lorem ipsum is for people who are too lazy to write copy. But we are
                not. Here are some more example of beautiful designs I built.
              </p>
            </div>
          ),
        },
        {
          title: "Changelog",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                Deployed 5 new components on Aceternity today
              </p>
              <div className="mb-8">
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Card grid component
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Startup template Aceternity
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Random file upload lol
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Himesh Reshammiya Music CD
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Salman Bhai Fan Club registrations open
                </div>
              </div>
            </div>
          ),
        },
      ];
    return (
        <section id="works" className="py-16  bg-black text-white text-center">
            {/* <h2 className="text-3xl font-bold text-purple-400">My Works</h2>
            <p className="mt-4">Here are some of the projects I have worked on.</p> */}
            <Timeline data={data} />
        </section>
    );
}
