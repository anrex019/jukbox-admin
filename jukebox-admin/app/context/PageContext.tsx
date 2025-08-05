'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type PageContextType = {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
};

const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPage, setSelectedPage] = useState('artistsAlbum');

  return (
    <PageContext.Provider value={{ selectedPage, setSelectedPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePage must be used within a PageProvider');
  }
  return context;
};