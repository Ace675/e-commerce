module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Platform trust and navigation clarity
        primary: {
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600 - Main primary color
          700: "#1D4ED8", // blue-700
          900: "#1E3A8A", // blue-900
          DEFAULT: "#2563EB", // blue-600
        },

        // Secondary Colors - Supporting information without competing
        secondary: {
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500 - Main secondary color
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          DEFAULT: "#64748B", // slate-500
        },

        // Accent Colors - Community highlights and purchase confidence
        accent: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          400: "#FBBF24", // amber-400
          500: "#F59E0B", // amber-500 - Main accent color
          600: "#D97706", // amber-600
          700: "#B45309", // amber-700
          DEFAULT: "#F59E0B", // amber-500
        },

        // Background Colors
        background: "#FAFAFA", // gray-50 - Clean product showcase canvas
        surface: "#FFFFFF", // white - Card depth and content separation

        // Text Colors
        text: {
          primary: "#1E293B", // slate-800 - Extended reading comfort
          secondary: "#64748B", // slate-500 - Clear information hierarchy
        },

        // Status Colors
        success: {
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500 - Purchase confirmation and positive feedback
          600: "#059669", // emerald-600
          DEFAULT: "#10B981", // emerald-500
        },

        warning: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500 - Inventory alerts and time-sensitive offers
          DEFAULT: "#F59E0B", // amber-500
        },

        error: {
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500 - Helpful problem identification
          600: "#DC2626", // red-600
          DEFAULT: "#EF4444", // red-500
        },

        // Border Colors
        border: {
          DEFAULT: "#E2E8F0", // slate-200
          light: "#F1F5F9", // slate-100
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        jetbrains: ["JetBrains Mono", "monospace"],
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
      },

      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },

      boxShadow: {
        subtle: "0 1px 3px rgba(0, 0, 0, 0.1)",
        prominent: "0 20px 25px rgba(0, 0, 0, 0.1)",
        card: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
        modal:
          "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
      },

      transitionDuration: {
        smooth: "300ms",
        quick: "200ms",
      },

      transitionTimingFunction: {
        smooth: "ease-out",
        quick: "ease-out",
      },

      borderRadius: {
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
      },

      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },

      animation: {
        "fade-in": "fadeIn 300ms ease-out",
        "slide-up": "slideUp 300ms ease-out",
        "scale-in": "scaleIn 200ms ease-out",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
