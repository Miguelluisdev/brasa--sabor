
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Mont: 'Roboto Slab',
      serif: 'serif',
      PermanentMarker: "Permanent Marker",
    },
    colors: {
      "Verdeescuro": "#006400",
      "Cinzaescuro": "#333333",
      "Vermelhoescuro": "#8B0000",
      "Marrom": "#8B4513",
      "Amarelo": "#FFA500",
      "azul-celeste": "#080F26",
      "black": '#0D0D0D',
      "white": "#FFF"
    },
    animation: {
      slide: 'slide 1s ease-in-out',
      spin: " spin 1s ease-in-out "
    },
    keyframes: {
      slide: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
    },
    extend: {
      backgroundImage: {
        'img-pattern': "url('https://cdn.discordapp.com/attachments/1205228548986511420/1207393226311344128/proximo-do-delicioso-churrasco-mexicano.jpg?ex=65df7b91&is=65cd0691&hm=7cfcb8bcdf4bae3f2a1d629806f5ac7583ce2d4a67f5f16928e0db17b2250119&')",
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    // require('tailwindcss-animated'),
  ],
};