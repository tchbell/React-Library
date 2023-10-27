import React, { ReactNode } from 'react';
import { CookiesProvider } from 'react-cookie';

interface CookiesWrapperProps {
  children: ReactNode;
}

const CookiesWrapper = ({ children }: CookiesWrapperProps) => (
  <CookiesProvider>{children}</CookiesProvider>
);

export default CookiesWrapper;
