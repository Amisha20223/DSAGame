/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          border: "#e5e7eb",
          input: "#e5e7eb",
          ring: "#93c5fd",
          background: "#ffffff",
          foreground: "#000000",
          primary: {
            DEFAULT: "#8b5cf6",
            foreground: "#ffffff",
          },
          secondary: {
            DEFAULT: "#f59e0b",
            foreground: "#ffffff",
          },
          destructive: {
            DEFAULT: "#ef4444",
            foreground: "#ffffff",
          },
          muted: {
            DEFAULT: "#f3f4f6",
            foreground: "#6b7280",
          },
          accent: {
            DEFAULT: "#f3f4f6",
            foreground: "#000000",
          },
          popover: {
            DEFAULT: "#ffffff",
            foreground: "#000000",
          },
          card: {
            DEFAULT: "#ffffff",
            foreground: "#000000",
          },
        },
        borderRadius: {
          lg: "0.5rem",
          md: "0.375rem",
          sm: "0.25rem",
        },
      },
    },
    plugins: [],
  }