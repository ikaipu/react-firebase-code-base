import React, { FC, useEffect } from 'react';
import { useModal } from 'react-modal-hook';
import { ErrorCodeType } from 'errors/ErrorHandler/ErrorCode.type';
import {
  createRequestState,
  RequestState,
  RequestStateType,
} from 'config/requestState';
import { SystemErrorHandlerContext } from './SystemErrorHandlerContext';

// Type

// Constant

// Component
import ErrorMessageModal from '../../../components/organisms/modal/error/ErrorMessageModal';

export type SystemErrorHandlerProps = {
  children: React.ReactNode;
  requestState: RequestState;
  setRequestState: (requestState: RequestState) => void;
};

const SystemErrorHandler: FC<SystemErrorHandlerProps> = ({
  children,
  requestState,
  setRequestState,
}: SystemErrorHandlerProps) => {
  //  const { signOut } = useContext(SignOutContext);

  const { state, errorCode } = requestState;

  const [showModal, hideModal] = useModal(
    () => (
      <ErrorMessageModal
        state={errorCode}
        closeAction={() => {
          setRequestState(createRequestState(RequestStateType.INITIAL));
          hideModal();
        }}
      />
    ),
    [state],
  );

  useEffect(() => {
    switch (errorCode) {
      // case ErrorCodeType.UNAUTHORIZED_ERROR:
      //   signOut();
      //  break;
      case ErrorCodeType.SERVER_ERROR:
      case ErrorCodeType.REQUEST_TIMEOUT_ERROR:
        showModal();
        break;
      default:
    }
  }, [errorCode, showModal]);

  if (
    errorCode === ErrorCodeType.SERVER_ERROR ||
    errorCode === ErrorCodeType.REQUEST_TIMEOUT_ERROR
  )
    return <></>;

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
