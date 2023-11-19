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
        h2TextColor: "#D3D3D3",
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
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
