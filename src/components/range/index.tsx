import * as React from "react";
import { RangeWrapper } from "./style";

export interface IRangeProps {
  percent: number;
}

export default function Range({ percent = 0 }: IRangeProps) {
  return (
    <RangeWrapper>
      <div
        className="main"
        style={{
          width: `${percent * 100}%`,
        }}
      ></div>
    </RangeWrapper>
  );
}
