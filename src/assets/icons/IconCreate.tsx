import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { globalColor, light } from '@/assets/themes';

const IconCreate = ({ focused }: { focused: boolean }) => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <Path
        d="M19.1667 27.5H20.8333V20.8333H27.5V19.1667H20.8333V12.5H19.1667V19.1667H12.5V20.8333H19.1667V27.5ZM20.0056 35C17.9313 35 15.9812 34.6064 14.1552 33.8192C12.3291 33.032 10.7407 31.9636 9.38996 30.6141C8.03921 29.2646 6.96986 27.6777 6.18192 25.8534C5.39397 24.0291 5 22.0798 5 20.0056C5 17.9313 5.3936 15.9812 6.18079 14.1552C6.96801 12.3291 8.03638 10.7407 9.38588 9.38996C10.7354 8.03921 12.3223 6.96986 14.1466 6.18192C15.9709 5.39397 17.9202 5 19.9944 5C22.0687 5 24.0188 5.3936 25.8448 6.18079C27.6709 6.96801 29.2593 8.03637 30.61 9.38587C31.9608 10.7354 33.0301 12.3223 33.8181 14.1466C34.606 15.9709 35 17.9202 35 19.9944C35 22.0687 34.6064 24.0188 33.8192 25.8448C33.032 27.6709 31.9636 29.2593 30.6141 30.61C29.2646 31.9608 27.6777 33.0301 25.8534 33.8181C24.0291 34.606 22.0798 35 20.0056 35ZM20 33.3333C23.7222 33.3333 26.875 32.0417 29.4583 29.4583C32.0417 26.875 33.3333 23.7222 33.3333 20C33.3333 16.2778 32.0417 13.125 29.4583 10.5417C26.875 7.95833 23.7222 6.66667 20 6.66667C16.2778 6.66667 13.125 7.95833 10.5417 10.5417C7.95833 13.125 6.66667 16.2778 6.66667 20C6.66667 23.7222 7.95833 26.875 10.5417 29.4583C13.125 32.0417 16.2778 33.3333 20 33.3333Z"
        fill={focused ? globalColor.primary : light.contents.contentThird}
      />
    </Svg>
  );
};

export default IconCreate;