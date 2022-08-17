import React from 'react';
import tw, { css } from 'twin.macro';
import { FaRegCopyright } from 'react-icons/fa';
import { SiGithub, SiInstagram } from 'react-icons/si';
import { GrMail } from 'react-icons/gr';
import { Block } from '../Base';

export const FooterBlock = () => {
  const startYear = 2022;
  const currentYear = new Date().getFullYear();

  const year = currentYear > startYear ? `2022-${currentYear}` : '2022';

  const FooterBlockStyle = css`
    ${tw` mt-[50px] text-2xl text-black-700 `}
  `;

  const linkStyle = css`
    ${tw` mb-2.5 flex flex-row items-center justify-center `}

    & > a {
      ${tw` p-3 bg-black-700 text-[120%] mr-2.5 nth-last-1:mr-0 text-white rounded-full hover:bg-royal-blue-500 `}
    }
  `;

  const copyStyle = css`
    ${tw` flex flex-row items-center justify-center `}

    & > svg {
      ${tw` mr-[5px] `}
    }

    & strong {
      ${tw` font-black `}
    }
  `;

  return (
    <>
      <Block Type='footer' styles={FooterBlockStyle}>
        <p css={linkStyle}>
          <a href='mailto:nihil_ncunia@naver.com' aria-label='email'><GrMail /></a>
          <a
            href='https://www.instagram.com/nihil_illust/'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='instagram'
          >
            <SiInstagram />
          </a>
          <a
            href='https://github.com/NIHILncunia'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='github'
          >
            <SiGithub />
          </a>
        </p>
        <p css={copyStyle}>
          <FaRegCopyright />
          <span>{year}. <strong>NIHILncunia.</strong></span>
        </p>
      </Block>
    </>
  );
};
