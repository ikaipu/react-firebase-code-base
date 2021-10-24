// import { ErrorCodeType } from 'errors/ErrorHandler/ErrorCode.type';
import React, { FC } from 'react';
// import { useTranslation } from 'react-i18next';
import ReactModal from 'react-modal';
import { contentStyle, overlayStyle } from './style';

export interface ErrorMessageModalProps {
  state: string;
  closeAction: () => void;
}

const ErrorMessageModal: FC<ErrorMessageModalProps> = ({
  // state,
  closeAction,
}: ErrorMessageModalProps) => {
  //  const { t } = useTranslation();
  const modalStyle = {
    content: contentStyle,
    overlay: overlayStyle,
  };

  // let title = '';
  // let line = '';

  // switch (state) {
  //   case ErrorCodeType.SERVER_ERROR:
  //     title = t(`error.ServerError.title`);
  //     line = t(`error.ServerError.description`);
  //     break;
  //   case ErrorCodeType.REQUEST_TIMEOUT_ERROR:
  //     title = t(`error.TimeoutError.title`);
  //     line = t(`error.TimeoutError.description`);
  //     break;
  //   default:
  // }

  return (
    <ReactModal
      isOpen
      onRequestClose={closeAction}
      style={modalStyle}
      ariaHideApp={false}
    />
  );
};

export default ErrorMessageModal;
