"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ShieldCheck,
} from "lucide-react";

import { Button, Input } from "@/components/ui";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem(
        "token",
        "dummy-token"
      );

      router.push("/dashboard");
    }, 1000);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb33,transparent_35%),radial-gradient(circle_at_bottom_right,#06b6d433,transparent_35%)]" />

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">

        <div className="mb-8 text-center">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">

            <ShieldCheck
              className="h-8 w-8 text-white"
            />

          </div>

          <h1 className="text-3xl font-bold text-white">
            EasyShare Workforce
          </h1>

          <p className="mt-2 text-sm text-slate-300">
            Workforce Attendance &
            Management Platform
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          <div>

            <label className="mb-2 block text-sm text-slate-200">
              Email
            </label>

            <div className="relative">

              <Mail className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />

              <Input
                type="email"
                required
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="admin@easyshare.com"
                className="pl-12"
              />

            </div>

          </div>

          <div>

            <label className="mb-2 block text-sm text-slate-200">
              Password
            </label>

            <div className="relative">

              <Lock className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />

              <Input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                required
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                placeholder="Enter password"
                className="pl-12 pr-12"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-3"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-slate-400" />
                ) : (
                  <Eye className="h-5 w-5 text-slate-400" />
                )}
              </button>

            </div>

          </div>

          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 text-slate-300">

              <input type="checkbox" />

              Remember Me

            </label>

            <button
              type="button"
              className="text-blue-400 hover:text-blue-300"
            >
              Forgot Password?
            </button>

          </div>

          <Button
            type="submit"
            fullWidth
            loading={loading}
          >
            Sign In
          </Button>

        </form>

        <div className="mt-8 border-t border-white/10 pt-6 text-center">

          <p className="text-xs text-slate-400">
            Secure Login
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Version 1.0
          </p>

        </div>

      </div>

    </div>
  );
}