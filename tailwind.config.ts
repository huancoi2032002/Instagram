import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'], // Đảm bảo đường dẫn content bao gồm các tệp cần xử lý
  darkMode: 'class', // Kích hoạt dark mode theo class
  theme: {
    extend: {
      width: {
        '55': '220px'
      },
      backgroundColor: {

      },
      textColor: {

      },
      fontFamily: {
      }
    },
  },
  plugins: [],
} satisfies Config;
