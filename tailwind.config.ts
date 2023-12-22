import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SofiaProSemiBoldItalic: ["SofiaProSemiBoldItalic", "sans-serif"],
        SofiaProSemiBold: ["SofiaProSemiBold", "sans-serif"],
        SofiaProMediumItalic: ["SofiaProMediumItalic", "sans-serif"],
        SofiaProMedium: ["SofiaProMedium", "sans-serif"],
        SofiaProBlackItalic: ["SofiaProBlackItalic", "sans-serif"],
        SofiaProBlack: ["SofiaProBlack", "sans-serif"],
        SofiaProBoldItalic: ["SofiaProBoldItalic", "sans-serif"],
        SofiaProBold: ["SofiaProBold", "sans-serif"],
        SofiaProUltraLightItalic: ["SofiaProUltraLightItalic", "sans-serif"],
        SofiaProUltraLight: ["SofiaProUltraLight", "sans-serif"],
        SofiaProRegularItalic: ["SofiaProRegularItalic", "sans-serif"],
        SofiaProRegular: ["SofiaProRegular", "sans-serif"],
        SofiaProExtraLightItalic: ["SofiaProExtraLightItalic", "sans-serif"],
        SofiaProExtraLight: ["SofiaProExtraLight", "sans-serif"],
        SofiaProLightItalic: ["SofiaProLightItalic", "sans-serif"],
        SofiaProLight: ["SofiaProLight", "sans-serif"],
        AbolitionTestLines: ["AbolitionTestLines", "sans-serif"],
        AbolitionTest: ["AbolitionTest", "sans-serif"],
        AbolitionTestLinesOblique: ["AbolitionTestLinesOblique", "sans-serif"],
        AbolitionTestOblique: ["AbolitionTestOblique", "sans-serif"],
        AbolitionTestRegular: ["AbolitionTestRegular", "sans-serif"],
        AbolitionTestRough: ["AbolitionTestRough", "sans-serif"],
        AbolitionTestRoughOblique: ["AbolitionTestRoughOblique", "sans-serif"],
        AbolitionTestRound: ["AbolitionTestRound", "sans-serif"],
        AbolitionTestRoundOblique: ["AbolitionTestRoundOblique", "sans-serif"],
        AbolitionTestSoft: ["AbolitionTestSoft", "sans-serif"],
        AbolitionTestSoftOblique: ["AbolitionTestSoftOblique", "sans-serif"],
      },
      colors: {
        Quinary: "#707070",
        Quaternary: "#ADADAD",
        Tertiary: "#F8F7F4",
        Secondary: "#E0F869",
        Primary: "#072434",
        White: "#fff",
      },
    },
    plugins: [require("daisyui")],
  },
};
export default config;
