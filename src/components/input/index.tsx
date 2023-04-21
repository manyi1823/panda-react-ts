import * as React from 'react';
import { InputWrapper } from './style';

export interface IInputProps {
}

export default function Input(props: IInputProps) {
  return (
    <InputWrapper>
      <input placeholder="Amount..." />
    </InputWrapper>
  );
}
