import React from 'react';
import { Global } from '@emotion/react';
import tw, { css } from 'twin.macro';
import { SiteMeta } from '@/components';
import {
  FooterBlock, HeaderBlock, MainBlock
} from '@/components/Layout';
import { ISiteMeta } from '@/hooks';

interface IAppLayoutProps {
  children: React.ReactNode;
  meta: ISiteMeta;
}

const AppLayout = ({ children, meta, }: IAppLayoutProps) => {
  const globalStyles = css`
    body {
      ${tw` bg-royal-blue-50/60 p-5 xs:max-w-full sm:max-w-full md:max-w-[1024px] md:mx-auto lg:w-[1024px] lg:mx-auto `};
    }
  `;

  return (
    <>
      <Global styles={globalStyles} />
      <SiteMeta meta={meta} />
      <HeaderBlock />

      <MainBlock>
        {children}
      </MainBlock>

      <FooterBlock />
    </>
  );
};

export default AppLayout;
