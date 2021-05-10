const colors = {
  primary: [
    `#4681cf`, // 0
    `#2c64ae`, // 1
    `#2c64ae`, // 2
    `#004266 `, //3
  ],
  secondary: [`#CCEAF3`, `#57B8D6`, `#00C1D0`],
  gray: [`#EEEDEC`, `#C0BFC0`, `#9EA2A8`, `#9B9B9B`],
  error: `#D0021B`,
  success: `#328A0E`,
  warning: `#F7B500`,
}

//                  0,  1,  2,  3,  4,  5,  6,  7,  8,  9,  10,  11
const fontSizes = [12, 14, 16, 18, 20, 25, 35, 50, 70, 85, 120, 250]

// 0: light, 1: regular, 2: medium, 3: bold
const fontWeights = [100, 400, 700, 900]

//             0, 1, 2,  3,  4,  5,   6,  7,    8
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const breakpoints = [`767px`, `1023px`, `1279px`, `1439px`, `1919px`, `3839px`]

// aliases
breakpoints.xs = breakpoints[0]
breakpoints.sm = breakpoints[1]
breakpoints.md = breakpoints[2]
breakpoints.lg = breakpoints[3]
breakpoints.xl = breakpoints[4]
breakpoints.ul = breakpoints[5]

const gradients = [
  `linear-gradient(to bottom, ${colors.primary[0]}, ${colors.secondary[0]})`,
]

export default {
  space,
  colors,
  fontSizes,
  gradients,
  breakpoints,
  fontWeights,
}
