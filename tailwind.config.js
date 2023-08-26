/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["winter", "dracula", "dark", "emerald"],
  },
  theme: {
    extend: {
      minHeight: {
        content: "calc(100vh - 82px)",
      },
    },
  },
  plugins: [require("daisyui")],
};
