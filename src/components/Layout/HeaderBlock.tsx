import React from 'react';
import tw, { css } from 'twin.macro';
import Link from 'next/link';
import { Block } from '../Base';
import CoDev from '@/images/CoDev.svg';
import { siteData } from '@/data';
import { mediaFontNormal } from '@/styles';

export const HeaderBlock = () => {
  const HeaderBlockStyle = css`
    ${tw` mb-[50px] `}
  `;

  const iconStyle = css`
    ${tw` text-black-700 hover:text-royal-blue-500 `}

    & > svg {
      ${tw` w-[200px] mx-auto `}
    }
  `;

  const versionStyle = css`
    ${mediaFontNormal}
    ${tw` text-center text-black-700 font-normal `}
  `;

  return (
    <>
      <Block Type='header' styles={HeaderBlockStyle}>
        <h1 tw='mb-2.5'>
          <Link href='/' passHref>
            <a css={iconStyle}>
              <CoDev />
            </a>
          </Link>
        </h1>
        <p css={versionStyle}>{siteData.version}</p>
      </Block>
    </>
  );
};
