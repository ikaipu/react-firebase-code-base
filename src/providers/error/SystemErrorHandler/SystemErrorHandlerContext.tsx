import React from 'react';

export interface SystemErrorHandlerContextProps {
  showModal: () => void;
}

export const SystemErrorHandlerContext =
  React.createContext<SystemErrorHandlerContextProps>({
    showModal: () => undefined,
  });
