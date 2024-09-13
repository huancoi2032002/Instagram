import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'], // Đảm bảo đường dẫn content bao gồm các tệp cần xử lý
  darkMode: 'class', // Kích hoạt dark mode theo class
  theme: {
    extend: {
      width: {
        '55': '220px',
        '100': '400px',
      },
      backgroundColor: {
        'ig-elevated-background': '#262626',
        'ig-primary-button': '#0095F6',
        'ig-primary-button-hover': '#1877F2',
        'ig-second-button': '#1A1A1A',
        'ig-bg-button': '#363636'
        
      },
      textColor: {
        'ig-primary-text': '#F5F5F5',
        'ig-tertiary-text': '#737373',
        'ig-secondary-text': '#A8A8A8',
        'ig-link': '#E0F1FF',
        'ig-primary-button': '#0095F6',
        'ig-error-or-destructive': '#ED4956',
        'ig-tertiary-icon': '#737373'
      },
      fontFamily: {
      },
      borderColor: {
        'ig-separator': '#262626',
        'always-dark-overlay': 'rgba(0, 0, 0, 0.4)'
      }
    },
  },
  plugins: [],
} satisfies Config;
