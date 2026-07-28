"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "admin@groupsweet.com" && password === "123456") {
      localStorage.setItem("admin-auth", "true");
      setError("");
      router.push("/ar/dashboard");
    } else {
      setError("Incorrect email or password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#faf7f2]">
      <form onSubmit={handleLogin} className={styles.form}>
        <h1 className={styles.title}>
          Group Sweet
          <br />
          <span>Group Sweet Dashboard</span>
        </h1>

        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <p className="text-center text-sm font-medium text-red-600">
            {error}
          </p>
        )}
        <button type="submit" className={styles.buttonConfirm}>
          Sign In
        </button>
      </form>
    </div>
  );
}
