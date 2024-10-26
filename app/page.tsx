"use client";

import { useClerk } from "@clerk/nextjs";
import { Krona_One, DM_Sans } from "next/font/google";

import { SignOut } from "./_components/icons/SignOut";
import { Stepper } from "./_components/Stepper";

const krona = Krona_One({
  subsets: ["latin"],
  weight: ["400"],
});

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "700"],
});

export default function Home() {
  const { signOut } = useClerk();

  return (
    <div className=" bg-[#f5f4ed]">
      <header className="flex justify-between bg-[#ffa743] px-28 py-5">
        <span className={`${krona.className} text-xl text-[#7A2200]`}>
          INSPIRA
        </span>

        <button type="button" onClick={() => signOut()}>
          <SignOut />
        </button>
      </header>

      <div className="flex min-h-screen w-full flex-col items-center py-16">
        <div className="text-center">
          <h1 className={`text-2xl font-bold ${dm.className}`}>
            Let&apos;s get started!
          </h1>
          <p
            className={`mb-14 mt-4 text-base font-normal text-[#6F6C90] ${dm.className}`}
          >
            We need to learn more about you and your project to better <br />
            understand your goals and recommend your idea for crowdfunding.
          </p>
        </div>
        <Stepper />
      </div>
    </div>
  );
}
