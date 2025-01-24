"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/navbar";
import { useRouter } from "next/navigation"; // For navigation after signup

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // Simple validation
    if (!email || !password || !confirmPassword) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost/x-token/signup.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          confirmPassword,
        }),
      });

      // Get the response as JSON
      const data = await response.json();

      // Check the response from the server
      if (data.status === "success") {
        // Store the token in localStorage with key 'authToken'
        localStorage.setItem("authToken", data.token);

        // Optionally, you can also store the user's email or any other info in localStorage
        localStorage.setItem("userEmail", email);

        setSuccessMessage("Account created successfully!... Redirecting...");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        // Redirect to /dashboard
        router.push("/dashboard");
      } else {
        setErrorMessage(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Create your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <Input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="bg-gray-900/50 border-gray-700 text-gray-100"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="bg-gray-900/50 border-gray-700 text-gray-100 mt-2"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <Input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="bg-gray-900/50 border-gray-700 text-gray-100 mt-2"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Display error or success message */}
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-500 text-sm mt-2">{successMessage}</p>
            )}

            <div>
              <Button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-gradient-to-r from-blue-500 to-purple-500 ${
                  isLoading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:from-blue-600 hover:to-purple-600"
                } text-white shimmer`}
              >
                {isLoading ? "Signing up..." : "Sign up"}
              </Button>
            </div>
          </form>
          <div className="text-center">
            <Link
              href="/login"
              className="font-medium text-blue-400 hover:text-blue-300"
            >
              Already have an account? Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
