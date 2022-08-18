import React from 'react';
import tw, { css } from 'twin.macro';
import { Header } from '../Base';

interface ICourseGroupProps {
  children: React.ReactNode;
  title: string;
  icon: React.ReactElement;
}

export const CourseGroup = ({ children, title, icon, }: ICourseGroupProps) => {
  const headerStyle = css`
    ${tw` text-black-700 pb-2.5 mt-5 tracking-tighter `}

    & > span {
      ${tw` inline-flex items-center justify-start `}

      & > svg {
        ${tw` mr-[5px] `}
      }
    }
  `;

  const boxStyle = tw`p-2.5 bg-gray-100/40 rounded-2.5 border-2 border-black-700 tracking-tighter `;

  return (
    <>
      <Header Type='h3' styles={headerStyle}>
        <span>{icon}{title}</span>
      </Header>
      <div css={boxStyle}>
        {children}
      </div>
    </>
  );
};
