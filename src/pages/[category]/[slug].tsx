import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { getAllTimeMDX } from '@/utils/MDX';

const CategorySlugPage = () => {
  return (
    <>
      <div>content</div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = getAllTimeMDX();

  return {
    paths: allPosts.map(({ slug, frontMatter: { category, }, }) => ({
      params: {
        category,
        slug,
      },
    })),
    fallback: false,
  };
};

type Params = {
  params: {
    category: string;
    slug: string;
  };
}

export const getStaticProps: GetStaticProps = async ({ params, }: Params) => {
  const { category, slug, } = params;

  return {
    props: {},
  };
};

export default CategorySlugPage;
