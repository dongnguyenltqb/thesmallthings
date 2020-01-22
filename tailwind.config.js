module.exports = {
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#24292E",
      "dark-gray": "#6A737D",
      "mid-gray": "#E1E4E8",
      "light-gray": "#FAFBFC",
      primary: "#1366E9",
      success: "#6EDC38",
      error: "#ED2626",
      warning: "#F6B951",
      columbia: "#ADD6FF",
    },
    fontFamily: {
      mono: ['"SF Mono"', '"Roboto Mono"', "monospace"],
      sans: ["Inter", "sans-serif"],
      "sans-alt": ['"Inter var"', "sans-serif"],
    },
    screens: {
      tablet: "768px",
      desktop: "1280px",
    },
    extend: {
      maxWidth: {
        "line-length": "80ch",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "disabled"],
    textColor: ["responsive", "hover", "focus", "disabled"],
    borderColor: ["responsive", "hover", "focus", "disabled"],
  },
  plugins: [],
}
