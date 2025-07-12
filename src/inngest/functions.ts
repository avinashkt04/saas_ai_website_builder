import { gemini, createAgent } from "@inngest/agent-kit";

import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event  }) => {
    const codeAgent = createAgent({
      name: "code-agent",
      model: gemini({ model: "gemini-2.0-flash-lite"}),
      system: "You are an expert next.js developer. You write readable, maitainable code. You write simple Next.js & React snippets."
    })
     const { output } = await codeAgent.run(`write the following snippet: ${event.data.value}`);
     console.log("Summarizer output:", output);
    return { output };
  }
);