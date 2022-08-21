import Link from 'next/link';
import React from 'react';
import tw, { css } from 'twin.macro';
import { IoMdArrowDropright } from 'react-icons/io';
import { mediaFontNormal } from '@/styles';

interface ICourseItemProps {
  children: React.ReactNode;
  href: string;
}

export const CourseItem = ({ children, href, }: ICourseItemProps) => {
  const LinkBoxStyle = css`
    ${mediaFontNormal}
    ${tw` flex-1 block text-royal-blue-500 bg-royal-blue-100 px-2 py-1 rounded-1 font-[400] border border-royal-blue-500/20 `}

    &:hover {
      ${tw` bg-royal-blue-500 text-white border-royal-blue-500 `}
    }
  `;

  const boxStyle = css`
    ${tw` flex flex-row items-center justify-start text-black-700 my-[5px] nth-1:mt-0 nth-last-1:mb-0 `}
  `;

  return (
    <>
      <div css={boxStyle}>
        <IoMdArrowDropright />
        <Link href='/[category]/[slug]' as={href} passHref>
          <a css={LinkBoxStyle}>{children}</a>
        </Link>
      </div>
    </>
  );
};
