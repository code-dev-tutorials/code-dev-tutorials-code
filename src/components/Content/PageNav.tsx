import React from 'react';
import tw, { css } from 'twin.macro';
import Link from 'next/link';
import { MdArrowForwardIos } from 'react-icons/md';
import { P } from '../Base';

interface IPageNavProps {
  category: string;
  title?: string;
}

export const PageNav = ({ category, title, }: IPageNavProps) => {
  const naviStyle = css`
    & > a {
      ${tw` text-royal-blue-400 hover:text-royal-blue-700 hover:underline mr-[5px] `}
    }

    & > svg {
      ${tw` inline-block mr-[5px] mt-[-3px] `}
    }
  `;

  return (
    <>
      <P styles={naviStyle}>
        <Link href='/' passHref><a>홈</a></Link>
        <MdArrowForwardIos />
        {!title && (
          <>
            {category}
          </>
        )}
        {title && (
          <>
            <Link href='/[category]' as={`/${category}`} passHref><a>{category}</a></Link>
            <MdArrowForwardIos />
            {title}
          </>
        )}
      </P>
    </>
  );
};
