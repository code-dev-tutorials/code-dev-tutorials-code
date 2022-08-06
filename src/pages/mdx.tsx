import { GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';
import React from 'react';
import tw from 'twin.macro';
import { getMDX } from '@/utils/MDX';
import { ISlug } from '@/types';

interface IMDXPageProps {
  post: ISlug;
}

const Div = tw.div`flex flex-col items-center justify-center`;

const HomeLink = tw.a`inline-block mt-5 p-5 bg-black-700/60 text-white text-2xl mx-auto hover:bg-black-800`;

const MDXPage = ({ post, }: IMDXPageProps) => {
  const { source, } = post;

  return (
    <>
      <div>
        <MDXRemote {...source} />
      </div>
      <Div>
        <Link href='/' passHref>
          <HomeLink>홈으로 돌아가기</HomeLink>
        </Link>
      </Div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const post = await getMDX('test');

  return {
    props: {
      post,
    },
  };
};

export default MDXPage;
