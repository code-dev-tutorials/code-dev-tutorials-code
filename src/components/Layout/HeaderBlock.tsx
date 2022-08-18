import React from 'react';
import tw, { css } from 'twin.macro';
import { Block } from '../Base';
import CoDev from '@/images/CoDev.svg';

export const HeaderBlock = () => {
  const HeaderBlockStyle = css`
  `;

  return (
    <>
      <Block Type='header' styles={HeaderBlockStyle}>
        <div>
          <CoDev />
        </div>
      </Block>
    </>
  );
};
