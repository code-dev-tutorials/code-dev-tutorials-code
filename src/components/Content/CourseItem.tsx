import Link from 'next/link';
import React from 'react';
import tw, { css } from 'twin.macro';
import { mediaFontNormal } from '@/styles';

interface ICourseItemProps {
  children: React.ReactNode;
  href: string;
}

export const CourseItem = ({ children, href, }: ICourseItemProps) => {
  const LinkBoxStyle = css`
    ${mediaFontNormal}
    ${tw` block text-royal-blue-500 bg-royal-blue-100 px-2 py-1 rounded-1 my-[5px] nth-1:mt-0 nth-last-1:mb-0 font-[400] `}

    &:hover {
      ${tw` bg-royal-blue-500 text-white `}
    }
  `;

  return (
    <>
      <Link href='/[category]/[slug]' as={href} passHref>
        <a css={LinkBoxStyle}>{children}</a>
      </Link>
    </>
  );
};
