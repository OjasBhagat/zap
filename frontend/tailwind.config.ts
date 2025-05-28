import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Include all files in the pages directory
    './components/**/*.{js,ts,jsx,tsx}', // Include all files in the components directory
    './app/**/*.{js,ts,jsx,tsx}', // For Next.js App Router
  ],
  theme: {
    extend: {
      // You can extend Tailwind's default theme here
      colors: {
        amber:{
            700 : "#ff4f00"
        },

        slate : {
          100: "#ebe9df"
        }

      },
    },
  },
  plugins: [
    // Add any plugins like @tailwindcss/forms, @tailwindcss/typography, etc.
  ],
};

export default config;
