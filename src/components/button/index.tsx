import * as React from "react";
import { ButtonWrapper } from "./style";

export interface IButtonProps {
  text: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

export default function Button({ text, onClick, style }: IButtonProps) {
  return (
    <ButtonWrapper onClick={onClick} style={{ ...style }}>
      {text}
    </ButtonWrapper>
  );
}
