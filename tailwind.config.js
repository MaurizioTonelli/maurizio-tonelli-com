module.exports = {
  prefix: "",
  purge: {
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-color": {
          DEFAULT: "var(--primary-color-500)",
          50: "var(--primary-color-50)",
          100: "var(--primary-color-100)",
          200: "var(--primary-color-200)",
          300: "var(--primary-color-300)",
          400: "var(--primary-color-400)",
          500: "var(--primary-color-500)",
          600: "var(--primary-color-600)",
          700: "var(--primary-color-700)",
          800: "var(--primary-color-800)",
          900: "var(--primary-color-900)",
        },
        "secondary-color": {
          DEFAULT: "var(--secondary-color-500)",
          50: "var(--secondary-color-50)",
          100: "var(--secondary-color-100)",
          200: "var(--secondary-color-200)",
          300: "var(--secondary-color-300)",
          400: "var(--secondary-color-400)",
          500: "var(--secondary-color-500)",
          600: "var(--secondary-color-600)",
          700: "var(--secondary-color-700)",
          800: "var(--secondary-color-800)",
          900: "var(--secondary-color-900)",
        },
        "accent-color": {
          DEFAULT: "var(--accent-color-500)",
          50: "var(--accent-color-50)",
          100: "var(--accent-color-100)",
          200: "var(--accent-color-200)",
          300: "var(--accent-color-300)",
          400: "var(--accent-color-400)",
          500: "var(--accent-color-500)",
          600: "var(--accent-color-600)",
          700: "var(--accent-color-700)",
          800: "var(--accent-color-800)",
          900: "var(--accent-color-900)",
        },
      },
      fontFamily: {
        display: ["Poppins", "ui-sans-serif"],
        body: ["Lato", "ui-sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
