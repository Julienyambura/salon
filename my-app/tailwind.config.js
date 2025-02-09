module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#f6f0ff",
          100: "#e1d5ff",
          200: "#c4aaff",
          300: "#a780f1",
          400: "#8a55f2",
          500: "#6d2ce1", // Main Purple
          600: "#5b1ba8",
          700: "#481281",
          800: "#350b5b",
          900: "#230640",
        },
        lavender: {
          50: "#f8f3ff",
          100: "#e1c9ff",
          200: "#d4a6ff",
          300: "#c282ff",
          400: "#a65fff",
          500: "#9a4eed",
          600: "#7f3fdd",
          700: "#6331b8",
          800: "#49248d",
          900: "#34185f",
        },
        violet: {
          50: "#f9f4ff",
          100: "#e2d4ff",
          200: "#bfa0f9",
          300: "#9f6ef5",
          400: "#7f3ef0",
          500: "#5f0be5",
          600: "#4a09d0",
          700: "#3805b0",
          800: "#2b0390",
          900: "#1e0172",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
