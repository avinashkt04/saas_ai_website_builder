# 🧠 Vibe – The AI Website Builder

**Vibe** is a SaaS platform that helps users create and launch stunning websites using AI. From generating layout and content to live sandbox previews, Vibe is your smart, scalable, no-code solution for modern site building.

---

## 🚀 Features

- 🤖 **AI-Powered Generation** – Build websites with an AI agent using E2B sandbox environments.
- ⚙️ **Background Tasks** – Offload heavy generation and data tasks with Inngest jobs.
- 🧪 **Live Previews** – Real-time sandboxed site rendering and testing.
- 📦 **Monorepo-Ready Backend** – Built with tRPC and Prisma for clean, scalable APIs.
- 📊 **Data Layer** – Prisma ORM connected to **Neon** (PostgreSQL).
- 🔒 **Authentication + Billing** – Integrated with **Clerk** for user management and subscription flows.
- ⚡ **Blazing-fast UI** – Built with **Next.js 14 App Router**, **TanStack Query**, **ShadCN**, and **Tailwind CSS**.

---

## 🧱 Tech Stack

| Layer              | Tech                                             |
|-------------------|--------------------------------------------------|
| Frontend          | Next.js 14 (App Router)                          |
| State & API       | tRPC, TanStack Query                             |
| Auth & Billing    | Clerk                                            |
| AI + Execution    | E2B sandbox + custom AI agent                    |
| Background Jobs   | Inngest                                          |
| ORM & DB          | Prisma + Neon                                    |
| UI Components     | ShadCN UI                                        |
| Styling           | Tailwind CSS                                     |
| Deployment        | Vercel                                           |

---

## 🛠️ Setup

### 1. Clone the repo
```bash
git https://github.com/avinashkt04/saas_ai_website_builder.git
cd saas_ai_website_builder
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Create a `.env` file having these values:

```env
DATABASE_URL=postgresql://...
NEXT_PUBLIC_API_URL="https://localhost:3000"
GEMINI_API_KEY=...
CLERK_SECRET_KEY=...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
E2B_API_KEY=...
INGGEST_EVENT_KEY=...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
```

### 4. Push database
```bash
npx prisma db push
```

### 5. Run locally
```bash
npm run dev
```

---

## 📸 Screenshots

<!-- Replace with actual image links later -->

### 🧠 AI Website Generation
![AI Generation](/public/screenshots/img1.png)

### 💻 Live Sandbox Preview
![Live Preview](/public//screenshots/img3.png)

### 📋 Code Preview
![Dashboard](/public//screenshots/img2.png)

### 📋 Dashboard & Billing
![Dashboard](/public//screenshots/img4.png)


