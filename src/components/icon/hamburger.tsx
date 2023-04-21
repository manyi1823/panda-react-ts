import * as React from 'react';

export interface IHamburgerIconProps {
    onClick?: () => void;
}

export default function HamburgerIcon({
    onClick,
}: IHamburgerIconProps) {
  return (
    <div>
      <svg
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        cursor={onClick ? 'pointer' : 'default'}
      >
        <path
          d="M26.6666 9.39999H5.33325M26.6666 16.0667H5.33325M26.6666 22.7333H5.33325"
          stroke="#545454"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
}
