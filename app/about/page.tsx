import Header from "@/components/client/Header";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function AboutPage() {
  return (
    <>
      <ViewTransition name="home">
        <section className="about  ">
          <Header />

          <div className="flex h-screen items-center justify-center flex-col py-20">
            <h2 className="bg-clip-text text-transparent text-center  bg-gradient-to-tl from-neutral-950 to-neutral-900 dark:from-neutral-900 dark:to-neutral-400 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              ABOUT <br />
            </h2>

            <p className="text-2xl brightness-[85%]  bg-clip-text text-transparent bg-gradient-to-l from-blue-400 to-emerald-400 text-center">
              About the hackathon.
            </p>
          </div>
        </section>
      </ViewTransition>
    </>
  );
}
