/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      extend: {
         container: {
            center: true,
         },

         colors: {
            primary: "#0c8a7b",
            sub_text: "#828A89",
            
         },

         fontFamily: {
            inter: ["inter", "sans-serif"],
         },
      },
   },
   plugins: [],
};
