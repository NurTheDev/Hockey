/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontSize: {
      mh_22: [
        "22px",
        {
          lineHeight: "1.2rem",
          fontWeight: "800",
        },
      ],
      text_progress: [
        "20px",
        {
          lineHeight: "1.2rem",
          fontWeight: "600",
        },
      ],
      dh: ["36px", { lineHeight: "1.2rem", fontWeight: "800" }],
      normal_text_size: ["16px", { lineHeight: "26px", fontWeight: "400" }],
      progress_text: ["28px", { lineHeight: "1.2rem", fontWeight: "800" }],
    },
    fontFamily: {
      manrope: '"Manrope", sans-serif',
    },
    extend: {
      spacing: {
        mx_w_m: "292px",
        mx_w_d: "607px",
        mx_progress: "250px",
      },
      colors: {
        primary_color: "#FF4240",
        font_black: "#131318",
        light_gray: "#13131899",
        border_color: "#1313181a",
      },
    },
  },
  plugins: [require("daisyui")],
};
