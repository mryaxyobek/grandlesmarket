/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        br:{
          black:{
            '222':"#222",
            '2A1A01':"#2A1A01"
          },
          grey:{
            '777':"#777",
            'F5F5F5':"#F5F5F5"
          },
          yellow:{
            'FF9B04':"#FF9B04"
          }
        }
      },
      backgroundColor:{
        grey:{
          'E0E0E0':"#E0E0E0",
          'F5F5F5':"#F5F5F5"
        },
        yellow:{
          'FF9B04':"#FF9B04"
        }
      },
      borderColor:{
        black:{
          '222':"#222",
        },
        grey:{
          '777':"#777",
          'E0E0E0':"#E0E0E0"
        },
      },
      borderRadius:{
        '10':"10px"
      },
      maxWidth: {
        '1440':"1440px",
        '1203':"1203px",
        '1018':"1018px",
        '670':"670px",
        '656':"646px",
        '620':"620px",
        '534':"534px",
        '215':"215px"
      },
      lineHeight:{
        '18':"18px",
        '14':"14px",
        '13':"13px",
        '66':"66px",
        '34':"34px",
        '30':"30px",
        '100':"100px",
        '50':"50px",
        '44':"44.2px",
        '26':"26px",
        '45':"45px"
      }
    },
  },
  plugins: [],
}