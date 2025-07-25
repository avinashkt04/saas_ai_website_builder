"use client";

import { PricingTable } from "@clerk/nextjs";
import Image from "next/image";
import { dark } from "@clerk/themes";
import { useCurrentTheme } from "@/hooks/use-current-theme";

const Page = () => {

    const currentTheme = useCurrentTheme();

    return (
        <div className="flex flex-col max-w-3xl mx-auto w-full ">
            <section className="space-y-6 pt-[16vh] 2xl:pt-32">
                <div className="flex flex-col items-center gap-4">
                    <Image
                        src="/logo.svg"
                        alt="Vibe"
                        width={50}
                        height={50}
                        className="hidden md:block"
                    />
                    <h1 className="text-xl md:text-3xl font-bold text-center">Pricing</h1>
                    <p className="text-muted-foreground text-center text-sm md:text-base">
                        Choose the plan that fits your needs.
                    </p>
                    <PricingTable
                        appearance={{
                            baseTheme: currentTheme === "dark" ? dark : undefined,
                            elements: {
                                pricingTableCard: "border! shadow-none! shadow-none! rounded-lg!"
                            }
                        }}
                    />
                </div>

            </section>
        </div>
    )
}

export default Page;