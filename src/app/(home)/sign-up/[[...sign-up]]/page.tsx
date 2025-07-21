"use client";

import { useCurrentTheme } from "@/hooks/use-current-theme";
import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const Page = () => {
  const currentTheme = useCurrentTheme();

  return (
    <div className="flex flex-col max-w-3xl mx-auto w-full">
        <div className="space-y-6 pt-[16vh] 2xl:pt-32">
            <div className="flex flex-col items-center">
                <SignUp 
                  appearance={{
                    baseTheme: currentTheme === "dark" ? dark : undefined,
                    elements: {
                      cardBox: "border! shadow-none! rounded-lg!",
                    }
                  }}
                />
            </div>
        </div>
    </div>
  )
};

export default Page;
