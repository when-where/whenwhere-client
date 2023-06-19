import { StyleSheet } from 'react-native';

const fontFamily = 'Pretendard-Bold';
const fontSizeXXXL = 50.517;
const fontSizeXXL = 37.897;
const fontSizeXL = 28.43;
const fontSizeLarge = 21.328;
const fontSizeMedium = 16;
const fontSizeSmall = 14;
const fontSizeXS = 12;
const fontSizeXXS = 10;
const letterSpacing = 0;
const lineHeight = 1.4; // 상대적인 값으로 설정 (예: 1.4는 140%를 의미)

const heading = StyleSheet.create({
  XXXL: {
    fontFamily: fontFamily,
    fontSize: fontSizeXXXL,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight * fontSizeXXXL,
  },
  XXL: {
    fontFamily: fontFamily,
    fontSize: fontSizeXXL,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight * fontSizeXXL,
  },
  XL: {
    fontFamily: fontFamily,
    fontSize: fontSizeXL,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight * fontSizeXL,
  },
  Large: {
    fontFamily: fontFamily,
    fontSize: fontSizeLarge,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight * fontSizeLarge,
  },
  Medium: {
    fontFamily: fontFamily,
    fontSize: fontSizeMedium,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight * fontSizeMedium,
  },
  Small: {
    fontFamily: fontFamily,
    fontSize: fontSizeSmall,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight * fontSizeSmall,
  },
  XS: {
    fontFamily: fontFamily,
    fontSize: fontSizeXS,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight * fontSizeXS,
  },
  XXS: {
    fontFamily: fontFamily,
    fontSize: fontSizeXXS,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight * fontSizeXXS,
  },
});

export default heading;