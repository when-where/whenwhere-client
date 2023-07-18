import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { light } from '@/assets/themes';

const IconOnline = () => {
  return (
    <Svg width="20" height="14" fill="none" viewBox="0 0 20 14">
      <Path
        fill={light.contents.contentSub}
        d="M2.55 14c-.85 0-1.508-.296-1.975-.887C.108 12.52-.067 11.8.05 10.95l1.05-7.5c.15-1 .596-1.825 1.338-2.475A3.838 3.838 0 0 1 5.05 0h9.9c1 0 1.871.325 2.613.975.741.65 1.187 1.475 1.337 2.475l1.05 7.5c.117.85-.058 1.57-.525 2.163-.466.591-1.125.887-1.975.887a2.51 2.51 0 0 1-.975-.188 2.552 2.552 0 0 1-.825-.562L13.4 11H6.6l-2.25 2.25c-.25.25-.525.438-.825.563A2.51 2.51 0 0 1 2.55 14zM15 8a.97.97 0 0 0 .713-.287A.967.967 0 0 0 16 7a.967.967 0 0 0-.287-.713A.967.967 0 0 0 15 6a.968.968 0 0 0-.712.287A.968.968 0 0 0 14 7c0 .283.096.52.288.713A.968.968 0 0 0 15 8zm-2-3a.97.97 0 0 0 .713-.287A.967.967 0 0 0 14 4a.967.967 0 0 0-.287-.712A.967.967 0 0 0 13 3a.968.968 0 0 0-.712.288A.968.968 0 0 0 12 4c0 .283.096.52.288.713A.968.968 0 0 0 13 5zM5.75 8h1.5V6.25H9v-1.5H7.25V3h-1.5v1.75H4v1.5h1.75V8z"
      />
    </Svg>
  );
};

export default IconOnline;