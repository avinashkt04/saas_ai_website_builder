"use client"

import ProjectForm from "@/modules/home/ui/components/project-form";
import ProjectsList from "@/modules/home/ui/components/projects-list";
import Image from "next/image";


const Page = () => {

  return (
    <div className="flex flex-col max-w-5xl mx-auto w-full">
      <section className="space-y-6 py-[16vh] 2xl:pt-32">
        <div className="flex flex-col items-center">
          <Image
            src="/logo.svg"
            alt="Vibe"
            width={50}
            height={50}
            className="hidde md:block"
          />
        </div>
        <h1 className="text-2xl md:text-5xl font-bold text-center">
          Build something with vibe
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground text-center">
          Create apps and websites by chatting with AI
        </p>
        <div className="max-w-3xl mx-auto w-full">
          <ProjectForm />
        </div>
        <ProjectsList />
      </section>
    </div>
  )
}

export default Page;