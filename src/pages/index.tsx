import React from 'react';
import tw, { css } from 'twin.macro';
import Link from 'next/link';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';

const IndexPage = () => {
  const meta = useSiteMeta({
    title: '홈',
    url: '/',
  });

  const IndexPageStyle = tw`text-center text-[32px] font-[700] text-white bg-black-600 p-5 m-5 shadow-xl shadow-black-600/50 rounded-[10px]`;

  const linkWrap = css`
    ${tw` flex flex-col items-center justify-center `};

    & > a {
      ${tw` inline-block mt-2.5 p-5 bg-black-700/60 text-white text-2xl mx-auto `};
      ${tw` hover:( bg-black-800 ) `}
    }
  `;

  return (
    <>
      <AppLayout meta={meta}>
        <div css={IndexPageStyle}>메인</div>
        <div css={linkWrap}>
          <Link href='/test' passHref>
            <a>테스트 페이지</a>
          </Link>
          <Link href='/mdx' passHref>
            <a>MDX 페이지</a>
          </Link>
        </div>
      </AppLayout>
    </>
  );
};

export default IndexPage;
