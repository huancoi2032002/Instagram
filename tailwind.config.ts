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
        'ig-elevated-background': '#262626',
        'ig-primary-button': '#0095F6',
        'ig-primary-button-hover': '#1877F2',
      },
      textColor: {

      },
      fontFamily: {
      }
    },
  },
  plugins: [],
} satisfies Config;
