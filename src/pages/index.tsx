import React from 'react';
import { GetStaticProps } from 'next';
import { useSiteMeta } from '@/hooks';
import AppLayout from '@/layouts/AppLayout';
import { getCategoryMDX } from '@/utils/MDX';
import { Block } from '@/components/Base';
import { PostList } from '@/components/Content';

const IndexPage = () => {
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
          <PostList />
        </div>
      </AppLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const htmlPosts = getCategoryMDX('HTML');
  const cssPosts = getCategoryMDX('CSS');
  const jsPosts = getCategoryMDX('JavaScript');

  return {
    props: {
      posts: {
        htmlPosts,
        cssPosts,
        jsPosts,
      },
    },
  };
};

export default IndexPage;
