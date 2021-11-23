module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: {
          10: '#cdd7e9',
          20: '#afc0dc',
          30: '#91a8cf',
          40: '#7391c2',
          50: '#5579b5',
          60: '#3761A8',
          70: '#2f538f',
          80: '#264475',
          90: '#1e355c',
          100: '#162743',
          110: '#0e182a'
        },
        secondary: {
          10: '#e9cde5',
          20: '#dcafd5',
          30: '#cf91c6',
          40: '#c273b6',
          50: '#b555a6',
          60: '#a83797',
          70: '#8f2f80',
          80: '#752669',
          90: '#5c1e53',
          100: '#43163c',
          110: '#2a0e26'
        },
        success: {
          10: '#cde9cd',
          20: '#afdcaf',
          30: '#91cf91',
          40: '#73c273',
          50: '#55b555',
          60: '#37a837',
          70: '#2f8f2f',
          80: '#267526',
          90: '#1e5c1e',
          100: '#164316',
          110: '#0e2a0e'
        },
        warning: {
          10: '#fff2c6',
          20: '#ffeaa4',
          30: '#fee282',
          40: '#feda60',
          50: '#fed23d',
          60: '#FECA1B',
          70: '#d8ac17',
          80: '#b18d13',
          90: '#8b6f0f',
          100: '#66510b',
          110: '#403307'
        },
        danger: {
          10: '#fbd4d3',
          20: '#f9bab9',
          30: '#f6a19f',
          40: '#f48785',
          50: '#f16d6a',
          60: '#EF5350',
          70: '#cb4744',
          80: '#a73a38',
          90: '#832e2c',
          100: '#602120',
          110: '#3c1514'
        },
        info: {
          10: '#c9cccd',
          20: '#a8adaf',
          30: '#888e92',
          40: '#687074',
          50: '#465156',
          60: '#263238',
          70: '#202b30',
          80: '#1b2327',
          90: '#151b1f',
          100: '#0f1416',
          110: '#0a0d0e'
        },
        gray: {
          10: '#f5f5f5',
          20: '#e3e3e3',
          30: '#d4d4d4',
          40: '#c2c2c2',
          50: '#b3b3b3',
          60: '#a1a1a1',
          70: '#919191',
          80: '#808080',
          90: '#707070',
          100: '#5e5e5e',
          110: '#4f4f4f'
        },
        dark: {
          10: '#3d3d3d',
          20: '#383838',
          30: '#333333',
          40: '#2e2e2e',
          50: '#292929',
          60: '#242424',
          70: '#1f1f1f',
          80: '#141414',
          90: '#0f0f0f',
          100: '#0a0a0a',
          110: '#050505',
          '100-30': 'rgba(10, 10, 10, 0.3)'
        }
      },
      fontSize: {
        xs: '10px',
        sm: '12px',
        base: '14px',
        md: '16px',
        lg: '18px',
        h6: '20px',
        h5: '24px',
        h4: '30px',
        h3: '36px',
        h2: '42px',
        h1: '46px'
      },
      spacing: {
      },
      backgroundImage: {
        'split-primary-danger': 'linear-gradient(to bottom, #2f538f 50% , #EF5350 50%)',
        'split-warning-warning' : 'linear-gradient(to bottom, #FECA1B 50% , #b18d13 50%)',
        'split-primary-gray' : 'linear-gradient(to bottom, #5579b5 50% , #b3b3b3 50%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
