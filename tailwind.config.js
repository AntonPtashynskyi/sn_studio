/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutralBg: "var(--neutralBg)",
        onNeutralBg: "var(--onNeutralBg)",
        primaryBg: "var(--primaryBg)",
        onPrimaryBg: "var(--onPrimaryBg)",
        bigNumber: "#F1F1F1",
        heroDecorativeTitleColor: "rgba(219, 184, 184, 0.15)",
        lightBgColor: "#F6F6EB",
        darkBgColor: "#F5D5CB",
        h2TextColor: "rgb(52, 52, 52)",
        h3TextColor: "#BEBEBE",
        priceColor: "#000000;",
        borderColor: "#D9D9D9",
        slideCopyColor: "#6A6A6A",
        filterWhiteColor:
          "invert(88%) sepia(96%) saturate(6285%) hue-rotate(188deg) brightness(116%) contrast(103%);",
        textColor: "#000000",
        navBarBgColor: "rgba(241, 241, 241, .4)",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
      },
      fontSize: {
        mobileMenu: [
          "24px",
          {
            fontWeight: "500",
          },
        ],
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
      },
      flex: {
        2: "2 2 0%",
      },
      boxShadow: {
        baseShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
        baseHoverShadow: "0px 7px 7px 0px rgba(0, 0, 0, 0.25) inset",
      },
      aspectRatio: {
        "5/2": "500 / 240",
      },
    },
  },
  // Dark mode configuration
  darkMode: "class",

  // Plugins
  plugins: [nextui()],

  // Production optimizations
  future: {
    hoverOnlyWhenSupported: true, // Only apply hover styles on devices that support hover
  },

  // JIT mode optimizations (enabled by default in Tailwind CSS v3)
  corePlugins: {
    // Disable unused core plugins to reduce CSS size if needed
    // preflight: true, // Keep for browser reset
  },
};
