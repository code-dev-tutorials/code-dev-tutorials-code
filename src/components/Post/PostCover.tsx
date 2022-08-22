import React from 'react';

interface IPostCoverProps {
  src: string;
  alt: string;
}

export const PostCover = ({ src, alt, }: IPostCoverProps) => {
  return (
    <>
      <div>
        <img src={src} alt={alt} />
      </div>
    </>
  );
};
