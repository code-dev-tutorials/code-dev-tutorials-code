import { SerializedStyles } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import tw, { css } from 'twin.macro';

interface IListProps {
  children: React.ReactNode;
  type: ('ul' | 'ol');
}

export const List = ({ children, type: Type, }: IListProps) => {
  const [ listStyle, setListStyle, ] = useState<SerializedStyles>(null);

  useEffect(() => {
    if (Type === 'ol') {
      setListStyle(css`

      `);
    } else {
      setListStyle(css`
        & li:before {
          ${tw`  `}
        }
      `);
    }
  }, [ Type, ]);

  const commonStyle = css`
    & ul,
    & ol {
      ${tw` pl-[30px] `}
    }
    ${listStyle}
  `;

  return (
    <>
      <Type css={commonStyle}>{children}</Type>
    </>
  );
};
