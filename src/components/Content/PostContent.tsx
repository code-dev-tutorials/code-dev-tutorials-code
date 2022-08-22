import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { IFrontMatter, IH2 } from '@/types';
import { MDXComponents } from './MDXComponents';
import { PostCover } from '../Post';
import { PostToc } from './PostToc';

interface IPostContentProps {
  source: MDXRemoteSerializeResult;
  frontMatter: IFrontMatter;
}

export const PostContent = ({ source, frontMatter, }: IPostContentProps) => {
  const [ toc, setToc, ] = useState<IH2[]>([]);
  const postContentRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const contents = postContentRef.current;
    const tocData: IH2[] = [];

    const contentsArray = Array.from(contents.children);

    const headingContents = contentsArray.filter((node) => node.className.includes('post-heading'));

    for (let i = 0; i < headingContents.length; i++) {
      headingContents[i].id = `toc${i}`;
    }

    headingContents.forEach((item) => {
      const { innerText: text, id, } = item as HTMLDivElement;

      if (item.nodeName === 'H2') {
        tocData.push({
          id,
          text,
          name: item.nodeName,
          items: [],
        });
      } else if (item.nodeName === 'H3' && tocData.length > 0) {
        tocData[tocData.length - 1].items.push({
          id,
          text,
          name: item.nodeName,
          items: [],
        });
      } else if (item.nodeName === 'H4' && tocData.length > 0) {
        const subData = tocData[tocData.length - 1].items;

        subData[subData.length - 1].items.push({
          id,
          text,
          name: item.nodeName,
          items: [],
        });
      } else if (item.nodeName === 'H5' && tocData.length > 0) {
        const subData = tocData[tocData.length - 1].items;
        const subsubData = subData[subData.length - 1].items;

        subsubData[subsubData.length - 1].items.push({
          id,
          text,
          name: item.nodeName,
        });
      }
    });

    setToc(tocData);
  }, [ router.asPath, ]);

  const src = 'https://drive.google.com/uc?export=view&id=1SD9HD4JtWQip-4P24NoYgSj__iXXw3AT';

  return (
    <>
      <div id='post-block' ref={postContentRef}>
        {
          frontMatter.cover
            ? <PostCover src={frontMatter.cover} alt={frontMatter.title} />
            : <PostCover src={src} alt={frontMatter.title} />
        }
        <PostToc toc={toc} />
        <MDXRemote {...source} components={MDXComponents} />
      </div>
    </>
  );
};
