import React from 'react';

type Props = {
  disabled: boolean;
};

export const ArrowIcon: React.FC<Props> = ({ disabled }) => {
  return (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.47146 0.528636C5.21111 0.268287 4.789 0.268287 4.52865 0.528636L0.528646 4.52864C0.268297 4.78899 0.268297 5.2111 0.528646 5.47145L4.52865 9.47145C4.789 9.7318 5.21111 9.7318 5.47146 9.47145C5.7318 9.2111 5.7318 8.78899 5.47146 8.52864L1.94286 5.00004L5.47146 1.47145C5.7318 1.2111 5.7318 0.788986 5.47146 0.528636Z"
        fill={disabled ? '#89939A' : '#0F0F11'}
      />
    </svg>
  );
};
