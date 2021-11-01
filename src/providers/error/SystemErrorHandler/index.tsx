import React, { FC, useEffect } from 'react';
import { useModal } from 'react-modal-hook';
import { RequestStateType } from 'config/requestState';
import { SystemErrorHandlerContext } from './SystemErrorHandlerContext';

// Type

// Constant

// Component
import ErrorMessageModal from '../../../components/organisms/modal/error/ErrorMessageModal';

export type SystemErrorHandlerProps = {
  children: React.ReactNode;
  requestState: RequestStateType;
  setRequestState: (requestState: RequestStateType) => void;
};

const SystemErrorHandler: FC<SystemErrorHandlerProps> = ({
  children,
  requestState,
  setRequestState,
}: SystemErrorHandlerProps) => {
  const [showModal, hideModal] = useModal(
    () => (
      <ErrorMessageModal
        state={`Error: ${requestState}`}
        closeAction={() => {
          setRequestState(RequestStateType.INITIAL);
          hideModal();
        }}
      />
    ),
    [requestState],
  );

  useEffect(() => {
    if (requestState === RequestStateType.FAILED) {
      showModal();
    }
  }, [requestState, showModal]);

  return (
    <SystemErrorHandlerContext.Provider
      value={{
        showModal,
      }}
    >
      {children}
    </SystemErrorHandlerContext.Provider>
  );
};
export default SystemErrorHandler;
