// eslint-disable-file
import React, { FC } from 'react';
import { inputFormStyle, labelStyle, textMarginStyle } from './style';

type Props = {
  label: string;
  type: string;
  placeholder: string;
};

const TextInputForm: FC<Props> = (props) => {
  const { label, type, placeholder } = props;

  return (
    <div style={textMarginStyle}>
      <label style={labelStyle}>{label}</label>
      <div>
        <input type={type} placeholder={placeholder} style={inputFormStyle} />
      </div>
    </div>
  );
};

export default TextInputForm;
