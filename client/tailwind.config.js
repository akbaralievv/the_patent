import flowbitePlugin from 'flowbite/plugin';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },
      colors: {
        customOrange: '#F8B128',
        customBlue: '#28C6F8',
        customBlueHR: '#024BDA',
        authTextColor: '#618777',
      },
      backgroundColor: {
        'black-90': 'rgba(37,37,37)',
        customBlueBackground: 'rgba(2, 75, 218, 0.3)',
        customCardBackground: 'rgba(139, 154, 139, 0.3)',
        authBackground: 'rgb(226, 234, 233)',
        authLocaleBtn: 'rgba(2, 75, 218, 0.3)',
        authInputBackground: 'rgb(219, 244, 238)',
        authPhoneBackground: '#95E9D5',
      },
    },
  },
  plugins: [flowbitePlugin],
};
