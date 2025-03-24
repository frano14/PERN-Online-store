import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme1: {
          "primary": "#15803d", 
          "secondary": "#ffffff",          
          "accent": "#ffffff",          
          "neutral": "#ffffff",          
          "base-100": "#000000",          
          "info": "#67e8f9",          
          "success": "#00ff00",          
          "warning": "#dc2626",          
          "error": "#ffff00",
          },
        },
      ],
    },
}
