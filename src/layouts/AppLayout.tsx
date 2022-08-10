import React from 'react';
import { Global } from '@emotion/react';
import tw, { css } from 'twin.macro';
import { SiteMeta } from '@/components';
import {
  FooterBlock, HeaderBlock, MainBlock, NavBlock
} from '@/components/Layout';
import { ISiteMeta } from '@/hooks';

interface IAppLayoutProps {
  children: React.ReactNode;
  meta: ISiteMeta;
}

const AppLayout = ({ children, meta, }: IAppLayoutProps) => {
  const globalStyles = css`
    body {
      ${tw` bg-blue-50 p-5 xs:(max-w-[100%]) sm:(max-w-[100%]) md:(max-w-[1024px] mx-auto) lg:(w-[1024px] mx-auto) `};
    }
  `;

  return (
    <>
      <Global styles={globalStyles} />
      <SiteMeta meta={meta} />
      <HeaderBlock />
      <NavBlock />

      <MainBlock>
        {children}
      </MainBlock>

      <FooterBlock />
    </>
  );
};

export default AppLayout;
