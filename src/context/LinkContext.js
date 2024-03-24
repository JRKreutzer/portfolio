// LinkContext.js
import React, { createContext, useContext, useState } from 'react';
import { links } from '../constants/index';
// Array de links

// Criando o contexto
const LinkContext = createContext();

// Provedor do contexto
export const LinkProvider = ({ children }) => {
  const [linksState, setLinksState] = useState(links);

  return (
    <LinkContext.Provider value={{ linksState, setLinksState }}>
      {children}
    </LinkContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useLinkContext = () => useContext(LinkContext);
