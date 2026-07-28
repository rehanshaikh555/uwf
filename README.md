# Attendance Management System

A production-ready attendance management system for schools, featuring a NestJS backend, Next.js admin dashboard, and Flutter mobile application for teachers.

## Project Structure

- `backend/`: NestJS API with Prisma and PostgreSQL.
- `web/`: Next.js Admin Dashboard with TailwindCSS and Shadcn UI.
- `mobile/`: Flutter App for Teachers using BLoC and MVVM.

## Tech Stack

- **Backend:** NestJS, Prisma ORM, PostgreSQL, JWT, Passport, ExcelJS, PDFKit.
- **Web:** Next.js 14, TypeScript, TailwindCSS, Shadcn UI, React Query, Axios.
- **Mobile:** Flutter, flutter_bloc, go_router, dio, flutter_secure_storage.

## Getting Started

### Prerequisites

- Node.js (v18+)
- Flutter SDK
- PostgreSQL Database

### Installation

#### 1. Backend
```bash
cd backend
npm install
# Update .env with your DATABASE_URL
npx prisma migrate dev
npx prisma db seed
npm run start:dev
```

#### 2. Web Dashboard
```bash
cd web
npm install
npm run dev
```

#### 3. Mobile App
```bash
cd mobile
flutter pub get
flutter run
```

## Features

### Admin
- Manage Teachers, Students, and Classes.
- View Attendance Analytics.
- Generate and Export Reports (PDF/Excel).

### Teacher
- One-click Check-in/Check-out.
- Take Student Attendance for assigned classes.
- View personal attendance history.

## Security
- JWT-based authentication.
- Role-Based Access Control (RBAC).
- Password hashing with Bcrypt.
- Input validation using class-validator.
