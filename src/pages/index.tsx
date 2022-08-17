import React from 'react';
import { GetStaticProps } from 'next';
import { useSiteMeta } from '@/hooks';
import AppLayout from '@/layouts/AppLayout';
import {
  getJSBackMDX, getJSExtendMDX, getJSFrontMDX, getProgrammingMDX, getWebBasicMDX
} from '@/utils/MDX';
import { Block } from '@/components/Base';
import { PostList } from '@/components/Content';
import { IPosts } from '@/types';

interface IIndexPageProps {
  posts: IPosts
}

const IndexPage = ({ posts, }: IIndexPageProps) => {
  const meta = useSiteMeta({
    title: '홈',
    url: '/',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div id='index-page'>
          <Block>
            <p>테스트</p>
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

export default IndexPage;
