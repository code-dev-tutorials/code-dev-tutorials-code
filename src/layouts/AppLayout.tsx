import React from 'react';
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
  return (
    <>
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
