import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { getCategoryList, getCategoryMDX } from '@/utils/MDX';
import { IMDX } from '@/types';

interface ICategoryIndexProps {
  posts: IMDX[];
}

const CategoryIndexPage = ({ posts, }: ICategoryIndexProps) => {
  console.log(posts);

  return (
    <>
      <div>content</div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = getCategoryList();

  return {
    paths: categories.map((category) => ({
      params: {
        category,
      },
    })),
    fallback: false,
  };
};

type Params = {
  params: {
    category: string;
  }
}

export const getStaticProps: GetStaticProps = async ({ params: { category, }, }: Params) => {
  const posts = getCategoryMDX(category);

  return {
    props: {
      posts,
    },
  };
};

export default CategoryIndexPage;
