/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
function pxToRem(value) {
  return `${value / 16}rem`
}

module.exports = {
    content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter"],
      },
      width: {
        1: "1px",
        18: "360px",
        310: "310px",
        370: "370px",
        430: "430px",
        450: "450px",
        510: "510px",
      },
      objectPosition: {
        370: "370px",
        450: "450px",
      },
      borderWidth: {
        1: "0.5px",
        2: "1px",
        3: "1.5px",
        4: "2px",
      },
      spacing: {
        310: "310px",
        350: "350px"
      },
      colors: {
        lightAsh: "#707070",
        almostBlack: "#222222",
        nameColor: "#101828",
        bgColor: "#F7F7F7",
        lightGray: "#F9F9F9",
        tableHeadBg: "#EAEAEA",
        orange: "#FEAA00",
        darkAsh: "#D0D0D0",
        lighterAsh: "#F3F3F3",
        lightBlue: "#DFF9FF",
        lightOrange: "#FFEEC9",
        lightRed: "#FFEEF4",
        almostWhite: "#EAECF0",
        blackRussian: "#101010",
        shadeBlue: "#667085",
        success: "#027A48",
        lightPurple: "#F9F5FF",
        darkPurple: "#7F56D9",
        darkerBlue: "#344054",
        tintedAsh: "#808080",
        disabled: "#FAFAFA",
        darkGreen: "#014342",
        inputBorder: "#D1D1D1",
        lightGreen: "#80B539",
        green: "#027A48",
        shadeGreen: "#ECFDF3",
        shadeRed: "#FEF3F2",
        shadeGray: "#F2F4F7",
        deepRed: "#B42318",
        selectLabel: "#555555",
        backText: "#707070",
        lightborder: "#E9E9E9",
        bgFafa: "#FAFAFA",
        kesAsh: "#EAEAEA",
        kesText: "#555555",
        percentAsh: "#B5B5B5",
        EAE: "#EAECF0",
        FFB: "#FFBD2E",
        mediumGreen: "#80B539",
        EFEF: "#EFEFEF",
        E5E5E5: "#E5E5E5",
        C4C4C4: "#c4c4c4",
        e6e6e6: "#E6E6E6",
        ipcolor2: "#DDDDDD",
        darkRed: "#C73C3C",
        lightYellow: "#FFFAEB",
        dashborder: "#D9D9D9",
      },
      boxShadow: {
        xmd: "0px 4px 40px 0px rgba(0, 0, 0, 0.15)",
        '3xl': "0px 0px 8px rgba(34, 34, 34, 0.07)",
      },
      gridTemplateColumns: {
        profileLayoutL: "auto 305px",
        profileLayoutM: "auto 278px",
      },
      borderRadius: {
        100: "100px",
        20: "20px",
        10: "10px",
      },
      backgroundColor: {
        lightPink: "rgba(255, 2, 2, 0.13)",
      },
      inset: {
        "135px": "-135px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}