export const colors = {
  white: "#FFFFFF",
  black: "#272727",
  red: "#FF8484",
  yellow: "#FEE102",
  gray_10: "#F2F2F2",
  gray_20: "#E3E3E3",
  gray_30: "#CFCFCF",
  gray_40: "#BCBCBC",
  gray_50: "#ADADAD",
  gray_60: "#676767",
  gray_70: "#575757",
  gray_80: "#474747",
  gray_90: "#373737",
} as const;

export type ColorType = typeof colors;
