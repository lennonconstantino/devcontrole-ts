# DevControle-TS

DevControle-TS is a modern customer and ticket management system built with Next.js, TypeScript, and MongoDB. It enables businesses to efficiently manage their clients and support tickets with a clean, responsive interface and secure authentication.

The project was deployed to this endpoint
https://devcontrole-ts.vercel.app

---

## 🚀 Features

- **User Authentication**: Google OAuth login via NextAuth.js
- **Customer Management**: Register, list, and search customers
- **Ticket System**: Create, list, and manage support tickets (open/close)
- **Public Ticket Creation**: Allow customers to open tickets via email lookup
- **Responsive UI**: Mobile-friendly, modern design with Tailwind CSS
- **Form Validation**: Robust validation using React Hook Form, Zod, and Yup
- **Protected Dashboard**: Only authenticated users can access management features

---

## 🏗️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: [MongoDB](https://www.mongodb.com/) (via [Prisma ORM](https://www.prisma.io/))
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) with Google Provider
- **UI**: [Tailwind CSS](https://tailwindcss.com/), [React Icons](https://react-icons.github.io/react-icons/)
- **Forms**: [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/), [Yup](https://github.com/jquense/yup)
- **HTTP Client**: [Axios](https://axios-http.com/)

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router (pages, API routes)
│   ├── api/               # REST API endpoints
│   ├── dashboard/         # Authenticated dashboard
│   ├── open/              # Public ticket creation
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
├── lib/                   # Utility libraries (auth, API, Prisma)
├── providers/             # React context providers
├── utils/                 # Type definitions
└── generated/             # Prisma generated client
```

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone <repo-url>
cd devcontrole-ts
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure environment variables
Create a `.env` file in the root with the following:
```
DATABASE_URL=<your-mongodb-connection-string>
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
```

### 4. Generate Prisma client
```bash
npx prisma generate
```

### 5. Run the development server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🗃️ Database Schema (Prisma)
- **User**: Authentication and user management
- **Customer**: Client information
- **Ticket**: Support tickets
- **Account, Session, VerificationToken**: NextAuth.js integration

---

## 📚 Scripts
- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run start` – Start production server
- `npm run lint` – Lint code

---

## 📝 License
This project is licensed under the MIT License.

---

## 🙏 Acknowledgements
- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [SujeitoProgramador](https://sujeitoprogramador.com)
