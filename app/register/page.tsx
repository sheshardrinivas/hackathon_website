"use client";

import { supabase } from "@/utils/supabase";
import Component from "@/components/ui/back-button";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Alert from "@/components/ui/alert";
import { unstable_ViewTransition as ViewTransition } from "react";
export default function Home() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputChallenge, setInputChallenge] = useState("");
  const [inputSchool, setInputSchool] = useState("");
  const [inputGrade, setInputGrade] = useState("");
  const [registered, setRegistered] = useState(false);
  const [registered2, setRegistered2] = useState(false);

  const newRow = {
    name: inputName,
    email: inputEmail,
    challenge: inputChallenge,
    school: inputSchool,
    grade: inputGrade,
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(event.target.value);
  };
  const handleChangeChallenge = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputChallenge(event.target.value);
  };
  const handleChangeSchool = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSchool(event.target.value);
  };
  const handleChangeGrade = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputGrade(event.target.value);
  };
  const handleAdd = async () => {
    await supabase.rpc("auto_number");

    const messageContainer = document.getElementById("message-container");
    if (messageContainer) {
      messageContainer.innerHTML = "";
    }

    const { data: existing } = await supabase
      .from("name")
      .select("*")
      .eq("email", newRow.email);

    if (existing && existing.length > 0) {
      if (messageContainer) {
        setRegistered(true);
        setTimeout(() => {
          setRegistered(false);
        }, 4000);
      }
      return;
    } else {
      await supabase.from("name").insert([newRow]);

      if (messageContainer) {
        setRegistered2(true);
        setTimeout(() => {
          setRegistered2(false);
        }, 4000);
      }
    }
  };

  return (
    <>
      <ViewTransition name="home">
        <div className="flex h-screen w-screen items-center justify-center flex-col  gap-6 ">
          <header className="flex  items-center justify-self-start   w-full   ">
            <Component />
          </header>

          <div className="flex h-screen lg:w-[20%] md:w-[32%] items-center justify-center flex-col  gap-[4rem] font-[Tomorrow]">
            <h1 className={"text-2xl font-light text-muted-foreground "}>
              Register
            </h1>
            <input
              value={inputName}
              onChange={handleChange}
              placeholder="Name"
              type="text"
              required
              className="text-foreground/70  placeholder:text-muted-foreground placeholder:font-[Tomorrow] selection:bg-primary selection:text-primary-foreground dark:bg-transparent border-input flex h-9 w-full min-w-0  border-b bg-transparent px-3 py-1 text-base shadow-xs transition-[color,border] duration-1000 outline-none file:inline-flex file:h-7 file:border-b-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm not-placeholder-shown:border-b-slate-800 "
            />

            <input
              value={inputEmail}
              onChange={handleChangeEmail}
              placeholder="Email"
              type="email"
              required
              className="text-foreground/70  placeholder:text-muted-foreground placeholder:font-[Tomorrow] selection:bg-primary selection:text-primary-foreground dark:bg-transparent border-input flex h-9 w-full min-w-0  border-b bg-transparent px-3 py-1 text-base shadow-xs transition-[color,border] duration-1000 outline-none file:inline-flex file:h-7 file:border-b-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm not-placeholder-shown:border-b-slate-800 "
            />
            <input
              value={inputChallenge}
              onChange={handleChangeChallenge}
              placeholder="Challenge"
              type="text"
              required
              className="text-foreground/70  placeholder:text-muted-foreground placeholder:font-[Tomorrow] selection:bg-primary selection:text-primary-foreground dark:bg-transparent border-input flex h-9 w-full min-w-0  border-b bg-transparent px-3 py-1 text-base shadow-xs transition-[color,border] duration-1000 outline-none file:inline-flex file:h-7 file:border-b-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm not-placeholder-shown:border-b-slate-800 "
            />
            <input
              value={inputSchool}
              onChange={handleChangeSchool}
              placeholder="school"
              type="text"
              required
              className="text-foreground/70  placeholder:text-muted-foreground placeholder:font-[Tomorrow] selection:bg-primary selection:text-primary-foreground dark:bg-transparent border-input flex h-9 w-full min-w-0  border-b bg-transparent px-3 py-1 text-base shadow-xs transition-[color,border] duration-1000 outline-none file:inline-flex file:h-7 file:border-b-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm not-placeholder-shown:border-b-slate-800 "
            />
            <input
              value={inputGrade}
              onChange={handleChangeGrade}
              placeholder="grade"
              type="number"
              required
              className="text-foreground/70    placeholder:text-muted-foreground placeholder:font-[Tomorrow] selection:bg-primary selection:text-primary-foreground dark:bg-transparent border-input flex h-9 w-full min-w-0  border-b bg-transparent px-3 py-1 text-base shadow-xs transition-[color,border] duration-1000 outline-none file:inline-flex file:h-7 file:border-b-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm not-placeholder-shown:border-b-slate-800 "
            />

            <Button
              variant="outline"
              className="rounded-[0.5rem]  font-light font-[Tomorrow]  cursor-pointer hover:translate-y-[-4px]  transition-transform duration-500 "
              onClick={handleAdd}
            >
              Register
            </Button>
          </div>
          <div id="message-container"></div>
          {registered ? <Alert message="You have already registered!" /> : null}
          {registered2 ? (
            <Alert message="Your name as been successfully added!" />
          ) : null}
        </div>
      </ViewTransition>
    </>
  );
}
