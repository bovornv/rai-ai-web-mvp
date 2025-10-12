/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans Thai"', "system-ui", "-apple-system", "Segoe UI", "Roboto", '"Helvetica Neue"', "Arial", "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#0A1F33",
          soft: "#42566F",
        },
        bg: {
          DEFAULT: "#F7FAFF",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          border: "#E6ECF5",
        },
        pri: {
          500: "#2563eb",
          600: "#1d4ed8",
        },
        teal: {
          500: "#14b8a6",
        },
        agri: {
          500: "#2E7D32", // subtle agriculture accent
        },
        // Keep existing rai colors for backward compatibility
        'rai-green': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        'rai-teal': {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        }
      },
      boxShadow: {
        soft: "0 6px 18px rgba(10,31,51,.10)",
      },
      borderRadius: {
        xl2: "16px",
        xl3: "20px",
      },
      backgroundImage: {
        "hero-grad": "linear-gradient(135deg, rgba(37,99,235,.95) 0%, rgba(20,184,166,.92) 100%)",
        "cta-grad": "linear-gradient(135deg, #2563eb 0%, #14b8a6 100%)",
      },
      fontSize: {
        // BIG defaults for rural readability
        base: ["18px", { lineHeight: "1.55" }],
        "display-1": ["clamp(28px,4vw,40px)", { fontWeight: "800", letterSpacing: "0.2px" }],
        "display-2": ["clamp(22px,3vw,28px)", { fontWeight: "700" }],
      },
      spacing: {
        sectionY: "4.5rem", // ~72px (desktop section padding)
      },
      screens: {
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
}