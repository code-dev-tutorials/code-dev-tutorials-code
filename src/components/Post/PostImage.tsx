import React from 'react';
import { FaExpand, FaImage } from 'react-icons/fa';
import tw, { css } from 'twin.macro';

interface IPostImageProps {
  src: string;
  alt: string;
}

export const PostImage = ({ src, alt, }: IPostImageProps) => {
  const imageStyle = css`
    ${tw` my-10 text-center p-2.5 bg-royal-blue-50/50 rounded-2.5 border-2 border-royal-blue-100 `}

    & > img {
      ${tw` mx-auto rounded-2.5 border-2 border-black-700/50 `}
    }

    & > figcaption {
      ${tw` mt-2.5 text-[90%] text-royal-blue-500 `}

      & > svg {
        ${tw` inline-block mt-[-5px] mr-[5px] `}
      }
    }

    & > a {
      ${tw` w-[40%] mt-2.5 border-2 border-royal-blue-500/20 bg-royal-blue-100 px-2.5 py-1 text-royal-blue-500 rounded-1.5 inline-block text-[90%] hover:bg-royal-blue-500 hover:text-white hover:border-royal-blue-500 `}

      & > svg {
        ${tw` inline-block mt-[-5px] mr-[5px] `}
      }
    }
  `;

  return (
    <>
      <figure css={imageStyle}>
        <img src={src} alt={alt} />
        <figcaption><FaImage />{alt}</figcaption>

        <a href={src} target='_blank' rel='noreferrer noopener'>
          <FaExpand />크게 보기
        </a>
      </figure>
    </>
  );
};
