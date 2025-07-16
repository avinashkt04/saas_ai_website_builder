import { gemini, createAgent } from "@inngest/agent-kit";
import { Sandbox } from "@e2b/code-interpreter"

import { inngest } from "./client";
import { getSandbox } from "./utils";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step  }) => {
    const sandboxId = await step.run("get-snadbox-id", async () => {
      const sandbox = await Sandbox.create("vibe-nextjs-test-avi-2");
      return sandbox.sandboxId;
    })

    const codeAgent = createAgent({
      name: "code-agent",
      model: gemini({ model: "gemini-2.0-flash-lite"}),
      system: "You are an expert next.js developer. You write readable, maitainable code. You write simple Next.js & React snippets."
    })
     const { output } = await codeAgent.run(`write the following snippet: ${event.data.value}`);

     const sandboxUrl = await step.run("get-sandbox-url", async () => {
      const sandbox = await getSandbox(sandboxId);
      const host = sandbox.getHost(3000);
      return `http://${host}`;
     })

    return { output, sandboxUrl };
  }
);