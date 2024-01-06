/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
        h2TextColor: "rgb(219 184 184)",
        h3TextColor: "#BEBEBE",
        priceColor: "#7C7C7C;",
        borderColor: "#D9D9D9",
        slideCopyColor: "#6A6A6A",
        filterWhiteColor:
          "invert(88%) sepia(96%) saturate(6285%) hue-rotate(188deg) brightness(116%) contrast(103%);",
        textColor: "#000000",
        navBarBgColor: "rgba(241, 241, 241, .4)",
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
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
