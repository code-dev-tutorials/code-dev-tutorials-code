import React from 'react';
import tw, { css } from 'twin.macro';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { BiErrorCircle } from 'react-icons/bi';
import { GetStaticProps } from 'next';
import { useSiteMeta } from '@/hooks';
import AppLayout from '@/layouts/AppLayout';
import { Block, Header } from '@/components/Base';
import { mediaFontNormal } from '@/styles';
import { PostList } from '@/components/Content';
import {
  getJSBackMDX, getJSExtendMDX, getJSFrontMDX, getProgrammingMDX, getWebBasicMDX
} from '@/utils/MDX';
import { IPosts } from '@/types';

interface I404Props {
  posts: IPosts;
}

const NotPound404 = ({ posts, }: I404Props) => {
  const headerStyle = css`
    ${tw` mb-5 text-center `}

    & > span {
      ${tw` text-royal-blue-500 flex flex-row items-center justify-center `}

      & > svg {
        ${tw` mr-[5px] `}
      }
    }
  `;

  const pStyle = css`
    ${tw` text-center mb-5 tracking-tighter text-black-700 `}
  `;

  const linkStyle = css`
    ${mediaFontNormal}
    ${tw` flex flex-row items-center justify-center text-center text-royal-blue-500 bg-royal-blue-100 tracking-tighter p-2.5 rounded-2.5 border border-royal-blue-500/20 hover:border-royal-blue-500 hover:bg-royal-blue-500 hover:text-white `}

    & > svg {
      ${tw` mr-[5px] `}
    }
  `;

  const blockStyle = css`
    ${tw` mb-5 `}
  `;

  const meta = useSiteMeta({
    title: '에러 404',
    url: '/404',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div id='404-page'>
          <Block styles={blockStyle}>
            <Header styles={headerStyle}><span><BiErrorCircle />에러 404</span></Header>
            <p css={pStyle}>페이지가 없습니다.</p>
            <Link href='/' passHref>
              <a css={linkStyle}><FaHome />홈으로 돌아가기</a>
            </Link>
          </Block>
          <PostList posts={posts} hide={false} />
        </div>
      </AppLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const programming = getProgrammingMDX();
  const webBasic = getWebBasicMDX();
  const jsExtends = getJSExtendMDX();
  const jsFront = getJSFrontMDX();
  const jsBack = getJSBackMDX();

  return {
    props: {
      posts: {
        programming,
        webBasic,
        jsExtends,
        jsFront,
        jsBack,
      },
    },
  };
};

export default NotPound404;
