import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      boxShadow: {
        input: "0px 2px 6px 0px rgba(19, 18, 66, 0.07)",
        stepper: "0px 5px 16px 0px #080F340F",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
