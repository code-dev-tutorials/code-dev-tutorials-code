import Link from 'next/link';
import React from 'react';
import tw, { css } from 'twin.macro';
import { mediaFontNormal } from '@/styles';

interface IPostAProps {
  children: React.ReactNode;
  type?: ('page' | 'external');
  href: string;
}

export const PostA = ({ children, href, type = 'page', }: IPostAProps) => {
  const color = {
    page: tw` text-royal-blue-400 hover:text-royal-blue-600 `,
    external: tw``,
  };

  const linkStyle = css`
    ${mediaFontNormal}
    ${tw` hover:underline `}
    ${color[type]}
  `;

  return (
    <>
      {
        type === 'page'
          ? (
            <Link href='/[category]/[slug]' as={href} passHref>
              <a css={linkStyle}>{children}</a>
            </Link>
          )
          : (
            <a href={href} target='_blank' rel='noreferrer noopner' css={linkStyle}>{children}</a>
          )
      }
    </>
  );
};
