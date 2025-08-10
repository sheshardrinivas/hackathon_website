import LightRays from "@/components/ui/lightray";
import { unstable_ViewTransition as ViewTransition } from "react";
import Button_with_link from "@/components/client/Button";
import Header from "@/components/client/Header";

export default function Home() {
  return (
    <>
      <div className=" h-screen ">
        <LightRays />
        <Header />
        <ViewTransition name="home">
          <section id="home" className="text">
            <div className=" flex h-screen items-center justify-center flex-col px-4 gap-6">
              <h2 className="bg-clip-text text-4xl text-transparent text-center  bg-gradient-to-tl from-neutral-950 to-neutral-900 dark:from-neutral-900 dark:to-neutral-400  md:text-4xl lg:text-7xl font-sans   relative z-20 font-bold tracking-tight">
                ANIS HACKATHON <br />
              </h2>

              <p className="text-1xl brightness-[85%]  md:text-1xl lg:text-2xl  bg-clip-text text-transparent bg-gradient-to-l from-blue-500 to-emerald-400 text-center">
                First ever hackathon for school students.
              </p>

              <div className="flex justify-center items-center  ">
                <Button_with_link />
              </div>
            </div>
          </section>
        </ViewTransition>
      </div>
    </>
  );
}
