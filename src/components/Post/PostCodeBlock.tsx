import React, { ReactElement } from 'react';
import tw, { css } from 'twin.macro';
import { langColorStyle, mediaFontNormal } from '@/styles';

interface ICodeNode extends ReactElement {
  props: {
    children: React.ReactNode;
    className?: string;
  }
}

interface IPostCodeBlockProps {
  className: string;
  children: ICodeNode;
}

export const PostCodeBlock = ({ className, children, }: IPostCodeBlockProps) => {
  const langString = className.replace('language-', '');
  const { Lang, backgroundColor, textColor, } = langColorStyle(langString);

  const preStyle = css`
    ${mediaFontNormal}
    ${tw` rounded-b-2.5 !mb-[40px] !mt-0 border-[5px] font-code! `}
    border-color: ${backgroundColor};
  `;

  const langStyle = css`
    ${mediaFontNormal}
    ${tw` rounded-t-2.5 !mt-[40px] p-2.5 font-black font-code! `}

    background-color: ${backgroundColor};
    color: ${textColor};

    & > span {
      ${tw` text-[120%] `}
    }
  `;

  return (
    <>
      <div css={langStyle}>
        <span>{Lang}</span>
      </div>
      <pre className={className} css={preStyle}>
        <code className={children.props.className}>
          {children.props.children}
        </code>
      </pre>
    </>
  );
};
